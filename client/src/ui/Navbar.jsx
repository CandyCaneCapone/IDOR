import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome To Vulnerable Lab
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Let's test for IDOR! 🎉
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <span
              className="cursor-pointer text-sm font-medium inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
              onClick={() => navigate("signup")}
            >
              {" "}
              Sign Up{" "}
            </span>

            <span
              onClick={() => navigate("signin")}
              className="cursor-pointer block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
