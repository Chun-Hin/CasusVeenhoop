// controllers/userController.js
import User from '../../models/user.js';
import bcrypt from 'bcrypt';
import Class from "../../models/class.js";

export const registerUser = async (req, res) => {
    const { username, password, className, subjectId, role } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const classObject = await Class.findOne({ classname: className });

        if (!classObject) {
            return res.status(400).json({ message: 'Class not found' });
        }

        const user = new User({ username, password: hashedPassword, class: classObject._id, subjectId, role });

        await user.save();

        res.status(201).json({ message: 'User added' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
