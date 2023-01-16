import express from "express";
import { createBookmark, getBookmark } from "../Controller/bookMarkController.js";

const router = express.Router()

router.post('/create', createBookmark)
router.get('/' ,getBookmark)


export default router