import express, { Request, Response, NextFunction } from "express";

// import model in order to use database
import Contacts from "../Models/contacts";

// import Util Functions
import { UserDisplayName } from "../Util";

export function DisplayListPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  Contacts.find(function (err, contactsCollection) {
    if (err) {
      return console.error(err);
    }
    //console.log(contactsCollection);
    res.render("index", {
      title: "Business Contacts List",
      page: "business-contacts-list",
      contacts: contactsCollection.sort(),
      displayName: UserDisplayName,
    });
  });
}

export function DisplayEditPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;
  // database syntax -> db.contacts.find({ _id: id });
  Contacts.findById(id, {}, {}, (err, contactsItemToEdit) => {
    if (err) {
      return console.error(err);
      res.end(err);
    }
    res.render("index", {
      title: "Edit",
      page: "edit",
      item: contactsItemToEdit,
      displayName: UserDisplayName,
    });
  });
}

// Display (C)reate page
export function DisplayAddPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // show the edit view
  res.render("index", {
    title: "Add",
    page: "update",
    contacts: "",
    displayName: UserDisplayName,
  });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  // instantiate a new contacts Item
  let updatedContactsItem = new Contacts({
    _id: id,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
  });

  // find the contacts item via db.contacts.update({"_id":id}) and then update
  Contacts.updateOne({ _id: id }, updatedContactsItem, {}, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/business-contacts-list");
  });
}

// Process (C)reate page
export function ProcessAddPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // instantiate a new contacts
  let newContact = new Contacts({
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
  });

  // db.contacts.insert({contacts data is here...})
  Contacts.create(newContact, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/business-contacts-list");
  });
}

// Process (D)elete page
export function ProcessDeletePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  // db.contacts.remove({"_id: id"})
  Contacts.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/business-contacts-list");
  });
}
