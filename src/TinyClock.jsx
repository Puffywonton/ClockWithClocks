/* eslint-disable react/prop-types */
import Clockhand from "./ClockHand"
import classes from "./TinyClock.module.css"


const TinyClock = (props) => {
    return(
        <div className={`anime ${classes.container}`}  onClick={props.onClick}>
            <Clockhand class={`hour${props.id}`} value={props.hour} delay="0" />
            <Clockhand class={`minute${props.id}`} value={props.minute} delay="0" />
        </div>                
    )
}

export default TinyClock