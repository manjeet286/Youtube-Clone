import React, { useState } from "react";
import { logInWithGoogle } from "./authservice";
import { useNavigate } from "react-router-dom";
import { FaYoutube } from "react-icons/fa"; // YouTube icon from react-icons

const Login = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await logInWithGoogle();
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg flex flex-col items-center">
                <FaYoutube className="text-red-600 text-6xl mb-4" />
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-md shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300"
                >
                    Log In with Google
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
