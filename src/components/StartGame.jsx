

function StartGame({toggle}) {
  
  return (
    <div className="max-w-6xl flex items-center" style={{margin:"0 auto",height:"100vh"}}>
       <div><img src="/images/dices.png" alt="" /></div>
       <div className="">
        <h1 className="font-extrabold text-6xl">Dice Game</h1>
        <button onClick={toggle} style={{padding:"10px 18px",maxWidth:"220px"}}className="bg-black text-white rounded flex items-center justify-center flex-col hover:bg-sky-700">Play Now</button>
       </div>
    </div>
  )
}

export default StartGame
