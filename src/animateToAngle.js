import anime from "animejs"

const animateToAngle = (target, value) => {
    let angle = (value * 90)-180
    return (
        anime({
            targets: `${target}`,
            rotateZ: [
                {value: `${angle}`, easing: 'easeInOutBounce'	, duration: 600},
            ],
        })
    )
}
export default animateToAngle