

const NumberSelector = ({selectedNumber,setselectedNumber,error,setError}) => {
    const array = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (value) => {
        setselectedNumber(value);
        setError("");
      };
    
    // const handleClick = () => {
    //     setselectedNumber(value);
    //  };
    
    return (
        <div className="flex flex-col items-end mr-8 my-7">
        <p className="text-red-600">{error}</p>  
        <div className="flex gap-6">
            
            {
                array.map((value, i) => (
                    <div className="h-20 w-20 border-solid border-2 border-black flex items-center justify-center"  style={{ fontSize: "24px", fontWeight: "700px"}}  key={i} onClick={() => numberSelectorHandler(value)} >
                        {value}
                    </div>
                ))
            }

        </div>
        <p className="text-2xl font-bold">Select Number
        (selected number {selectedNumber})</p>
       
        </div>
    )
}

export default NumberSelector
