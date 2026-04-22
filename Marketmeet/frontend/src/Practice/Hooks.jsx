import { useState } from "react"

export default function Hooks(){
    const[color,setColor]=useState("red")
    const[textColor,setTextColor]=useState("green")

    var changeColor = ()=>{
        setColor("blue")
    }

    var changeTextColor=()=>{
        setTextColor("red")
    }
    return(
        <>
        <div style={{height:"300px",width:"300px",backgroundColor:color}}></div>

        <button onClick={changeColor}>CHANGE COLOR</button>

        <h1 style={{color:textColor}}>HELLO EVERYONE</h1>
        <button onClick={changeTextColor}>CHANGE TEXT COLOR</button>
        </>
    )
}