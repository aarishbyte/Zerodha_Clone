import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        localStorage.setItem("username", data.username);
        window.location.href = "http://localhost:3001";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Login to Your Account</h2>
        <div className="mb-3 mt-4">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
