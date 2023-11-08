const digitalNumberGenerator = (string) => {
    const digitZero = [
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 2 }, { hour: 2, minute: 1 }, { hour: 2, minute: 3 }, { hour: 0, minute: 2 },
        { hour: 2, minute: 0 }, { hour: 2, minute: 0 }, { hour: 2, minute: 0 }, { hour: 2, minute: 0 },
        { hour: 2, minute: 0 }, { hour: 2, minute: 0 }, { hour: 2, minute: 0 }, { hour: 2, minute: 0 },
        { hour: 2, minute: 0 }, { hour: 0, minute: 1 }, { hour: 0, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }
      ]
    
      const digitOne = [
        { hour: 1, minute: 2 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 }, { hour: 2.5, minute: 2.5 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 2 }, { hour: 0, minute: 2 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 0, minute: 2 }, { hour: 0, minute: 2 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 0, minute: 2 }, { hour: 0, minute: 2 }, { hour: 2.5, minute: 2.5 },
        { hour: 2, minute: 1 }, { hour: 0, minute: 3 }, { hour: 0, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }  
      ]
    
      const digitTwo = [
        { hour: 1, minute: 2 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 }, { hour: 0, minute: 2 },
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }, { hour: 0, minute: 2 },
        { hour: 0, minute: 2 }, { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 },
        { hour: 0, minute: 2 }, { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }  
      ]  
    
      const digitThree = [
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 }, { hour: 0, minute: 2 },
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }, { hour: 0, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 }, { hour: 0, minute: 2 },
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }, { hour: 0, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }  
      ]  
    
      const digitFour = [
        { hour: 2, minute: 1 }, { hour: 3, minute: 2 }, { hour: 2, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 2 }, { hour: 0, minute: 2 }, { hour: 0, minute: 2 }, { hour: 0, minute: 2 },
        { hour: 0, minute: 2 }, { hour: 0, minute: 1 }, { hour: 3, minute: 0 }, { hour: 2, minute: 0 },
        { hour: 1, minute: 0 }, { hour: 3, minute: 1 }, { hour: 2, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 0, minute: 2 }, { hour: 2, minute: 0 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 0, minute: 1 }, { hour: 3, minute: 0 },
      ]  
    
      const digitFive = [
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 2 }, { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 0, minute: 3 },
        { hour: 0, minute: 2 }, { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 2, minute: 3 },
        { hour: 1, minute: 0 }, { hour: 3, minute: 1 }, { hour: 2, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 0, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 },
      ]  
    
      const digitSix = [
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 2 }, { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 0, minute: 3 },
        { hour: 0, minute: 2 }, { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 2, minute: 3 },
        { hour: 2, minute: 0 }, { hour: 2, minute: 1 }, { hour: 2, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 2, minute: 0 }, { hour: 0, minute: 1 }, { hour: 0, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 },
      ]  
    
      const digitSeven = [
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 }, { hour: 0, minute: 2 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 0, minute: 2.5 }, { hour: 0, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 2, minute: 0.5 }, { hour: 2, minute: 0.5 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 2, minute: 0 }, { hour: 2, minute: 0 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 1, minute: 0 }, { hour: 3, minute: 0 }, { hour: 2.5, minute: 2.5 },
      ]  
    
      const digitEight = [
        { hour: 2, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 2 }, { hour: 2, minute: 1 }, { hour: 2, minute: 3 }, { hour: 0, minute: 2 },
        { hour: 2, minute: 0 }, { hour: 1, minute: 0 }, { hour: 3, minute: 0 }, { hour: 2, minute: 0 },
        { hour: 2, minute: 0 }, { hour: 2, minute: 1 }, { hour: 2, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 2, minute: 0 }, { hour: 0, minute: 1 }, { hour: 0, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }
      ]  
    
      const digitNine = [
        { hour: 1, minute: 2 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 },
        { hour: 0, minute: 2 }, { hour: 2, minute: 1 }, { hour: 3, minute: 2 }, { hour: 0, minute: 2 },
        { hour: 2, minute: 0 }, { hour: 0, minute: 1 }, { hour: 3, minute: 0 }, { hour: 0, minute: 2 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 2 }, { hour: 2, minute: 0 },
        { hour: 1, minute: 2 }, { hour: 3, minute: 1 }, { hour: 0, minute: 3 }, { hour: 2, minute: 0 },
        { hour: 0, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 1 }, { hour: 3, minute: 0 }  
      ]   
    
      const digitDefault = [
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
        { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 }, { hour: 2.5, minute: 2.5 },
    ]     
    if (string == 0) {
        return digitZero
    }
    if (string == 1) {
        return digitOne
    }
    if (string == 2) {
        return digitTwo
    }
    if (string == 3) {
        return digitThree
    }
    if (string == 4) {
        return digitFour
    }
    if (string == 5) {
        return digitFive
    }    
    if (string == 6) {
        return digitSix
    } 
    if (string == 7) {
        return digitSeven
    } 
    if (string == 8) {
        return digitEight
    } 
    if (string == 9) {
        return digitNine
    } 
    return digitDefault
}

export default digitalNumberGenerator