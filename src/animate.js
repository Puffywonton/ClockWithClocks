import anime from "animejs"

const animate = (target, value) => {
    return (
        anime({
            targets: `${target}`,
            rotateZ: [
                {value: `${value}`, easing: 'linear', duration: 500},
                // {value: 0, easing: 'easeOutSine', duration: 500}
            ],
            delay: anime.stagger(200, {
                grid: [9, 9], from: 'center'
            })
        })
)
    
}

export default animate