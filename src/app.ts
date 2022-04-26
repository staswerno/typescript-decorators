// a decorator is ultimately a function
// applied to something, eg a class

// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// converted to decorator factory
// can now pass in values to decorator

function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

// _ tells TS 'I'm aware it's there but i don't want to use it'

function WithTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		console.log("Rendering template");
		const hookEl = document.getElementById(hookId);
		const p = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector("h1")!.textContent = p.name;
		}
	};
}

// @ points at, not excecutes, decorator
// decorators excecute when class is defined NOT insdtantiated
// called using factory

// @Logger
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
	name = "Stasi";

	constructor() {
		console.log("Creating person object...");
	}
}

const pers = new Person();
console.log(pers);

// ---

function Log(target: any, propertyName: string | symbol) {
	console.log("Property decorator!");
	console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("Accesor decorator!");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log3(
	target: any,
	name: string | Symbol,
	descriptor: PropertyDescriptor
) {
	console.log("Method decorator!");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
	console.log("Parameter decorator!");
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@Log
	title: string;
	private _price: number;

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error("Invalid price - should be positive!");
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this._price * (1 + tax);
	}
}
