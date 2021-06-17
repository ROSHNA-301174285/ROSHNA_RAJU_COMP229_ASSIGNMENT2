import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for mongoose schema

const ContactsSchema = new Schema(
  {
    contactName: String,
    contactNumber: String,
    emailAddress: String,
  },
  {
    collection: "contacts",
  }
);

const Model = mongoose.model("Contact", ContactsSchema);
export default Model;