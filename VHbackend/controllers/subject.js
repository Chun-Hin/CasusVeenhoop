import  subjectSchema from "../models/subject.js";

//create one
export const createSubject = async (req, res) => {
    const subject = new subjectSchema({
        subjectname: req.body.subjectname
    })
    try {
        const newSubject = await subject.save()
        res.status(201).json(newSubject)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// get all
export const getSubjects = async (req, res) => {
    try {
        const subject = await subjectSchema.find()
        res.json(subject)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getSubject = async (req, res) => {
    try {
        const subject = await subjectSchema.findById(req.params.id).populate("subjectname");
        if (!subject) {
            return res.status(404).json({ message: "subject niet gevonden" });
        }
        res.status(200).json({ subject });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateSubject = async (req, res) => {
    const {id} = req.params;
    const {subjectname} = req.body;

    try {
        const subject = await subjectSchema.findById(id);
        if (subjectname) {
            subject.subjectname = subjectname;
        }
        await subject.save();
        res.status(200).json({success: true, data: subject});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteSubject = async (req, res) => {
    try {
        const deletedSubject = await subjectSchema.findByIdAndDelete(req.params.id);
        if (!deletedSubject) {
            return res.status(404).json({ message: "subject not found" });
        }
        res.status(200).json({ deletedSubject });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



