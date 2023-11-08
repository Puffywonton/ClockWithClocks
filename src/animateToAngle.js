import anime from "animejs"

const animateToAngle = (target, value) => {
    let angle = (value * 90)-180
    return (
        anime({
            targets: `${target}`,
            rotateZ: [
                {value: `${angle}`, easing: 'cubicBezier(0.450, 0.020, 0.325, 0.890)', duration: 2000},
            ],
        })
    )
}
export default animateToAngle

