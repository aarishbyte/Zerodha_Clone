
import React, { useState } from "react";


function SignUp(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
            try{
                const response = await fetch("http://localhost:3002/signup",{
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                });

                const data = await response.json();
                console.log(data);

                if(response.ok){
                    window.location.href = "http://localhost:3000/login";
                }
            }catch(err){
                console.log(err);
            }
    };
    return(
        <>
        <div className="container mt-5">
            <h2>Create Your Account</h2>
            <div className="mb-3 mt-4">
                <label>Username</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
        </div>
       
        </>
    );
}

export default SignUp;