/*
File Name: index.ts
Student Name: Roshna Raju
Student Id: 301174285
Date: 17/06/20214
*/

import express, { Request, Response, NextFunction } from "express";

import * as DBConfig from "../Config/db";

export function UserDisplayName(req: Request): string {
  if (req.user) {
    let user = req.user as UserDocument;
    return user.displayName.toString();
  }
  return "";
}

export function AuthGuard(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}
