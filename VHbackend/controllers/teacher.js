import teacherSchema from "../models/teacher.js";

//create one
export const createTeacher = async (req, res) => {
    const teacher = new teacherSchema({
        surname: req.body.surname,
        lastname: req.body.lastname,
        subjectIds: req.body.subjectIds
    });

    try {
        const newTeacher = await teacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get all
export const getTeachers = async (req, res) => {
    try {
        const subject = await teacherSchema.find()
        res.json(subject)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getTeacher = async (req, res) => {
    try {
        const teacher = await teacherSchema.findById(req.params.id).populate("surname").populate("subjectIds");
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.status(200).json({ teacher });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateTeacher = async (req, res) => {
    const {id} = req.params;
    const {surname, lastname, subjectIds} = req.body;

    try {
        const trip = await teacherSchema.findById(id);
        if (surname) {
            trip.surname = surname;
        }
        if (lastname) {
            trip.lastname = lastname;
        }
        if (subjectIds) {
            trip.subjectIds = subjectIds;
        }
        await trip.save();
        res.status(200).json({success: true, data: trip});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteTeacher = async (req, res) => {
    try {
        const deletedTeacher = await teacherSchema.findByIdAndDelete(req.params.id);
        if (!deletedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.status(200).json({ deletedTeacher });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



