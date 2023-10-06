import StartGame from "./components/StartGame"
import "./assets/main.css"
import GamePlay from "./components/GamePlay";
import { useState } from "react";

export default function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
    {isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
  
    </>
  )
}