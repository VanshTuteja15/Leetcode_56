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

<div className="container">


<h2>
Merge Intervals 🚀
</h2>


<p style={{textAlign:"center"}}>
LeetCode #56 - Calendar Conflict Resolver
</p>



<IntervalInput 
onAddInterval={addInterval}
/>



<h3>
Current Intervals
</h3>


{
intervals.map((interval,index)=>(

<div 
className="interval-card"
key={index}
>

<span>
{interval[0]} - {interval[1]}
</span>


</div>

))
}



<button onClick={handleMerge}>

Merge Intervals

</button>




<h3>
Merged Schedule
</h3>



{
mergedResult.map((interval,index)=>(

<div
className="result"
key={index}
>

{interval[0]} - {interval[1]}


</div>

))
}



</div>

);

}


export default MergeIntervals;