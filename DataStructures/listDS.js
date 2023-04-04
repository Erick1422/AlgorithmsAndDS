const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// A list is an ordered sequence of data. Each data item stored in a list is called an element.
class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; // initializes an empty array to store list elements
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    insert(element, after) {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }

    find(element) {
        let elementIndex = this.dataStore.findIndex((el) => el === element);
        return elementIndex;
    }

    remove(element) {
        let foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    }

    length() {
        return this.listSize;
    }

    toString() {
        return this.dataStore;
    }

    clear() {
        this.dataStore = [];
        this.listSize = 0;
    }

    contains(element) {
        return this.dataStore.includes(element);
    }

    // functions to traversing the list
    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    prev() {
        if (this.pos > 0) {
            this.pos--;
        }
    }

    next() {
        if (this.pos <= this.listSize - 1) {
            this.pos++;
        }
    }

    currPos() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
        return this.dataStore[this.pos];
    }
}

// EJemplo de una tienda de peliculas
const movies = [
    "The Shawshank Redemption", "The Godfather",
    "The Godfather: Part II", "Pulp Fiction",
    "The Good, the Bad and the Ugly", "12 Angry Men",
    "Schindler's List", "The Dark Knight",
    "The Lord of the Rings: The Return of the King", "Fight Club"
]

class Customer {
    constructor(name, movie) {
        this.name = name;
        this.movie = movie;
    }
}

function checkout(name, movie, filmList, customerList) {
    if (filmList.contains(movie)) {
        let customer = new Customer(name, movie);
        customerList.append(customer);
        filmList.remove(movie);
        return true;
    }
    return false;
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (typeof list.getElement() === "object") {
            const { name, movie } = list.getElement();
            console.log(`${name}, ${movie}`);
        } else {
            console.log(list.getElement());
        }
    }
}

// ----------- EJecución del programa -----------
const moviesList = new List();
const customersList = new List();

for (let i = 0; i < movies.length; i++) {
    moviesList.append(movies[i]);
}

console.log('------ Movies Availables -------');
displayList(moviesList);

console.log('\n');
rl.question("What movie do you want?", (movie) => {
    rl.question("What is your name?", (name) => {

        let isSaved = checkout(name, movie, moviesList, customersList);
        if (!isSaved) {
            console.log(`${movie}`, 'not available');
        } else {
            console.log('\n')
            console.log("------- Customer Rental: -------- ");
            displayList(customersList);

            console.log('\n')
            console.log('------ Movies Now Availables -------');
            displayList(moviesList);
        }
        rl.close();
    });
});