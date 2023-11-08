/* eslint-disable react/prop-types */
import Clockhand from "./ClockHand"
import classes from "./TinyClock.module.css"


const TinyClock = (props) => {
    return(
        <div className={`anime ${classes.container}`}  onClick={props.onClick}>
            <Clockhand class={`hour${props.id}`} anime='anime1' value={props.hour} delay="0" />
            <Clockhand class={`minute${props.id}`} anime='anime2' value={props.minute} delay="0" />
        </div>                
    )
}

export default TinyClock