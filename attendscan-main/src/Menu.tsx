import { Navigate } from "react-router-dom";
import React from "react";

function Menu() {
  const [goToSignup, setGoToSignup] = React.useState(false);

  if (goToSignup) {
    return <Navigate to="/Signup" />;
  }

  return (
    <>
      <div className="=flex">
        <section className="menu p-20  mx-80 mt-10 rounded-3xl shadow-lg text-black bg-gray-200">
          <h1 className="header-title text-center font-extrabold text-5xl mb-4">
            Daily Attendance QR System
          </h1>
          <p className="text-center text-3xl p-10">
            Streamline attendance tracking with secure QR code technology.
            Simple, fast, and reliable for students and instructors.
          </p>
        </section>

        <section className="flex justify-center items-center">
          <section className="menu p-20  mx-25 my-20 rounded-3xl shadow-lg bg-green-200">
            <h1 className="student-title text-center font-extrabold text-5xl mb-4">
              For Students
            </h1>
            <h3 className="text-center p-4 font-bold text-4xl mb-4">
              Quick and easy attendance marking
            </h3>
            <li className="text-center text-3xl p-10 list-none">
              <ul className="p-3">✅Scan QR codes instantly</ul>
              <ul className="p-3">✅View attendance History</ul>
              <ul className="p-3">✅Email verification security</ul>
            </li>
          </section>

          <section className="menu p-20  mx-25 my-20 rounded-3xl shadow-lg bg-blue-200">
            <h1 className="student-title text-center font-extrabold text-5xl mb-4">
              For Instructors
            </h1>
            <h3 className="text-center p-4 font-bold text-4xl mb-4">
              Powerful attendance management
            </h3>
            <li className="text-center text-3xl p-10 list-none">
              <ul className="p-3">✅Generates daily QR code</ul>
              <ul className="p-3">✅Real time attendance tracking</ul>
              <ul className="p-3">✅Export as CSV</ul>
            </li>
          </section>
        </section>
        <section className="menu p-20  mx-80 my-1 rounded-3xl shadow-lg bg-yellow-200">
          <h1 className="student-title text-center font-extrabold text-5xl mb-4">
            How It Works
          </h1>
          <h3 className="text-center p-4 font-bold text-4xl">Sign In</h3>
          <p className="text-center text-3xl p-5">
            Students and instructors log in with their credentials and verify
            their email
          </p>
          <h3 className="text-center p-4 font-bold text-4xl">
            Generate or scan
          </h3>
          <p className="text-center text-3xl p-5">
            Instructors create daily QR codes while students scan them for
            attendance
          </p>
          <h3 className="text-center p-4 font-bold text-4xl">Sign In</h3>
          <p className="text-center text-3xl p-5">
            View real-time attendance data and export reports for record keeping
          </p>
        </section>

        <section className="p-20">
          <button
            onClick={() => setGoToSignup(true)}
            className="btn-getstart flex items-center font-extrabold text-5xl mx-auto cursor-pointer border-2 border-black rounded-full bg-gray-600 hover:bg-gray-800 text-white px-10 py-5"
          >
            Get started
          </button>
        </section>
      </div>
    </>
  );
}

export default Menu;
