import mongoose, { Schema, Types } from "mongoose";

// TypeScript interface
interface PlanetInterface {
  name: string;
  moons: Types.Array<object>;
  avgTemp: number;
  mass: object;
  grav: number;
  radius: number;
  earthDistance?: number;
  shortDescription?: string;
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
  radius: { type: Number },
  earthDistance: { type: Number },
  shortDescription: { type: String },
  description: { type: String },
  image: { type: String },
});

const Planet = mongoose.model<PlanetInterface>("Planet", planetSchema);

export default Planet;
