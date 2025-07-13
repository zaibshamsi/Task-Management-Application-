import { Request, Response } from "express";
import {asyncHandler} from "../middlewares/asyncHandler.middleware";
import NotificationModel from "../models/notifications.model";

export const getNotificationsController = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?._id;
  const notifications = await NotificationModel.find({ userId }).sort({ createdAt: -1 });
  res.json({ notifications });
});
