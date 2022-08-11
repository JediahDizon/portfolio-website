import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

// Components
import App from "components/app";

// Styles
// import "antd/dist/antd.min.css";
import "antd/dist/antd.variable.min.css";
import "./index.css";


ConfigProvider.config({
  theme: {
    primaryColor: "#AC7f55",
    /**
     * @primary-color: #1890ff; // primary color for all components
     * @link-color: #1890ff; // link color
     * @success-color: #52c41a; // success state color
     * @warning-color: #faad14; // warning state color
     * @error-color: #f5222d; // error state color
     * @font-size-base: 14px; // major text font size
     * @heading-color: rgba(0, 0, 0, 0.85); // heading text color
     * @text-color: rgba(0, 0, 0, 0.65); // major text color
     * @text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
     * @disabled-color: rgba(0, 0, 0, 0.25); // disable state color
     * @border-radius-base: 2px; // major border radius
     * @border-color-base: #d9d9d9; // major border color
     * @box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers
    */
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
