
import TinyClock from "./TinyClock";
import classes from "./CanvasTest.module.css"
import animate from "./animate";



const CanvasTest = () => {

    
    const randomInteger = () => {
        const min = 0;  // Minimum value
        const max = 180;  // Maximum value     
        let x = Math.floor(Math.random() * (max - min + 1)) + min
        console.log('x', x)
        return x
    } 

    const clickHandler = () => {
        animate('.tata', randomInteger())
        animate('.toto', randomInteger())
    }

    const size = 81;
    const clocks = [];
    for (let i = 0; i < size; i++) {
        // let delay = ((i-(size/2)) ** 2)/2
        clocks.push(
            <TinyClock hour='2' minute='1.5' key={i} onClick={clickHandler} />
            // <div className="tata" onClick={clickHandler} key={i}>=)</div>
        );
    }    
    return (
        <div className={classes.container}>{clocks}</div>
    )
}

export default CanvasTest