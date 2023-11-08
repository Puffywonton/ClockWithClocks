const clockColonArray = (type) => {
    const middleThingA =
        [
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
        { hour: 2, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 0, minute: 3 },
        { hour: 2, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 1, minute: 0 }, { hour: 3, minute: 0 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },   
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
    ]

    const middleThingB = [
        { hour: 0.5, minute: 0.5 }, { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 }, { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 }, { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 }, { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 }, { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 }, { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 }, { hour: 0.5, minute: 0.5 },  
        { hour: 0.5, minute: 0.5 }, { hour: 0.5, minute: 0.5 },
    ]    

    if (type) {
        return middleThingA
    } else {
        return middleThingB
    }    
}
export default clockColonArray