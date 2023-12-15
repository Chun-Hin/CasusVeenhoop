import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import User from "../../models/user.js";

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'Gebruiker niet gevonden' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Ongeldig wachtwoord' });
        }

        const accessToken = jwt.sign({ username: user.username, role: user.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Inloggen gelukt', accessToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



