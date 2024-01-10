import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    subjectIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]
});

export default mongoose.model("Teacher", teacherSchema);
