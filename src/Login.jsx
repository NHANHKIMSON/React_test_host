import React, { useState } from "react";

function Login(props) {
  const [txtuser, setUser] = useState("");
  const [txtpass, setPass] = useState("");

  function handlEvent() {
    if (txtpass === "" || txtuser === "") {
      alert("Empty!");
    } else {
      if (txtuser === "admin" && txtpass === "123") {
        alert("Success");
        localStorage.setItem("auth_token", txtuser);
        window.location.href = "/";
      } else {
        alert("Invalid Username or Password");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-800 text-center mb-6">
          Welcome back
        </h1>
        <div className="flex justify-between mb-4">
          <button className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 px-4 rounded w-1/2 mr-2">
            <img
              src="/img/image.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Log in with Google
          </button>
          <button className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 px-4 rounded w-1/2 ml-2">
            <img
              src="/img/image-copy.png"
              alt="Apple"
              className="w-5 h-5 mr-2"
            />
            Log in with Apple
          </button>
        </div>
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="px-2 text-gray-500 dark:text-gray-400">or</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col space-y-4"
        >
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={txtuser}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={txtpass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 rounded mr-2"
              />
              Remember me
            </label>
            <a href="#" className="hover:underline text-blue-400">
              Forgot password?
            </a>
          </div>
          <button
            type="button"
            onClick={handlEvent}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-medium"
          >
            Sign in to your account
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
          Don’t have an account yet?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;