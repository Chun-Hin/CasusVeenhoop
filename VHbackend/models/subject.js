import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectname : {
        type: String,
        required: true,
        unique: true
    }
});


export default mongoose.model("Subject", subjectSchema);
