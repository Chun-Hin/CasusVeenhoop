import  classSchema from "../models/class.js";

//create one
export const createClass = async (req, res) => {
    const klas = new classSchema({
        classname: req.body.classname
    })
    try {
        const newKlas = await klas.save()
        res.status(201).json(newKlas)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// get all
export const getClasses = async (req, res) => {
    try {
        const klas = await classSchema.find()
        res.json(klas)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getClass = async (req, res) => {
    try {
        const klas = await classSchema.findById(req.params.id).populate("classname");
        if (!klas) {
            return res.status(404).json({ message: "klas niet gevonden" });
        }
        res.status(200).json({ klas });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateClass = async (req, res) => {
    const {id} = req.params;
    const {classname} = req.body;

    try {
        const klas = await classSchema.findById(id);
        if (classname) {
            klas.classname = classname;
        }
        await klas.save();
        res.status(200).json({success: true, data: klas});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteClass = async (req, res) => {
    try {
        const deletedKlas = await classSchema.findByIdAndDelete(req.params.id);
        if (!deletedKlas) {
            return res.status(404).json({ message: "Klas not found" });
        }
        res.status(200).json({ deletedKlas });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



