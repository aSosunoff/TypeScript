const mergeObject = <T extends object, TT extends object>(a: T, b: TT) => {
    return Object.assign({}, a, b);
};

const o = mergeObject({ name: 'Alex' }, { age: 29 });

/* console.log(o); */

// ====

const getTest = <T extends { length: number }>(value: T) => {
    return {
        value,
        length: `length ${value.length}`,
    }
};

/* console.log(getTest('qweqwe')); */

// ====

/* const getObjectValue = <T extends { [key: string]: string }>(obj: T, key: string) => {
    return obj[key];
}; */

const getObjectValue = <T extends object, V extends keyof T>(obj: T, key: V) => {
    return obj[key];
};


/* console.log(getObjectValue({ name: 'Alex' }, 'name')); */

// ====

class Collection<T> {
    constructor(private _items: T[] = []) {

    }

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item);
    }

    get items(): T[] {
        return this._items;
    }
}

const items = new Collection(['1', '2']);
const items_2 = new Collection([1, 3, 4]);

// ====

interface Car {
    model: string,
    year: number,
}

const createAndValidateCar = (model: string, year: number): Car => {
    const car: Partial<Car> = {};

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }

    return car as Car;
};

// ====

const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
cars.shift();
