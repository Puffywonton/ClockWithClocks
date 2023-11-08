import anime from "animejs"

const animate = (target, value) => {
    let angle1 = (value * 90)-180
    let angle2 = (value * 90)+180
    return (
        anime({
            targets: `${target}`,
            rotateZ: [
                {value: `${angle1}`, easing: 'linear', duration: 50},
                {value: `${angle2}`, easing: 'linear', duration: 50}
            ],
            delay: anime.stagger(300, {
                grid: [4, 6], from: 'center'
            })
        })
)
    
}

export default animate