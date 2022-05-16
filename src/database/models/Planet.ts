import mongoose, { Schema, Types } from "mongoose";

// TypeScript interface
interface PlanetInterface {
  name: string;
  moons: Types.Array<object>;
  avgTemp: number;
  mass: object;
  grav: number;
  volume: object;
  fromEarth?: number;
  travTime?: number;
  description?: string;
  image?: string;
}

// Mongoose schema
const planetSchema = new Schema<PlanetInterface>({
  name: { type: String, required: true },
  moons: { type: [Object], default: undefined },
  avgTemp: { type: Number },
  mass: { type: Object },
  grav: { type: Number },
  volume: { type: Object },
  fromEarth: { type: Number },
  travTime: { type: Number },
  description: { type: String },
  image: { type: String },
});

const Planet = mongoose.model<PlanetInterface>("Planet", planetSchema);

export default Planet;
