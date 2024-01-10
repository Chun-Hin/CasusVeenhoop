import scoreSchema from "../models/score.js";

//create one
export const createScore = async (req, res) => {
    const score = new scoreSchema({
        score: req.body.score,
        entrydate: req.body.entrydate,
        teacherId: req.body.teacherId,
        studentId: req.body.studentId,
        subjectId: req.body.subjectId,
        testId: req.body.testId,
    });

    try {
        const newScore = await score.save();
        res.status(201).json(newScore);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get all
export const getScores = async (req, res) => {
    try {
        const score = await scoreSchema.find()
        res.json(score)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getScore = async (req, res) => {
    try {
        const score = await scoreSchema.findById(req.params.id).populate("score").populate("entrydate");
        if (!score) {
            return res.status(404).json({ message: "Score not found" });
        }
        res.status(200).json({ score });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateScore = async (req, res) => {
    const {id} = req.params;
    const {score, entrydate, teacherId, studentId, subjectId, testId} = req.body;

    try {
        const trip = await scoreSchema.findById(id);
        if (score) {
            trip.score = score;
        }
        if (entrydate) {
            trip.entrydate = entrydate;
        }
        if (teacherId) {
            trip.teacherId = teacherId;
        }
        if (studentId) {
            trip.studentId = studentId;
        }
        if (subjectId) {
            trip.subjectId = subjectId;
        }
        if (testId) {
            trip.testId = testId;
        }
        await trip.save();
        res.status(200).json({success: true, data: trip});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteScore = async (req, res) => {
    try {
        const deletedScore = await scoreSchema.findByIdAndDelete(req.params.id);
        if (!deletedScore) {
            return res.status(404).json({ message: "Score not found" });
        }
        res.status(200).json({ deletedScore });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



