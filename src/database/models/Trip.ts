import { ObjectID } from "bson";
import { Schema } from "mongoose";

interface TripInterface {
  _id: ObjectID;
  destination: ObjectID;
  travTime: number;
  departure: string;
  firstClass: boolean;
}

const TripSchema: Schema = new Schema<TripInterface>(
  {
    destination: {
      type: ObjectID,
      unique: false,
      required: true,
    },
    travTime: {
      type: Number,
      unique: false,
      required: true,
    },
    departure: {
      type: String,
      unique: false,
      required: true,
    },
    firstClass: {
      type: Boolean,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export { TripInterface, TripSchema };
