
import TinyClock from "./TinyClock";
import classes from "./CanvasTest.module.css"
import animate from "./animate";
import digitalNumberGenerator from "./digitalNumberGenerator";
import { useState } from "react";

const CanvasTest = () => {
    const [counter, setCounter] = useState(0)
    const [number, setNumber] = useState(digitalNumberGenerator(0))

    const clickHandler = () => {
        animate('.tata', '180')
        animate('.toto', '-180')
        // setTimeout(() => {
            // console.log("Delayed for 10 second.");
          
        if(counter == 9){
            setCounter(0)
        }else{
            setCounter(prevCounter => prevCounter + 1)
        }

        setNumber(digitalNumberGenerator(counter))
    // }, "5000");
    }

    const fullDigit = number.map((data, index) => 
        <TinyClock key={index} id={index} hour={data.hour} minute={data.minute} delay='200' onClick={clickHandler} />
    )

    // const size = 24;
    // const clocks = [];
    // for (let i = 0; i < size; i++) {
    //     clocks.push(
    //         <TinyClock hour='2' minute='1.5' key={i} onClick={clickHandler} />
    //         // <div className="tata" onClick={clickHandler} key={i}>=)</div>
    //     );
    // }    
    return (
        <div className={classes.container}>{fullDigit}</div>
    )
}

export default CanvasTest