import React from "react";
import { NotificationWrapper, Header, NotificationList, NotificationItem, EmptyState } from "./style";

const notifications = [
  { id: 1, title: "New Message", message: "New medicines Arrived", time: "2h ago" },
  { id: 2, title: "Order Update", message: "Your order #1234 has been shipped", time: "1d ago" },
  { id: 3, title: "Reminder", message: "Don't Forget to take your Medicines", time: "3h ago" }
];

const NotificationScreen = () => {
  return (
    <NotificationWrapper>
      <Header>Notifications</Header>
      <NotificationList>
        {notifications.length > 0 ? (
          notifications.map(notif => (
            <NotificationItem key={notif.id}>
              <div className="title">{notif.title}</div>
              <div className="message">{notif.message}</div>
              <div className="time">{notif.time}</div>
            </NotificationItem>
          ))
        ) : (
          <EmptyState>No notifications yet!</EmptyState>
        )}
      </NotificationList>
    </NotificationWrapper>
  );
};

export default NotificationScreen;
