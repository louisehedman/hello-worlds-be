import Blog from "../database/models/Blogpost";
import { Request, Response } from "express";
import mongoose from "mongoose";

const getBlogs = (req: Request, res: Response) => {
    Blog.find({}, function (err: Error, blogs) {
      if (!blogs) {
        return res.status(404).json("No blogs found");
      }
      if (err) {
        return res.status(500).send(console.error());
      }
      return res.status(200).json({ blogs });
    });
};

const getBlog = (req: Request, res: Response) => {
    Blog.findById(
      req.params.id,
      function (err: Error, blog: mongoose.Document) {
        if (!blog) {
          return res.status(404).json("No blog");
        }
        if (err) {
          return res.status(500).send(console.error());
        }
        return res.status(200).json({ blog });
      }
    );
  };



export { getBlogs, getBlog };