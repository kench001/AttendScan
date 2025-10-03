// src/main.tsx (or src/index.tsx)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your App component
import "./index.css"; // Your global CSS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App /> {/* Renders your main application component */}
  </React.StrictMode>
);
