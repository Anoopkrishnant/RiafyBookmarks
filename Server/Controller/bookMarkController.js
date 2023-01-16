import mongoose from "mongoose";
import bookMarkModel from "../Model/bookmarkModel.js";


//Create Bookmarks

export const createBookmark = async (req, res) => {
    try {
        const bookMark = await new bookMarkModel(req.body).save()
        console.log(bookMark._doc);
        res.status(200).json(bookMark._doc)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getBookmark = async (req, res) => {
     try {
        const bookMarks = await bookMarkModel.find({}).lean()
        console.log(bookMarks)
        res.status(200).json(bookMarks)
     } catch (error) {
        res.status(500).json({ message: error.message })
     }
}



