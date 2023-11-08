/* eslint-disable react/prop-types */
import classes from "./ClockHand.module.css"

const Clockhand = (props) => {
    return (
        <div 
            className={`${props.class} ${classes.hand}`}           
            style={{
                // transform: `rotateZ(${(props.value * 90) - 180}deg)`,
                // transitionDelay: `${props.delay}ms`,
            }}>
        </div>
    )
}

export default Clockhand