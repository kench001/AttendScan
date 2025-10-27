import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Import Public Page Components ---
import Menu from "./Menu.tsx"; // Assuming these files exist in src/
import Signup from "./Signup.tsx";
import Login from "./Login.tsx";
import StudentDashboard from "./StudentDashboard.tsx"; // Original import

// --- Import Layout and Page Components from AdminLayout ---
// We import the layout AND the page components exported from AdminLayout.tsx
import {
  default as AdminLayout,
  DashboardPage,
  GenerateQrPage,
  AttendanceRecordsPage,
  StudentManagementPage,
  SettingsPage,
} from "./AdminLayout.tsx"; // Assuming AdminLayout.tsx is in src/

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public Routes (No Layout) --- */}
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* --- Original Student Dashboard Route (Standalone) --- */}
        {/* Keep this if it's separate from the admin dashboard */}
        <Route path="/StudentDashboard" element={<StudentDashboard />} />

        {/* --- Admin Dashboard Routes (Using AdminLayout) --- */}
        {/* This Route now acts as a PARENT for all admin pages */}
        <Route path="/dashboard" element={<AdminLayout />}>
          {/* Child Routes - these render inside AdminLayout's <Outlet /> */}

          {/* index=true makes this the default page for /dashboard */}
          <Route index element={<DashboardPage />} />

          {/* Other admin pages - paths are relative to /dashboard */}
          <Route path="generate-qr" element={<GenerateQrPage />} />
          <Route path="records" element={<AttendanceRecordsPage />} />
          <Route path="students" element={<StudentManagementPage />} />
          <Route path="settings" element={<SettingsPage />} />

          {/* Add any other pages that should use the AdminLayout here */}
        </Route>

        {/* Optional: Add a 404 Not Found Route */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
