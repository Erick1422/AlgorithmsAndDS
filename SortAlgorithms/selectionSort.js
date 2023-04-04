
function selectionSort(numsArray = []) {
    console.log(numsArray)
    for (let i = 0; i < numsArray.length; i++) {
        let indexMinNum = i;

        for (let j = i + 1; j < numsArray.length; j++) {
            if (numsArray[j] < numsArray[indexMinNum]) {
                indexMinNum = j;
            }
        }
        if (indexMinNum !== i) {
            [numsArray[indexMinNum], numsArray[i]] = [numsArray[i], numsArray[indexMinNum]]
        }
        console.log(numsArray);
    }
    return numsArray;
}

console.log(selectionSort([11, 7, 1, 3, 5, 9]));