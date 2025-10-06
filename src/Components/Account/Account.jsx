import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";  // ✅ use this
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const { loginUser } = useUser();  // ✅ correct usage

  const [isSignup, setIsSignup] = useState(true);
  const [userType, setUserType] = useState("");
  const [showUserTypePopup, setShowUserTypePopup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccessMessage("");
  };

  const validate = () => {
    let newErrors = {};
    if (!userType) newErrors.userType = "Please select your account type.";
    if (isSignup && !formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim())
      newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.password.trim())
      newErrors.password = "Password is required.";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long.";
    if (
      (userType === "agency" || userType === "business") &&
      isSignup &&
      !formData.companyName.trim()
    )
      newErrors.companyName = "Company name is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const username = isSignup ? formData.name : formData.email.split("@")[0];
    loginUser({ name: username }); // ✅ store name object
    setSuccessMessage(
      isSignup
        ? "✅ Signup successful! Redirecting..."
        : "✅ Login successful! Redirecting..."
    );
    setTimeout(() => navigate("/"), 1500);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const userInfo = jwtDecode(credentialResponse.credential);
    loginUser({ name: userInfo.name }); // ✅
    setSuccessMessage(`✅ Welcome ${userInfo.name}! Redirecting...`);
    setTimeout(() => navigate("/"), 1500);
  };

  const handleGoogleError = () => {
    setErrors({ google: "Google Sign-In failed. Please try again." });
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setShowUserTypePopup(false);
  };

  return (
    <div className="account-page account">
      {showUserTypePopup ? (
        <div className="user-type-popup">
          <h3>Choose Your Account Type</h3>
          <p className="popup-subtext">Select the type of user that best describes you.</p>
          <div className="popup-options">
            {["customer", "agency", "business"].map((type) => (
              <div key={type} className="user-card" onClick={() => handleUserTypeSelect(type)}>
                <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                <p>
                  {type === "customer"
                    ? "Access personalized services."
                    : type === "agency"
                    ? "Manage projects for your clients."
                    : "Oversee your business dashboard."}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="account-container">
          <div className="brand-header">
            <img src="industwin-logo.png" alt="App Logo" className="brand-logo" />
            <h3 className="brand-name">IndusTwin</h3>
          </div>

          <h2>{isSignup ? "Create your account" : "Login to your account"}</h2>
          <h5 className="user-type-label">({userType.toUpperCase()} Account)</h5>

          <form onSubmit={handleSubmit} className="account-form">
            {isSignup && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            {(userType === "agency" || userType === "business") && isSignup && (
              <>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && <p className="error">{errors.companyName}</p>}
              </>
            )}

            <button type="submit" className="btn-primary">
              {isSignup ? "Sign Up" : "Login"}
            </button>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>

          <div className="divider">or</div>

          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} useOneTap />
          {errors.google && <p className="error">{errors.google}</p>}

          <p className="toggle-link">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <span onClick={() => setIsSignup(false)}>Login here</span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span onClick={() => setIsSignup(true)}>Sign up here</span>
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Account;
