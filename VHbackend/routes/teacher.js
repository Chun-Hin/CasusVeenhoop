import express from "express";

import {
    createTeacher,
    getTeachers,
    getTeacher,
    updateTeacher,
    deleteTeacher
} from "../controllers/teacher.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createTeacher)

// get all
router.get('/', getTeachers);

// get by id
router.get('/:id', getTeacher);

// update one
router.patch('/:id', updateTeacher)

// delete one
router.delete('/:id', deleteTeacher)
export default router;
