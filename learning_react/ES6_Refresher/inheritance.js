class Person {
    constructor(name){
        this.name = name;
    }

    walk() {
        console.log('walk');
    } // another way to define method in es6.
}
class Teacher extends Person {
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log('teach');
    }

}

const teacher = new Teacher('John Doe', 'Msc');

console.log(teacher)
