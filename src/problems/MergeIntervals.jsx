import { useState } from "react";
import mergeIntervals from "../utils/mergeIntervals";
import IntervalInput from "../components/IntervalInput";


function MergeIntervals() {


    const [intervals,setIntervals] = useState([
        [1,3],
        [2,6],
        [8,10],
        [15,18]
    ]);


    const [mergedResult,setMergedResult] = useState([]);



    function handleMerge(){

        const result = mergeIntervals(intervals);

        setMergedResult(result);

    }



    function addInterval(newInterval){

        setIntervals([
            ...intervals,
            newInterval
        ]);

    }



    return (

        <div>


            <h2>
                LeetCode 56 - Merge Intervals
            </h2>



            <IntervalInput 
                onAddInterval={addInterval}
            />



            <h3>
                Current Intervals:
            </h3>



            {
                intervals.map((interval,index)=>(

                    <p key={index}>
                        [{interval[0]}, {interval[1]}]
                    </p>

                ))
            }



            <button onClick={handleMerge}>
                Merge Intervals
            </button>



            <h3>
                Merged Result:
            </h3>



            {
                mergedResult.map((interval,index)=>(

                    <p key={index}>
                        [{interval[0]}, {interval[1]}]
                    </p>

                ))
            }



        </div>

    );

}


export default MergeIntervals;