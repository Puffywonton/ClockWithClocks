/* eslint-disable react/prop-types */
import Clockhand from "./ClockHand"
import classes from "./TinyClock.module.css"


const TinyClock = (props) => {
    return(
        <div className={`anime ${classes.container}`}  onClick={props.onClick}>
            <Clockhand class={`tata`} value={props.hour} delay="0" />
            <Clockhand class={`toto`} value={props.minute} delay="0" />
        </div>                
    )
}

export default TinyClock