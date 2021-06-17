import express from "express";
const router = express.Router();
export default router;

import {
  DisplayAddPage,
  DisplayEditPage,
  DisplayListPage,
  ProcessAddPage,
  ProcessDeletePage,
  ProcessEditPage,
} from "../Controllers/contacts";

// import Util functions
import { AuthGuard } from "../Util";

// Get business-contacts-list page - with /business-contacts-list
router.get("/", DisplayListPage);

// Get business-contacts-list page edit item based on id  - with /business-contacts-list/edit:id

router.get("/edit/:id", AuthGuard, DisplayEditPage);

/* GET - display /business-contacts-list/add page. */
router.get("/add", AuthGuard, DisplayAddPage);

/* POST - process /business-contacts-list/add page */
router.post("/add", AuthGuard, ProcessAddPage);

/* POST - process /business-contacts-list/edit/:id page */
router.post("/edit/:id", AuthGuard, ProcessEditPage);

/* GET - process /business-contacts-list/delete/:id */
router.get("/delete/:id", AuthGuard, ProcessDeletePage);
