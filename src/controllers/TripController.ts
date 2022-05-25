import { Response, Request } from "express";
import User from "../database/models/User";


const getList = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (user) {
      return res.status(200).json({
        success: true,
        list: user.tripList,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const getTrip = async (req: Request, res: Response) => {
  const { userId, tripId } = req.params;

  try {
    const user = await User.findById(userId);

    if (user) {
      const trip = user.tripList.id(tripId);

      if (trip) {
        return res.status(200).json({ success: true, trip });
      } else {
        return res.status(404).json({ success: false, message: "Not found" });
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const createTrip = async (req: Request, res: Response) => {
  const { destination, travTime } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    const updateList = await User.findByIdAndUpdate(
      id,
      {
        tripList: [...user.tripList, { destination, travTime }],
      },
      { new: true }
    );

    if (updateList) {
      return res.status(200).json({
        success: true,
        updateList,
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Could not update list" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export { getList, createTrip, getTrip };
