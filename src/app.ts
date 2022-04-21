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


// _ tells TS 'I'm aware it's there but i don't want to use it'

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// @ points at, not excecutes, decorator
// decorators excecute when class is defined NOT instantiated
// called using factory

// @Logger
// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Stasi';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);