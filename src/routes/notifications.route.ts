import { Router } from "express";
import { getNotificationsController } from "../controllers/notifications.controller";

export const NotificationRoutes = Router();

NotificationRoutes.get("/my", getNotificationsController)