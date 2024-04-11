"use client";

import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage: React.FC = () => {

    const router = useRouter();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");

    const handleLogin = () =>{
        if (username === "admin" && password === "admin"){
            localStorage.setItem("isLoggedIn", "True");
            localStorage.setItem("error", "0");
            router.push("/dashboard");
        }
        else{
            const erro = localStorage.getItem("error")
            if (erro === '1'){
                setError("Usuário ou senha incorretos");
            } else{
                if (erro === '2'){
                    setError("Usuário ou senha incorretos")
                } else{
                    setError("Efetue login!")
                }
            }
            
        }
    }

    return(
        <>
        <h1>Login</h1>
        <form>
            <label> Usuário:
            <input type="text" placeholder="Usuário" value={ username } onChange={ 
                (e) => setUsername(e.target.value)}/>
            </label>
            <br />
            <label> Senha:
            <input type="password" placeholder="Senha" value={ password }  onChange={
                (e) => setPassword(e.target.value) }/>
            </label>
            <br />

            <button onClick={ handleLogin }>Login</button>
        </form>
        </>
    )
}

export default LoginPage;