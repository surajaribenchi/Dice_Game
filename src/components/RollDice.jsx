

const RollDice = ({currentDice,roleDice}) => {
  

  return (
    <div className="flex flex-col items-center my-16">
      <div className="cursor-pointer" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p className="text-base">Click on Dice to Roll</p>
    </div>
  )
}

export default RollDice
