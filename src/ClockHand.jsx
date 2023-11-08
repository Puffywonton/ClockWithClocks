/* eslint-disable react/prop-types */
import classes from "./ClockHand.module.css"
import animate from "./animate"

const Clockhand = (props) => {
    // animate(`${props.class}`, '45')
    return (
        <div className={`${props.class} ${classes.hand}`}           
            style={{
                // transform: `rotateZ(${(props.value * 90) - 180}deg)`,
                // transitionDelay: `${props.delay}ms`,
            }}>
        </div>
    )
}

export default Clockhand