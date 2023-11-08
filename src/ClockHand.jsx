/* eslint-disable react/prop-types */
import { useEffect } from "react"
import classes from "./ClockHand.module.css"
import animateToAngle from "./animateToAngle"

const Clockhand = (props) => {
    useEffect(()=> {
        animateToAngle(`.${props.class}`, `${props.value}`)   
    }, [props.value])
    return (
        <div className={`${props.class} ${classes.hand}`}></div>
    )
}

export default Clockhand