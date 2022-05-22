import { Response, Request } from 'express';
import User from '../database/models/User';
import { ErrorResponse } from '../utils/errorResponse';

const createTrip = async (req: Request, res: Response, next: any) => {
  const { destination, travTime } = req.body;
  const { id } = req.params;

  try {
    const updateList = await User.findByIdAndUpdate(id, {
      list: {destination, travTime}
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

export { createTrip };