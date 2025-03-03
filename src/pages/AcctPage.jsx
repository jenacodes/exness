import { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

const AcctPage = () => {
  const [mode, setMode] = useState("signin");
  return (
    <div>
      <Header />
      <hr className="border-gray-400" />
      <div className="max-w-md mx-auto p-4 rounded shadow-md">
        <h1 className="mb-6 text-2xl font-semibold leading-9">
          Welcome to Exness
        </h1>
        <div className="flex h-full mb-12">
          <button
            className={`text-gray-500 inline-flex items-center justify-center flex-1 cursor-pointer ${
              mode === "signin" ? "border-b-2 border-gray-500" : ""
            }`}
            onClick={() => setMode("signin")}
          >
            Sign in
          </button>
          <button
            className={`text-gray-500 inline-flex items-center justify-center flex-1 cursor-pointer ${
              mode === "signup" ? "border-b-2 border-gray-500" : ""
            }`}
            onClick={() => setMode("signup")}
          >
            Create an account
          </button>
        </div>
        {mode === "signin" ? <LoginPage /> : <RegisterPage />}
      </div>
      <Footer />
    </div>
  );
};

export default AcctPage;
