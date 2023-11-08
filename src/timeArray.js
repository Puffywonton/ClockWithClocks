const timeArray = (time) => {
    let array = []
    if (time.toString().length == 1) {
    array.push('0')
    }
    let toto = time.toString().split('')
    array.push(...toto)
    return (array)
}    

export default timeArray