/*
File Name: contacts.ts
Student Name: Roshna Raju
Student Id: 301174285
Date: 17/06/20214
*/

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

const Model = mongoose.model("Contacts", ContactsSchema);
export default Model;
