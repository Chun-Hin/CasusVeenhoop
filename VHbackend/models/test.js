import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    testname : {
        type: String,
        required: true,
        unique: true
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Subject'
    }
});


export default mongoose.model("Test", testSchema);
