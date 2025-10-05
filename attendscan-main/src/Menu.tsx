import { Navigate } from "react-router-dom";
import React from "react";

function Menu() {
  const [goToSignup, setGoToSignup] = React.useState(false);

  if (goToSignup) {
    return <Navigate to="/Signup" />;
  }

  return (
    <>
      <div className="flex flex-col">
        {" "}
        <section className="menu p-5 sm:p-10 md:p-20 mx-2 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80 mt-5 md:mt-10 rounded-3xl shadow-lg text-black bg-gray-200">
          <h1 className="header-title text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-2 md:mb-4">
            Daily Attendance QR System
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-3 sm:p-5 md:p-10">
            Streamline attendance tracking with secure QR code technology.
            Simple, fast, and reliable for students and instructors.
          </p>
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center">
          <section className="menu p-5 sm:p-10 md:p-20 mx-2 sm:mx-5 md:mx-10 my-5 md:my-10 lg:mx-20 lg:my-20 rounded-3xl shadow-lg bg-green-200">
            <h1 className="student-title text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
              For Students
            </h1>
            <h3 className="text-center p-2 sm:p-3 md:p-4 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
              Quick and easy attendance marking
            </h3>
            <li className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl p-3 sm:p-5 md:p-10 list-none">
              <ul className="p-1 sm:p-2 md:p-3">✅Scan QR codes instantly</ul>{" "}
              <ul className="p-1 sm:p-2 md:p-3">✅View attendance History</ul>{" "}
              <ul className="p-1 sm:p-2 md:p-3">
                ✅Email verification security
              </ul>{" "}
            </li>
          </section>

          <section className="menu p-5 sm:p-10 md:p-20 mx-2 sm:mx-5 md:mx-10 my-5 md:my-10 lg:mx-20 lg:my-20 rounded-3xl shadow-lg bg-blue-200">
            <h1 className="student-title text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
              For Instructors
            </h1>
            <h3 className="text-center p-2 sm:p-3 md:p-4 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
              Powerful attendance management
            </h3>
            <li className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl p-3 sm:p-5 md:p-10 list-none">
              <ul className="p-1 sm:p-2 md:p-3">✅Generates daily QR code</ul>{" "}
              <ul className="p-1 sm:p-2 md:p-3">
                ✅Real time attendance tracking
              </ul>{" "}
              <ul className="p-1 sm:p-2 md:p-3">✅Export as CSV</ul>{" "}
            </li>
          </section>
        </section>
        <section className="menu p-5 sm:p-10 md:p-20 mx-2 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80 my-5 md:my-1 rounded-3xl shadow-lg bg-yellow-200">
          <h1 className="student-title text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-2 md:mb-4">
            How It Works
          </h1>
          <h3 className="text-center p-2 sm:p-3 md:p-4 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Sign In
          </h3>
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-3 sm:p-5">
            Students and instructors log in with their credentials and verify
            their email
          </p>
          <h3 className="text-center p-2 sm:p-3 md:p-4 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Generate or scan
          </h3>
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-3 sm:p-5">
            Instructors create daily QR codes while students scan them for
            attendance
          </p>
          <h3 className="text-center p-2 sm:p-3 md:p-4 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Sign In
          </h3>
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-3 sm:p-5">
            View real-time attendance data and export reports for record keeping
          </p>
        </section>
        <section className="p-5 sm:p-10 md:p-20">
          <button
            onClick={() => setGoToSignup(true)}
            className="btn-getstart flex items-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto cursor-pointer border-2 border-black rounded-full bg-gray-600 hover:bg-gray-800 text-white px-5 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5"
          >
            Get started
          </button>
        </section>
      </div>
    </>
  );
}

export default Menu;
