// O(n^2) time complexity
// menor a mayor
function bubbleSort(numsArray = []) {
    console.log(numsArray);
    for (let i = 0; i < numsArray.length; i++) {
        let flag = false;

        // No hace falta recorrer hasta el último, ya que los números más grandes se envían al final desde las primeras iteraciones
        for (let j = 0; j < numsArray.length - 1 - i; j++) {
            if (numsArray[j] > numsArray[j + 1]) {
                [numsArray[j + 1], numsArray[j]] = [numsArray[j], numsArray[j + 1]];
                flag = true;
            }
        }
         // Al no haber más cambios de posición rompemos el ciclo para evitar iteraciones innecesarias
        if (!flag) {
            break;
        }
    }
    return numsArray;
}

// -> i = 0
// array -> [7, 12, 4, 3, 7, 15]
// -> i = 1
// array -> [7, 4, 3, 7, 12, 15]
// -> i = 2
// array -> [4, 3, 7, 7, 12, 15]
// -> i = 1
// array -> [3, 4, 7, 7, 12, 15]
console.log(bubbleSort([12, 7, 15, 4, 3, 7]));