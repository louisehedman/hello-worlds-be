import { Response, Request } from "express";
import User from "../database/models/User";

const getUser = async (req: Request, res: Response) => {
  // const { id } = req.params;

  try {
    const user = await User.findById(req.body.id);

    if (user) {
      return res.status(200).json({
        success: true,
        user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export { getUser };
