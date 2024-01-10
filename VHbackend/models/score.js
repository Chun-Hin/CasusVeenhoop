import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    score: {
        type: String,
        required: true
    },
    entrydate: {
        type: Date,
        required: true
    },
    teacherId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }],
    studentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    subjectId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    testId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
    }],
});

export default mongoose.model("Score", scoreSchema);
