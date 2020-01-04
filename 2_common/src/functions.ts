function a(){
    return 1;
}

let r = a();
//---
function a_2(name: string, age: number) : string{
    return `${name} ${age}`;
}

let r_2 : string = a_2('Alex', 12);
//---
function getName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

getName('qwerty')
//---
function getName_2(firstName: string, lastName: string = "Иванов") {    
    return firstName + " " + lastName;
}
//---
function addNumbers(firstNumber: number, ...numberArray: number[]): number {
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result+= numberArray[i];
    }
    return result;
}

addNumbers(1, 2, 3, 4, 5, 6);
//---
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
    return x + y;
}
//---
type func = (x: number, y: number) => number;

function op_1(a: number, b: number) : number{
    return a + b;
}

function op_2(a: number, b: number) : number{
    return a - b;
}

function F(x: number, y: number, func_param: func) : number{
    return func_param(x, y);
}

F(1, 2, op_1);
F(1, 2, op_2);
//---
function m(x: number, y: number, callback?: (xx: number) => void) : number{
    let result = x + y;
    if(typeof callback == "function")
        callback(x);
    return result;
}

m(1, 2);
m(1, 2, (x) => {});

function m_2(x: number, y: number, callback: () => void = () => {}) : number{
    let result = x + y;
    callback();
    return result;
}

m_2(1, 2)
//---