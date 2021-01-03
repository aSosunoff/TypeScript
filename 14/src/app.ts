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

