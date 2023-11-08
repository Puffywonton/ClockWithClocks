const mergeArrays = (array1, array2, array3, array4, array5, array6, array7) => {
    const mergedArray = [];
    let i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;

    while (i1 < array1.length || i2 < array2.length || i3 < array3.length || i4 < array4.length || i5 < array5.length || i6 < array6.length || i7 < array7.length) {
        if (i1 < array1.length) {
            mergedArray.push(array1[i1]);
            i1++;
        }
        for (let j = 0; j < 4; j++) {
            if (i2 < array2.length) {
                mergedArray.push(array2[i2]);
                i2++;
            }
        }
        for (let j = 0; j < 4; j++) {
            if (i3 < array3.length) {
                mergedArray.push(array3[i3]);
                i3++;
            }
        }
        for (let j = 0; j < 2; j++) {
            if (i4 < array4.length) {
                mergedArray.push(array4[i4]);
                i4++;
            }
        }
        for (let j = 0; j < 4; j++) {
            if (i5 < array5.length) {
                mergedArray.push(array5[i5]);
                i5++;
            }
        }
        for (let j = 0; j < 4; j++) {
            if (i6 < array6.length) {
                mergedArray.push(array6[i6]);
                i6++;
            }
        }
        if (i7 < array7.length) {
            mergedArray.push(array7[i7]);
            i7++;
        }
    }
    return(mergedArray)
}

export default mergeArrays