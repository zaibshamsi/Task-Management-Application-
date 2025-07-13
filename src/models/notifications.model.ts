import mongoose, { Document, Schema } from "mongoose";
import { NotificationType } from "../enums/notifications.enum";

export interface NotificationDocument extends Document {
  userId: mongoose.Types.ObjectId;
  type: NotificationType;
  message: string;
  read: boolean;
  createdAt: Date;
}

const notificationSchema = new Schema<NotificationDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(NotificationType),
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const NotificationModel = mongoose.model<NotificationDocument>("Notification", notificationSchema);

export default NotificationModel;
