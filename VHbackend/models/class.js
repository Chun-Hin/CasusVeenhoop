import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    classname : {
        type: String,
        required: true,
        unique: true
    }
});


export default mongoose.model("Class", classSchema);
