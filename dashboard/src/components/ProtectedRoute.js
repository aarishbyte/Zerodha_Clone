import React, { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(()=>{
        fetch("https://zerodha-clone-j3m4.onrender.com/verify",{
            method: "GET",
            credentials: "include",
        })
        .then((res) => {
            if(res.ok){
                setAuthenticated(true);
            }else{
                setAuthenticated(false);
            }
        })
        .catch(() => {
            setAuthenticated(false);
        })
        .finally(()=> {
            setLoading(false);
        });
    }, []);

    if(loading){
        return <p>Loading...</p>;
    }

    if(!authenticated){
        window.location.href="http://localhost:3000/login";
        return null;
    }
    return children;
};

export default ProtectedRoute;