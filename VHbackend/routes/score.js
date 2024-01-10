import express from "express";

import {
    createScore,
    getScores,
    getScore,
    updateScore,
    deleteScore
} from "../controllers/score.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createScore)

// get all
router.get('/', getScores);

// get by id
router.get('/:id', getScore);

// update one
router.patch('/:id', updateScore)

// delete one
router.delete('/:id', deleteScore)
export default router;
