/*
File Name: user.ts
Student Name: Roshna Raju
Student Id: 301174285
Date: 17/06/20214
*/

import mongoose, { PassportLocalSchema } from "mongoose";
const Schema = mongoose.Schema; // alias for mongoose schema
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new Schema(
  {
    userName: String,
    emailAddress: String,
    displayName: String,
    created: {
      type: Date,
      default: Date.now(),
    },
    updated: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "users",
  }
);

UserSchema.plugin(passportLocalMongoose);
declare global {
  export type UserDocument = mongoose.Document & {
    _id: String;
    username: String;
    emailAddress: String;
    displayName: String;
  };
}
const Model = mongoose.model("Contact", UserSchema as PassportLocalSchema);
export default Model;
