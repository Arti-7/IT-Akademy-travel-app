import React from "react";
import ReactDOM from "react-dom";
import './Notifications.scss'

const Notifications = () => {
    return ReactDOM.createPortal(
        <div className="Notifications">Test Notification</div>,
        document.getElementById("portal-root")
        );
};
export default Notifications;