import { Response, Request, NextFunction } from "express";
import User from "../database/models/User";
import { ErrorResponse } from "../utils/errorResponse";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response, next: any) => {
  const { firstName, username, email, password, isAdmin } = req.body;
  try {
    const user = await User.create({
      firstName,
      username,
      email,
      password,
      isAdmin,
    });
    user.save().then(() => {
      res.json({ message: "User created" });
    });
  } catch (error: any) {
    next(error);
  }
};

const login = async (req: Request, res: Response, next: any) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new ErrorResponse("Please provide a valid email and Password", 400)
    );
  }
  try {
    const user: any | null = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }
    const isMatch: boolean = await user.matchPassword(password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }
    if (user) {
      const token = jwt.sign(
        { id: user._id, username: user.username, isAdmin: user.isAdmin },
        process.env.JWT_SECRET!,
        {
          expiresIn: process.env.JWT_EXPIRE,
        }
      );
      return res
        .set('Access-Control-Allow-Origin', req.headers.origin)
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Access-Control-Expose-Headers', 
          'date, etag, access-control-allow-origin, access-control-allow-credentials')
        .cookie("access_token", token, { 
          httpOnly: true,
          sameSite: 'strict',
          path: '/',
        })
        .status(200)
        .json({ message: "User logged in" });
    } else {
      res.json({ message: "Sorry could not log in" });
    }
  } catch (error: any) {
    return next(new ErrorResponse(error.message, 500));
  }
};

const logout = async (req: Request, res: Response) => {
  return res
    .set('Access-Control-Allow-Origin', req.headers.origin)
    .set('Access-Control-Allow-Credentials', 'true')
    .set('Access-Control-Expose-Headers', 
      'date, etag, access-control-allow-origin, access-control-allow-credentials')
    .clearCookie("access_token", {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
    })
    .status(200)
    .json({ message: "User logged out" });
};

const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(403).json({ message: "No token" });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch {
    return res.status(403).json({ message: "Error" });
  }
};

export { register, login, logout, authorization };
