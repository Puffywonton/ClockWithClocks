/* eslint-disable react/prop-types */
import Clockhand from "./ClockHand"
import classes from "./TinyClock.module.css"

const TinyClock = (props) => {
    return(
        <div className={classes.container}>
            <Clockhand value={props.hour} delay="0" />
            <Clockhand value={props.minute} delay="0" />
        </div>                
    )
}

export default TinyClock