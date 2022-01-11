
// inorder to make this class visible to other files we export the class and hence we can import it in other file
export class Person {
    constructor(name){
        this.name = name;
    }

    walk() {
        console.log('walk');
    } // another way to define method in es6.
}