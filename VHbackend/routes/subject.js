import express from "express";

import {
    createSubject,
    getSubjects,
    getSubject,
    updateSubject,
    deleteSubject
} from "../controllers/Subject.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createSubject)

// get all
router.get('/', getSubjects)

// get by id
router.get('/:id', getSubject)

// update one
router.patch('/:id', updateSubject)

// delete one
router.delete('/:id', deleteSubject)
export default router;
