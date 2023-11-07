import TinyClock from "./TinyClock";
import classes from "./ThreeByThree.module.css"

const ThreeByThreeTest = () => {
    const size = 9;
    const clocks = [];
    for (let i = 0; i < size; i++) {
        let delay = ((i-(size/2)) ** 2)/2
        console.log(delay)
        clocks.push(<TinyClock hour='2' minute='1.5' />);
    }    
    return (
        <div className={classes.container}>{clocks}</div>
    )
}

export default ThreeByThreeTest