import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = ({ message, type }) => {
  const showToast = (message, type) => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      default:
        toast(message);
    }
  };

  return (
    <div>
      {showToast(message, type)}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Toaster;
