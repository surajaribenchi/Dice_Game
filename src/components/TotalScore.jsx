
const TotalScore = ({Score}) => {
  return (
    <main>
        <div className="flex items-center justify-center w-52 flex-col">
            <h1 style={{fontSize:"100px",lineHeight:"100px"}}>{Score}</h1>
            <p style={{fontSize:"24px",fontWeight:"500px"}}>Total Score</p>
        </div>
    </main>
  )
}

export default TotalScore
