import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
export const types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}
const options = {
  // you can also just use 'bottom center'
  position: positions.CENTER,
  type: types.INFO,
  timeout: 2000,
  offset: '220px',
  // you can also just use 'scale'
  transition: transitions.FADE,
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>

);
