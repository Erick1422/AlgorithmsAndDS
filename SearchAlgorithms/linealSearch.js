
const linealSearch = (arr = [], target) => {
    let intentos = 0;
    for (let i = 0; i < arr.length; i++) {
        intentos++;
        if (arr[i] === target) {
            console.log(`Intentos: ${intentos}`);
            return i;
        }
    }
    return -1;
}

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linealSearch(numberArr, 15));