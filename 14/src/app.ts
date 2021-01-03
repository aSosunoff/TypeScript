const mergeObject = <T extends object, TT extends object>(a: T, b: TT) => {
    return Object.assign({}, a, b);
};

const o = mergeObject({ name: 'Alex' }, { age: 29 });

/* console.log(o); */


