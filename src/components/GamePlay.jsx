import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react";


function GamePlay() {
  const [Score,setScore]=useState(0);
  const [selectedNumber,setselectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
 
  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  }; 
  const roleDice=()=>{
    if(!selectedNumber){ 
      setError("You have not selected any number");
      return;}
      setError("");
    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);
    
    if(selectedNumber==randomNumber){
      setScore((prev)=>perv+randomNumber);
    }
    else{
      setScore((prev)=>prev-2);
    }
    setselectedNumber(undefined);

  };
  const resetScore=()=>{
    setScore(0);
  }

  return (
    <div className="">
    <div className="flex justify-between items-end">
      <TotalScore Score={Score}/>
      <NumberSelector error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
    </div>
    <RollDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="btn flex items-center justify-center">
      <button className="bg-black text-white w-20 rounded-sm" onClick={resetScore} >Reset</button>
    </div>
    </div>
  )
}

export default GamePlay
