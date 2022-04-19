// a decorator is ultimately a function 
// applied to something, eg a class

function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

// @ points at, not excecutes, decorator
// decorators excecute when class is defined NOT instantiated

@Logger
class Person {
    name = 'Stasi';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);