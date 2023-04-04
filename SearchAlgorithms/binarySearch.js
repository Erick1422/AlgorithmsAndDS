
//Búsqueda binaria, a difrencia de la búsqueda lineal, esta recorta la lista a la mitad 
//en vez de iterar sobre cada elemento
function binarySearch(array = [], target = 0) {
    let min = 0,
        max = array.length - 1,
        intentos = 0;

    while (max >= min) {

        intentos++;
        let guess = Math.floor((min + max) / 2);

        if (array[guess] === target) {
            console.log(intentos);
            return guess;
        }
        else if (array[guess] < target) {
            min = guess + 1;
        }
        else {
            max = guess - 1
        }
    }
    return -1;
}

let intentos = 0;
const binarySearchRecursively = (arr, key, start = 0, end = arr.length - 1) => {

    if (start <= end) {
        
        intentos++
        let mid = Math.ceil((start + end) / 2);

        //IF element found, return its index
        if (arr[mid] === key) {
            console.log(intentos)
            return mid
        }

        //If value is less 
        //Then search in the lower range
        if (key < arr[mid]) {
            return binarySearchRecursively(arr, key, start, mid - 1)
        } else {
            //Else search in greater range
            return binarySearchRecursively(arr, key, mid + 1, end)
        }
    }
    return -1;
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(binarySearch(primes, 59))
console.log(binarySearchRecursively(primes, 7))
