import { useState } from "react";


function IntervalInput({ onAddInterval }) {


    const [input, setInput] = useState("");



    function handleAdd() {


        // Example input:
        // 1,3


        const values = input.split(",");


        if(values.length !== 2){
            alert("Enter format like: 1,3");
            return;
        }


        const start = Number(values[0]);
        const end = Number(values[1]);



        if(isNaN(start) || isNaN(end)){
            alert("Enter valid numbers");
            return;
        }



        onAddInterval([start,end]);


        setInput("");

    }



    return (

        <div>

            <h3>
                Add Interval
            </h3>


            <input
                type="text"
                placeholder="Example: 1,3"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />


            <button onClick={handleAdd}>
                Add
            </button>


        </div>

    );

}


export default IntervalInput;