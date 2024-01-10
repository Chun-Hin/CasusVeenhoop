import express from "express";

import {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} from "../controllers/student.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createStudent)

// get all
router.get('/', getStudents);

// get by id
router.get('/:id', getStudent);

// update one
router.patch('/:id', updateStudent)

// delete one
router.delete('/:id', deleteStudent)
export default router;
