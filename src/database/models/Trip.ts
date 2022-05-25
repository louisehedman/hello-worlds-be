import { ObjectID } from 'bson';
import { Schema } from "mongoose";

interface TripInterface {
  _id: string;
  destination: ObjectID;
  travTime: number; 
}

const TripSchema: Schema = new Schema<TripInterface>({
  destination: {
      type: ObjectID,
      unique: false,
      required: true
  },
  travTime: {
      type: Number,
      unique: false,
      required: false
  }
}, 
{
  timestamps: true
})


export { TripInterface, TripSchema };