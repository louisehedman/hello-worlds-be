import mongoose, { Schema } from "mongoose";

interface BlogInterface {
    title: string;
    body: string;
    author: string;
    date: string;
}


const blogSchema = new Schema<BlogInterface>({
    title: {
        type: String,
        unique: false,
        required: [true, "Can't be blank"]
    },
    body: {
        type: String,
        unique: false,
        required: [true, "Can't be blank"]
    },
    author: {
        type: String,
        unique: false,
        required: [true, "Can't be blank"]
    },
    date: {
        type: String,
        unique: false,
        required: [true, "Can't be blank"]
    },

})

const Blog = mongoose.model<BlogInterface>("Blog", blogSchema);

export default Blog;