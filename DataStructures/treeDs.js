// Tree -> Data structure
// Every tree contains nodes
// Link -> https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393
// Link2 -> https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/binary-search-tree-traversal-inorder-preorder-post-order-for-bst/amp/

/** Operations of both Constructors
 * Node :
 * 1. data: Stores a value
 * 2. parent: points to node's parent
 * 3. children: point to the next node in the list
 * 
 * Tree: 
 * 1. _root: points to the root node of a tree
 * 2. find(data): return the node containing the data
 * 3. add(data, parentData): Add a new node to the parent containing the given data
 * 4. remove(data): Remove the node containing the given data
 * 5. forEach(callback): Run a callback on each node of the tree in depth-first order
 * 6. forEachBreadthFirst(callback): Run a callback on each node of the tree in breadth-first order
 */

class Node {
    constructor(data) {
        this.data = data
        this.parent = null;
        this.children = [];
    }
}

class Tree {
    constructor(data) {
        let node = new Node(data);
        this._root = node;
    }

    //use a depth-first search
    find(data, node = this._root) {
        if (node.data == data) {
            return node;
        }
        //recurse on each child node
        for (let child of node.children) {
            //if the data is found in any child node it will be returned here
            if (this.find(data, child)) {
                return child;
            }
        }
        return null;
    }

    add(data, parentData) {
        let node = new Node(data);
        let parent = this.find(parentData)

        //If the parent exists, add this node
        if (parent) {
            parent.children.push(node);
            node.parent = parent;

            return node;
        } else {
            throw new Error(`Cannot add node: parent with data ${parentData} not found.`);
        }
    }

    remove(data) {
        let node = this.find(data);
        if (node) {
            let parent = node.parent,
                indexOfNode = parent.children.indexOf(node);
            //Remove node from parent's children
            parent.children.splice(indexOfNode, 1);
        } else {
            throw new Error(`Cannot remove node: node with data ${parentData} not found.`);
        }
    }

    //depth-first tree traversal
    forEach(callback, node = this._root) {
        for (let child of node.children) {
            //if the data is found in any child node it will be returned here
            this.forEach(callback, child);
        }
        callback(node);
    }

    //breath-first tree traversal
    forEachBreathFirst(callback) {
        let queue = [];

        while (queue.length > 0) {
            //delete the first item and return it
            let node = queue.shift();

            //Visit it
            callback(node);

            for (let child of node.children) {
                queue.push(child);
            }
        }
    }
}

let tree = new Tree('CEO');
tree.add("VP Finance", "CEO");
tree.add("VP Sales", "CEO");
tree.add("Salesperson", "VP Sales");
tree.add("Accountant", "VP Finance");
tree.add("Bookkeeper", "VP Finance");

console.log('--------depth-first tree traversal----------');
tree.forEach(node => console.log(node.data));
console.log('--------breath-first tree traversal---------');
tree.forEachBreathFirst(node => console.log(node.data));