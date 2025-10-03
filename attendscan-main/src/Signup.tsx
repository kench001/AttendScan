import React, { useState } from "react";

function Signup() {
  const [selectedRole, setSelectedRole] = useState("student"); // Default role is student

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const StudentInputs = (
    <>
      <div className="student-name">
        <p>First Name</p>
        <input
          type="text"
          placeholder="Enter your first name"
          className="w-full bg-gray-200 rounded-lg p-3 my-4"
        />
        <p>Last Name</p>
        <input
          type="text"
          placeholder="Enter your last name"
          className="w-full bg-gray-200 rounded-lg p-3"
        />
      </div>
      <div className="middle-initial">
        <p>Middle Initial (Optional)</p>
        <input
          type="text"
          placeholder="M"
          className="w-12 bg-gray-200 rounded-lg p-3 my-4"
        />
      </div>
      <div className="email-id">
        <p>Email Address</p>
        <input
          type="email"
          placeholder="your.email@example.com"
          className="w-full bg-gray-200 rounded-lg p-3 my-4"
        />
        <p>Student ID (Optional)</p>
        <input
          type="text"
          placeholder="12345678"
          className="w-full bg-gray-200 rounded-lg p-3 my-4"
        />
      </div>
    </>
  );

  const InstructorInputs = (
    <>
      <div className="instructor-name">
        <p>Full Name</p>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full bg-gray-200 rounded-lg p-3"
        />
      </div>
    </>
  );

  return (
    <>
      <div>
        <section className="signup px-20 py-10  mx-200 my-20 rounded-3xl shadow-lg text-black bg-gray-100">
          <div className="title-header p-5">
            <h2 className="text-center font-extrabold text-2xl">
              Daily Attendance
            </h2>
            <p className="text-center text-xl m-2">
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

          {selectedRole === "student" ? StudentInputs : InstructorInputs}

          <button className="text-center w-full p-3 mt-7 cursor-pointer bg-gray-900 text-white rounded-lg hover:bg-gray-800">
            Continue
          </button>
        </section>
      </div>
    </>
  );
}

export default Signup;
