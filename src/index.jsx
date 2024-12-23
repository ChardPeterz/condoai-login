import React from "react";
import ReactDOMClient from "react-dom/client";
import { ManagerDashboard } from "./screens/ManagerDashboard";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ManagerDashboard />);
