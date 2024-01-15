import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    schoolclass:{
        type: String,
    },
    subject:{
        type: String,
    },
    role: {
        type: String,
        enum: ['docent', 'student'],
        default: 'student'
    }
});

export default mongoose.model('User', userSchema);
