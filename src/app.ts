// a decorator is ultimately a function 
// applied to something, eg a class

// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// converted to decorator factory
// can now pass in values to decorator

function Logger(logString: string) {
    return function (constructor: Function)
  {  console.log(logString);
    console.log(constructor);
}
}

// @ points at, not excecutes, decorator
// decorators excecute when class is defined NOT instantiated
// called using factory

// @Logger
@Logger('LOGGING - PERSON')
class Person {
    name = 'Stasi';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);