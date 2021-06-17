"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayListPage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
const Util_1 = require("../Util");
var mySort = { contactName: 1 };
function DisplayListPage(req, res, next) {
    contacts_1.default.find(function (err, contactsCollection) {
        if (err) {
            return console.error(err);
        }
        res.render("index", {
            title: "Business Contacts List",
            page: "business-contacts-list",
            contacts: contactsCollection,
            displayName: Util_1.UserDisplayName,
        });
    }).sort(mySort);
}
exports.DisplayListPage = DisplayListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.findById(id, {}, {}, (err, contactsItemToEdit) => {
        if (err) {
            return console.error(err);
            res.end(err);
        }
        res.render("index", {
            title: "Edit",
            page: "edit",
            item: contactsItemToEdit,
            displayName: Util_1.UserDisplayName,
        });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render("index", {
        title: "Add",
        page: "update",
        contacts: "",
        displayName: Util_1.UserDisplayName,
    });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContactsItem = new contacts_1.default({
        _id: id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress,
    });
    contacts_1.default.updateOne({ _id: id }, updatedContactsItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/business-contacts-list");
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contacts_1.default({
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress,
    });
    contacts_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/business-contacts-list");
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/business-contacts-list");
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contacts.js.map