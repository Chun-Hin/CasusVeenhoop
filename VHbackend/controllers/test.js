import testSchema from "../models/test.js";

//create one
export const createTest = async (req, res) => {
    const test = new testSchema({
        testname: req.body.testname,
        subjectId: req.body.subjectId
    });

    try {
        const newTest = await test.save();
        res.status(201).json(newTest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get all
export const getTests = async (req, res) => {
    try {
        const subject = await testSchema.find()
        res.json(subject)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getTest = async (req, res) => {
    try {
        const test = await testSchema.findById(req.params.id).populate("testname").populate("subjectId");
        if (!test) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json({ test });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateTest = async (req, res) => {
    const {id} = req.params;
    const {testname, subjectId} = req.body;

    try {
        const trip = await testSchema.findById(id);
        if (testname) {
            trip.testname = testname;
        }
        if (subjectId) {
            trip.subjectId = subjectId;
        }
        await trip.save();
        res.status(200).json({success: true, data: trip});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteTest = async (req, res) => {
    try {
        const deletedTest = await testSchema.findByIdAndDelete(req.params.id);
        if (!deletedTest) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json({ deletedTest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



