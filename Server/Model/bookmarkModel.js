
import mongoose from "mongoose";

const bookMarkSchema = mongoose.Schema(
    {
     title:String,
     url:String
    },
    {
        timestamps:true,
    }
);


const bookMarkModel = mongoose.model("Bookmarks", bookMarkSchema)
export default bookMarkModel