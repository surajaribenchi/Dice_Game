const NumberSelector = () => {
    const array = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {
                array.map((value, i) => (
                    <div className="h-20 w-20 border-solid border-2 border-black flex items-center justify-center" style={{ fontSize: "24px", fontWeight: "700px" }} key={i}>
                        {value}
                    </div>
                ))
            }

        </div>
    )
}

export default NumberSelector
