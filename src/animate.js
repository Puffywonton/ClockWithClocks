import anime from "animejs"

const animate = (target, value) => {
    let angle1 = (value * 90)-180
    return (
        anime({
            targets: `${target}`,
            rotateZ: [
                {value: `${angle1}`, easing: 'spring', duration: 2000},
            ],
            delay: anime.stagger(400, {
                grid: [20, 8], from: 'center'
            })
        })
)
    
}

export default animate