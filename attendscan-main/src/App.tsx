// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- IMPORTANT: These are your import statements ---
// Since Menu.tsx and Signup.tsx are in the same 'src' directory as App.tsx,
// you can use the relative path './' followed by the file name (without extension).
import Menu from "./Menu"; // Imports the default export from Menu.tsx
import Signup from "./Signup"; // Imports the default export from Signup.tsx
// --- END IMPORTANT ---

function App() {
  return (
    <Router>
      <Routes>
        {/*
          Define your routes here.
          The 'path' is the URL segment, and 'element' is the component to render.
        */}
        <Route path="/" element={<Menu />} />{" "}
        {/* Renders the Menu component when the URL is "/" */}
        <Route path="/Signup" element={<Signup />} />{" "}
        {/* Renders the Signup component when the URL is "/Signup" */}
        {/* You can add more routes here, for example: */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App; // Makes the App component available for 'main.tsx' (or index.tsx) to render
