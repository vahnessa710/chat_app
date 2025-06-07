// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // 🔐 Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      }, { merge: true });

      console.log("Signed in as", user.displayName);
      navigate("/chat");

    } catch (err) {
      console.error("Error signing in:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back!</h1>
        <p className="mb-8 text-gray-600">Sign in to continue to Chat App</p>

        <button
          onClick={signIn}
          disabled={loading}
          className={`flex items-center justify-center gap-3 w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            className="w-6 h-6"
          />
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
}

export default Login;