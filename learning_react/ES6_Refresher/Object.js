const person = {
    name: 'Laxman',
    walk: function() {
        console.log('walk');
    },
    talk() {
        console.log('talk');
    } // another way to define method in es6.
}

person.talk()
person.name = 'Laxman B';
person['name'] = '';
