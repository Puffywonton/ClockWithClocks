const clockLeftRightMargin = (type) => {
    const typeA = [
        { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 },        
        { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 },     
    ]

    const typeB = [
        { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 },        
        { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 },
        { hour: 0.5, minute: 0.5 },       
    ]
    if (type) {
        return typeA
    } else {
        return typeB
    }
}

export default clockLeftRightMargin