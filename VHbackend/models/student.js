import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    classId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }]
});

export default mongoose.model("Student", studentSchema);
