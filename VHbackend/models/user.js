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
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    subjectId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    role: {
        type: String,
        enum: ['docent', 'student'],
        default: 'student'
    }
});

export default mongoose.model('User', userSchema);
