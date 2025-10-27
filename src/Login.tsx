import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import routing hooks

// --- Success Popup Component ---
const SuccessPopup = ({ message }: { message: string }) => (
  <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-down">
    {message}
  </div>
);

// --- Login Component ---
export default function LoginComponent() {
  const navigate = useNavigate(); // Initialize the navigation hook

  // State for form fields
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentNum, setStudentNum] = useState(""); // Added Student ID state

  // State for submission and feedback
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // This effect now uses 'navigate'
  useEffect(() => {
    if (successMsg) {
      // After success message is shown, wait 1.2s then navigate to home
      const timer = setTimeout(() => {
        navigate("/home");
      }, 1200);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [successMsg, navigate]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    // Payload now contains role, email, and password
    const payload: any = {
      role,
      email,
      password,
    };

    // Add student_num only if the role is student
    if (role === "student") {
      payload.student_num = studentNum;
    }

    try {
      const resp = await fetch("http://localhost:5174/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok) {
        setError(data?.error || "Login failed. Please check your details.");
        setSubmitting(false);
        return;
      }

      // Just set the success message. The useEffect will handle redirect.
      setSuccessMsg("Login successful! Redirecting...");
    } catch (err: any) {
      setError(err?.message || "A network error occurred.");
      setSubmitting(false);
    }
  };

  // Handle role change
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    setError(null); // Clear error on role change
    setPassword(""); // Clear password on role change
    setStudentNum(""); // Clear student num on role change
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-4 font-sans">
      {successMsg && <SuccessPopup message={successMsg} />}

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            📋 Welcome To AttendScan
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Select your role and enter your details to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selector */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Role
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={handleRoleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
            >
              <option value="student">🎓 Student</option>
              <option value="instructor">👤 Instructor</option>
            </select>
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              required
            />
          </div>

          {/* Student ID (Conditional) */}
          {role === "student" && (
            <div className="animate-fade-in">
              <label
                htmlFor="student_num"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Student ID
              </label>
              <input
                type="text"
                id="student_num"
                name="student_num"
                value={studentNum}
                onChange={(e) => setStudentNum(e.target.value)}
                placeholder="Enter your student ID"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                required={role === "student"}
              />
            </div>
          )}

          {/* Password Field (for both roles) */}
          <div className="animate-fade-in">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center animate-shake">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Continue"}
          </button>

          {/* Register Link now uses <Link> */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>

      {/* Adding simple animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.5s ease-out; }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  );
}
