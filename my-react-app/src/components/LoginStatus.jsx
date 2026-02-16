import { useState } from "react";

function LoginStatus() {

  // state variable
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function to toggle login
  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      {isLoggedIn ? (
        <h2>Welcome back</h2>
      ) : (
        <h2>Please log in</h2>
      )}

      <button onClick={handleToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

    </div>
  );
}

export default LoginStatus;
