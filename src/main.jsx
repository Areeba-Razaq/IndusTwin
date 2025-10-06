import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./Components/Context/UserContext.jsx";

const clientId = "173920626521-slkoqnj1vvmre0kql5rhcc5gk165ef3a.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
      <App />
      </UserProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);


