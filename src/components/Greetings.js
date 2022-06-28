import { useState } from "react";
const Greetings =()=>{

    const [state,setState]=useState(false);
    const hiddenHandler =()=>{
        setState(true);
    }

    return(
        <>
        <h1>Hello world</h1>
        {!state && <p>Greetings from vinod</p>}
        {state && <p>changs when button clicks</p>}
        <button onClick={hiddenHandler}>ClickHere</button>
        </>
    )


}
export default Greetings;