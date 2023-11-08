import TinyClock from "./TinyClock"
import digitalNumberGenerator from "./digitalNumberGenerator"
import classes from "./Canvas.module.css"
import clockLeftRightMargin from "./clockLeftRightMargin"
import clockColonArray from "./clockColonArray"
import mergeArrays from "./mergeArrays"
import { useState } from "react"
import animate from "./animate"
const Canvas = () => {
    const [time, setTime] = useState({
        leftmargin: clockLeftRightMargin(true),
        firstDigit: digitalNumberGenerator(1),
        secondDigit: digitalNumberGenerator(2),
        colon: clockColonArray(true),
        thirdDigit: digitalNumberGenerator(2),
        fourthDigit: digitalNumberGenerator(7),
        rightmargin: clockLeftRightMargin(true),
    })

    const clickHandler = () => {
        //this canvas cicles through numbers with anim between (very messy)
        animate('.anime1', '0.5')
        animate('.anime2', '2.5')
        console.log('canvas click')
        setTimeout(() => {
            setTime({
                leftmargin: clockLeftRightMargin(false),
                firstDigit: digitalNumberGenerator('d'),
                secondDigit: digitalNumberGenerator('d'),
                colon: clockColonArray(false),
                thirdDigit: digitalNumberGenerator('d'),
                fourthDigit: digitalNumberGenerator('d'),
                rightmargin: clockLeftRightMargin(false),
            })
            console.log('phase 1')
            setTimeout(() => {        
                setTime({
                    leftmargin: clockLeftRightMargin(true),
                    firstDigit: digitalNumberGenerator(1),
                    secondDigit: digitalNumberGenerator(2),
                    colon: clockColonArray(true),
                    thirdDigit: digitalNumberGenerator(2),
                    fourthDigit: digitalNumberGenerator(7),
                    rightmargin: clockLeftRightMargin(true),
                })
            }, "1500");
        }, "3500");
    }    

    const fullCanvasArray = mergeArrays(time.leftmargin, time.firstDigit, time.secondDigit, time.colon, time.thirdDigit, time.fourthDigit, time.rightmargin)
    const fullCanvas = fullCanvasArray.map((data, index) => 
        <TinyClock key={index} id={index} hour={data.hour} minute={data.minute} delay='200' onClick={clickHandler}/>
    )    
    return (
        <div className={classes.container}>{fullCanvas}</div>
    )
}

export default Canvas