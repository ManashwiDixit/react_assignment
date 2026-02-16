import { useState } from "react";
import useAuth from "../hooks/useAuth";


function Login() {

  const { login } = useAuth();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, email);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button type="submit">Login</button>

    </form>
  );
}

export default Login;
