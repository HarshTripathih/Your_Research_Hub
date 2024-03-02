import express from 'express';
import { getAllData, createData, getDataById, updateData, deleteData } from '../controllers/researcherController';

const router = express.Router();

router.get("/",getAllData);
router.post("/",createData);
router.get("/:id",getDataById);
router.put("/:id",updateData);
router.delete("/:id",deleteData);

export default router;