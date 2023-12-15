import User from '../../models/user.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({ username, password: hashedPassword, role });

        await user.save();

        res.status(201).json({ message: 'User added' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





