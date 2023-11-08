import anime from "animejs"

const animate = (target, value) => {
    return (
        anime({
            targets: `${target}`,
            rotateZ: [
                {value: `${value}`, easing: 'linear', duration: 300},
                {value: `0`, easing: 'linear', duration: 300}
            ],
            delay: anime.stagger(300, {
                grid: [4, 6], from: 'center'
            })
        })
)
    
}

export default animate