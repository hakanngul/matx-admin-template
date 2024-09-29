import { createContext, useMemo, useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  notifications: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_NOTIFICATIONS":
      return { ...state, notifications: action.payload };
    case "DELETE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    case "CLEAR_NOTIFICATIONS":
      return { ...state, notifications: [] };
    default:
      return state;
  }
};

const NotificationContext = createContext({
  notifications: [],
  getNotifications: () => { },
  deleteNotification: () => { },
  clearNotifications: () => { },
  createNotification: () => { },
});

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNotifications = async () => {
    try {
      const res = await axios.get("/api/notification");
      dispatch({ type: "LOAD_NOTIFICATIONS", payload: res.data });
    } catch (error) {
      console.error("Get notifications failed:", error);
    }
  };

  const deleteNotification = async (notificationID) => {
    try {
      await axios.post("/api/notification/delete", { id: notificationID });
      dispatch({ type: "DELETE_NOTIFICATION", payload: notificationID });
    } catch (error) {
      console.error("Delete notification failed:", error);
    }
  };

  const clearNotifications = async () => {
    try {
      await axios.post("/api/notification/delete-all");
      dispatch({ type: "CLEAR_NOTIFICATIONS" });
    } catch (error) {
      console.error("Clear notifications failed:", error);
    }
  };

  const createNotification = async (notification) => {
    try {
      const res = await axios.post("/api/notification/add", { notification });
      dispatch({ type: "LOAD_NOTIFICATIONS", payload: res.data });
    } catch (error) {
      console.error("Create notification failed:", error);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  const notificationValue = useMemo(
    () => ({
      notifications: state.notifications,
      getNotifications,
      deleteNotification,
      clearNotifications,
      createNotification,
    }),
    [state.notifications]
  );

  return (
    <NotificationContext.Provider value={notificationValue}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;