import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// Define interfaces for form data and errors to ensure type safety
interface StudentFormData {
  firstName: string;
  lastName: string;
  middleInitial: string;
  email: string;
  studentId: string;
}

interface InstructorFormData {
  fullName: string;
}

interface Errors {
  [key: string]: string; // Allows for dynamic error keys
}

function Signup() {
  const [selectedRole, setSelectedRole] = useState("student"); // Default role is student

  const [studentFormData, setStudentFormData] = useState<StudentFormData>({
    firstName: "",
    lastName: "",
    middleInitial: "",
    email: "",
    studentId: "",
  });

  const [instructorFormData, setInstructorFormData] =
    useState<InstructorFormData>({
      fullName: "",
    });

  // State to control navigation to Login page AFTER successful registration
  const [shouldRedirectToLogin, setShouldRedirectToLogin] = useState(false);

  // State for immediate navigation to Login page (for "I already have an account" button)
  const [goToLoginPageNow, setGoToLoginPageNow] = useState(false);

  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState(false); // New state for button disabled status

  // Effect to re-validate form whenever form data or role changes
  useEffect(() => {
    // This is a simplified check for disabling the button.
    // A more thorough check is done in validateForm on submit.
    if (selectedRole === "student") {
      setIsFormValid(
        !!studentFormData.firstName.trim() &&
          !!studentFormData.lastName.trim() &&
          !!studentFormData.email.trim() &&
          !!studentFormData.studentId.trim()
      );
    } else {
      setIsFormValid(!!instructorFormData.fullName.trim());
    }
  }, [selectedRole, studentFormData, instructorFormData]); // Dependencies

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
    setErrors({}); // Clear errors when role changes
    // Reset form data on role change
    setStudentFormData({
      firstName: "",
      lastName: "",
      middleInitial: "",
      email: "",
      studentId: "",
    });
    setInstructorFormData({ fullName: "" });
  };

  const handleStudentInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setStudentFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear specific error when user starts typing again
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const handleInstructorInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setInstructorFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear specific error when user starts typing again
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    if (selectedRole === "student") {
      if (!studentFormData.firstName.trim()) {
        newErrors.firstName = "First Name is required";
      }
      if (!studentFormData.lastName.trim()) {
        newErrors.lastName = "Last Name is required";
      }
      if (!studentFormData.email.trim()) {
        newErrors.email = "Email Address is required";
      } else if (!/\S+@\S+\.\S+/.test(studentFormData.email)) {
        newErrors.email = "Email address is invalid";
      }
      if (!studentFormData.studentId.trim()) {
        newErrors.studentId = "Student ID is required";
      }
    } else {
      // Instructor validation
      if (!instructorFormData.fullName.trim()) {
        newErrors.fullName = "Full Name is required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (validateForm()) {
      // Form is valid, proceed with registration
      console.log("Form is valid! Submitting data...");
      if (selectedRole === "student") {
        console.log("Student Data:", studentFormData);
        // Here you would typically send studentFormData to your backend API
      } else {
        console.log("Instructor Data:", instructorFormData);
        // Here you would typically send instructorFormData to your backend API
      }
      // Assuming registration is successful here, then redirect to login
      setShouldRedirectToLogin(true); // <-- Set this to true ONLY after successful registration
    } else {
      console.log("Form has errors. Please correct them.");
      // You can add a general error message here if needed
    }
  };

  // --- Navigation logic ---
  // These `if` statements should be at the top level of the component's render logic
  if (shouldRedirectToLogin) {
    return <Navigate to="/Login" />;
  }
  if (goToLoginPageNow) {
    // For the "I already have an account" button
    return <Navigate to="/Login" />;
  }
  // --- End Navigation logic ---

  const StudentInputs = (
    <>
      <div className="student-name">
        <p>First Name</p>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          className="w-full bg-gray-200 rounded-lg p-3 my-4"
          value={studentFormData.firstName}
          onChange={handleStudentInputChange}
          required
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
        )}
        <p>Last Name</p>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          className="w-full bg-gray-200 rounded-lg p-3"
          value={studentFormData.lastName}
          onChange={handleStudentInputChange}
          required
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
        )}
      </div>
      <div className="middle-initial">
        <p>Middle Initial (Optional)</p>
        <input
          type="text"
          name="middleInitial"
          placeholder="M"
          maxLength={1}
          className="w-12 bg-gray-200 rounded-lg p-3 my-4 uppercase"
          value={studentFormData.middleInitial}
          onChange={handleStudentInputChange}
        />
      </div>
      <div className="email-id">
        <p>Email Address</p>
        <input
          type="email"
          name="email"
          placeholder="your.email@example.com"
          className="w-full bg-gray-200 rounded-lg p-3 my-4"
          value={studentFormData.email}
          onChange={handleStudentInputChange}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
        <p>Student ID</p>
        <input
          type="text"
          name="studentId"
          placeholder="12345678"
          className="w-full bg-gray-200 rounded-lg p-3 my-4"
          value={studentFormData.studentId}
          onChange={handleStudentInputChange}
          required
        />
        {errors.studentId && (
          <p className="text-red-500 text-sm mt-1">{errors.studentId}</p>
        )}
      </div>
    </>
  );

  const InstructorInputs = (
    <>
      <div className="instructor-name">
        <p>Full Name</p>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          className="w-full bg-gray-200 rounded-lg p-3"
          value={instructorFormData.fullName}
          onChange={handleInstructorInputChange}
          required
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>
    </>
  );

  return (
    <>
      <div>
        <section
          className="signup px-5 py-10 mx-auto my-10 rounded-3xl shadow-lg text-black bg-gray-100
                            sm:px-10 sm:my-15 sm:w-11/12
                            md:px-15 md:my-20 md:w-3/4
                            lg:px-20 lg:my-20 lg:w-2/3
                            xl:px-24 xl:my-24 xl:w-1/2"
        >
          <div className="title-header p-5">
            <h2
              className="text-center font-extrabold text-xl
                           sm:text-2xl
                           md:text-3xl"
            >
              Daily Attendance
            </h2>
            <p
              className="text-center text-base m-2
                          sm:text-lg
                          md:text-xl"
            >
              Select your role and enter your details to continue
            </p>
          </div>
          <div className="select-role">
            <p>Select Role</p>
            <select
              name="role-selector"
              id="role-selector"
              className="w-full bg-gray-200 rounded-lg p-3 my-4"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <option value="student">🎓Student</option>
              <option value="instructor">👤Instructor</option>
            </select>
          </div>

          <form onSubmit={handleSubmit}>
            {selectedRole === "student" ? StudentInputs : InstructorInputs}

            <button
              type="submit" // Correctly set as submit button
              className={`text-center w-full p-3 mt-7 cursor-pointer rounded-lg text-white font-semibold
                ${
                  isFormValid
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              disabled={!isFormValid} // Button is disabled if form is not valid
            >
              Register
            </button>
          </form>

          <button
            // This button now correctly navigates directly to the login page
            onClick={() => setGoToLoginPageNow(true)}
            className="text-center w-full p-3 cursor-pointer underline mt-4 text-gray-600 hover:text-gray-800"
          >
            I already have an account.
          </button>
        </section>
      </div>
    </>
  );
}

export default Signup;
