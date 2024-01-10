import studentSchema from "../models/student.js";

//create one
export const createStudent = async (req, res) => {
    const student = new studentSchema({
        surname: req.body.surname,
        lastname: req.body.lastname,
        classId: req.body.classId
    });

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get all
export const getStudents = async (req, res) => {
    try {
        const student = await studentSchema.find()
        res.json(student)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getStudent = async (req, res) => {
    try {
        const student = await studentSchema.findById(req.params.id).populate("surname").populate("classId");
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateStudent = async (req, res) => {
    const {id} = req.params;
    const {surname, lastname, classId} = req.body;

    try {
        const trip = await studentSchema.findById(id);
        if (surname) {
            trip.surname = surname;
        }
        if (lastname) {
            trip.lastname = lastname;
        }
        if (classId) {
            trip.classId = classId;
        }
        await trip.save();
        res.status(200).json({success: true, data: trip});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await studentSchema.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ deletedStudent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



