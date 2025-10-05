// import React from "react";
// import { motion } from "framer-motion";

//  function Login() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100">
//       {/* Animated Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-md p-8 bg-gradient-to-r from-teal-200 via-blue-300 to-purple-200  rounded-2xl shadow-xl"
//       >
//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-3xl font-bold text-center text-cyan-800"
//         >
//           Welcome Back
//         </motion.h1>
//         <p className="mt-2 text-center text-black">Login to your account</p>

//         {/* Form */}
//         <motion.form
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-6 space-y-4"
//         >
//           {/* Email Input */}
//           <div className="relative">
//             <input
//               type="email"
//               id="email"
//               placeholder=" "
//               className="peer w-full px-4 pt-5 pb-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-4 top-2.5 text-gray-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base"
//             >
//               Email
//             </label>
//           </div>

//           {/* Password Input */}
//           <div className="relative">
//             <input
//               type="password"
//               id="password"
//               placeholder=" "
//               className="peer w-full px-4 pt-5 pb-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
//             />
//             <label
//               htmlFor="password"
//               className="absolute left-4 top-2.5 text-gray-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base"
//             >
//               Password
//             </label>
//           </div>

//           {/* Login Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full py-3 mt-2 text-white bg-teal-400 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
//           >
//             Login
//           </motion.button>
//         </motion.form>

//         {/* Extra Links */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           className="mt-4 text-center text-sm text-gray-500"
//         >
//           <a href="#" className="text-teal-800 hover:underline">
//             Forgot Password?
//           </a>
//           <p className="mt-2">
//             Don't have an account?{" "}
//             <a href="#" className="text-teal-800 hover:underline">
//               Sign Up
//             </a>
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Login;




// import React, { useState } from 'react';
// import { useAuth } from "./context/AuthContext";
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate('/');  // or navigate to some protected page
//     } catch (err) {
//       setError('Login failed: ' + err.message);
//     }
//   };

//   return (
//     <div className="login-form">
//       {error && <div className="text-red-500">{error}</div>}
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           className="border p-2 mb-2"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           className="border p-2 mb-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }




// src/Component/Login.jsx




import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);

      // Optionally check user role if you stored it
      const user = JSON.parse(localStorage.getItem("user")); // This only works if you stored a user object
      if (user?.role !== "admin") {
        setError("Access denied. Admins only.");
        return;
      }

      navigate("/admin-dashboard"); // Make sure route is correct
    } catch (err) {
      setError("Login failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-gradient-to-r from-teal-200 via-blue-300 to-purple-200 rounded-2xl shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold text-center text-cyan-800"
        >
          Admin Login
        </motion.h1>
        <p className="mt-2 text-center text-black">
          Please login with your admin credentials
        </p>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-red-600 font-semibold"
          >
            {error}
          </motion.div>
        )}

        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 space-y-4"
        >
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full px-4 pt-5 pb-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2.5 text-gray-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base"
            >
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full px-4 pt-5 pb-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2.5 text-gray-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base"
            >
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 mt-2 text-white bg-teal-400 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Login
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}  

