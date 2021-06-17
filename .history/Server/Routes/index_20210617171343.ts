/*
File Name: index.ts
Student Name: Roshna Raju
Student Id: 301174285
Date: 01/06/2021
*/

import express from "express";
const router = express.Router();
export default router;

// create an index controller instance
import {
  DisplayContactPage,
  DisplayHomePage,
  DisplayLoginPage,
  ProcessLogoutPage,
  ProcessLoginPage,
  DisplayAboutPage,
  DisplayProjectsPage,
  DisplayServicesPage,
} from "../Controllers/index";

// import Util functions
import { UserDisplayName } from "../Util";

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page. */
router.get("/home", DisplayHomePage);
/* GET About page. */
router.get("/about", DisplayAboutPage);
/* GET Projects page. */
router.get("/projects", DisplayProjectsPage);
/* GET Services page. */
router.get("/services", DisplayServicesPage);

/* GET Contact page. */
router.get("/contact", DisplayContactPage);

/* GET Login page. */
router.get("/login", DisplayLoginPage);

/* POST Login page. - process login */
router.post("/login", ProcessLoginPage);

/* GET Register page. */
router.get("/register", DisplayRegisterPage);

/* POST Register page. */
router.post("/register", ProcessRegisterPage);

/* GET Logout page. */
router.get("/logout", ProcessLogoutPage);
//module.exports = router;
