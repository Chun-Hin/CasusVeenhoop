import express from "express";

import {
    createTest,
    getTests,
    getTest,
    updateTest,
    deleteTest
} from "../controllers/test.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createTest)

// get all
router.get('/', getTests);

// get by id
router.get('/:id', getTest);

// update one
router.patch('/:id', updateTest)

// delete one
router.delete('/:id', deleteTest)
export default router;
