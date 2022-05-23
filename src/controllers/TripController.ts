import { Response, Request } from 'express';
import User from '../database/models/User';
import { ErrorResponse } from '../utils/errorResponse';

const getList = async (req: Request, res: Response, next: any) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (user) {
      res.status(200).json({
        success: true,
        list: user.list
      })
    } else {
      res.status(404).json({ success: false, message: 'Could not get list' })
    }
  } catch (error) {
    return next(new ErrorResponse(error.message, 500))
  }
}

const createTrip = async (req: Request, res: Response, next: any) => {
  const { destination, travTime } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    const updateList = await User.findByIdAndUpdate(id, {
      list: [...user.list, {destination, travTime}]
    }, { new: true });

    if (updateList) {
      res.status(200).json({
        success: true,
        updateList
      })
    } else {
      res.status(404).json({ success: false, message: 'Could not update list' })
    }
  } catch (error) {
    return next(new ErrorResponse(error.message, 500))
  }
}

export { getList, createTrip };