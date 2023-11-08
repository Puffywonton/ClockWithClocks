
import TinyClock from "./TinyClock";
import classes from "./CanvasTest.module.css"
import animate from "./animate";
import digitalNumberGenerator from "./digitalNumberGenerator";
import { useState } from "react";

const CanvasTest = () => {
    const [counter, setCounter] = useState(0)
    const [number, setNumber] = useState(digitalNumberGenerator('3'))

    const clickHandler = () => {

        //this canvas cicles through numbers with anim between (very messy)

        animate('.anime1', '2.5')
        animate('.anime2', '0.5')
        console.log('canvas click')
        setTimeout(() => {
            setNumber(digitalNumberGenerator('t'))
            console.log('phase 1')
            setTimeout(() => {        
                console.log('timeout')
                if(counter == 9){
                    setCounter(0)
                }else{
                    setCounter(prevCounter => prevCounter + 1)
                }
                setNumber(digitalNumberGenerator(counter))
            }, "4000");
        }, "4000");
    }

    const fullDigit = number.map((data, index) => 
        <TinyClock key={index} id={index} hour={data.hour} minute={data.minute} delay='200' onClick={clickHandler} />
    )

    return (
        <div className={classes.mainContainer}>
        <div className={classes.container}>{fullDigit}</div>

        </div>
    )
}

export default CanvasTest