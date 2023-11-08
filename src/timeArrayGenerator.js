import clockColonArray from "./clockColonArray"
import clockLeftRightMargin from "./clockLeftRightMargin"
import digitalNumberGenerator from "./digitalNumberGenerator"
import timeArray from "./timeArray"


const timeArrayGenerator = (type) => {

    const internetTime = new Date

    const type1 = {
        leftmargin: clockLeftRightMargin(true),
        firstDigit: digitalNumberGenerator(timeArray(internetTime.getHours())[0]),
        secondDigit: digitalNumberGenerator(timeArray(internetTime.getHours())[1]),
        colon: clockColonArray(true),
        thirdDigit: digitalNumberGenerator(timeArray(internetTime.getMinutes())[0]),
        fourthDigit: digitalNumberGenerator(timeArray(internetTime.getMinutes())[1]),
        rightmargin: clockLeftRightMargin(true),            
    }

    const type2 = {
        leftmargin: clockLeftRightMargin(false),
        firstDigit: digitalNumberGenerator('d'),
        secondDigit: digitalNumberGenerator('d'),
        colon: clockColonArray(false),
        thirdDigit: digitalNumberGenerator('d'),
        fourthDigit: digitalNumberGenerator('d'),
        rightmargin: clockLeftRightMargin(false),            
    }
    if (type) {
        return type1
    } else {
        return type2
    }
}

export default timeArrayGenerator