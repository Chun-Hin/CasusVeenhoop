import express from "express";

import {
    createClass,
    getClasses,
    getClass,
    updateClass,
    deleteClass
} from "../controllers/class.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createClass)

// get all
router.get('/', getClasses)

// get by id
router.get('/:id', getClass)

// update one
router.patch('/:id', updateClass)

// delete one
router.delete('/:id', deleteClass)
export default router;
