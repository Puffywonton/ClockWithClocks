/* eslint-disable react/prop-types */
import { useEffect } from "react"
import classes from "./ClockHand.module.css"
import animateToAngle from "./animateToAngle"

const Clockhand = (props) => {
    useEffect(()=> {
        animateToAngle(`.${props.class}`, `${props.value}`)   
    }, [props.value, props.class])
    return (
        <div className={`${props.class} ${props.anime} ${classes.hand}`}></div>
    )
}

export default Clockhand