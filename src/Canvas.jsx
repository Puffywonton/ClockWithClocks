import TinyClock from "./TinyClock"
import classes from "./Canvas.module.css"
import mergeArrays from "./mergeArrays"
import { useState } from "react"
import animate from "./animate"
import timeArrayGenerator from "./timeArrayGenerator"
const Canvas = () => {
    const [time, setTime] = useState(timeArrayGenerator(true))

    const clickHandler = () => {
        animate('.anime1', '0.5')
        animate('.anime2', '2.5')
        console.log('canvas click')
        setTimeout(() => {
            setTime(timeArrayGenerator(false))
            console.log('phase 1')
            setTimeout(() => {        
                console.log('phase 2')
                setTime(timeArrayGenerator(true))
            }, "1500");
        }, "5000");
    }   

    const fullCanvasArray = mergeArrays(time.leftmargin, time.firstDigit, time.secondDigit, time.colon, time.thirdDigit, time.fourthDigit, time.rightmargin)
    const fullCanvas = fullCanvasArray.map((data, index) => 
        <TinyClock key={index} id={index} hour={data.hour} minute={data.minute} delay='200' />
    )    
    return (
        <div className={classes.container} onClick={clickHandler}>{fullCanvas}</div>
    )
}

export default Canvas