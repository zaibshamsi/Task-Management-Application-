import NotificationModel from "../models/notifications.model";
import { NotificationType } from "../enums/notifications.enum";

export const sendNotification = async ({
  userId,
  message,
  type,
}: {
  userId: string;
  message: string;
  type: NotificationType;
}) => {
  const notification = new NotificationModel({
    userId,
    message,
    type,
  });

  await notification.save();
  return notification;
};
