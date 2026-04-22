import { useState } from "react"
import { PacmanLoader, RingLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    var handleLogin=(e)=>{
         e.preventDefault()

        if(email=="Janvee@gmail.com" && password=="1234"){
            toast("LOGIN SUCCESSFULL")
        }
        else{
            toast("INVALID CREDENTIALS")
        }
    }
    return(
        <>
        <PacmanLoader size={100} loading={true} color="blue"/>
        <RingLoader loading={true} color="green"/>
        <div>
            <form onSubmit={handleLogin}>
                <label>Enter Email:</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                
                <label>Enter Password:</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <button>Login</button>
            </form>
        </div>
        </>
    )
}