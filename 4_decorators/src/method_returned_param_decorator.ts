function log(target: any, method: string, descriptor: PropertyDescriptor): void{
    let originalValue: Function = descriptor.value;
    descriptor.value = function(...args: any[]){
        let returnValue = originalValue.apply(this, args);
        console.log(`${JSON.stringify(args)} => ${returnValue}`);
        return returnValue;
    }
}

class Calculator{
    @log
    add(a: number, b: number){
        return a + b;
    }
}

let calc = new Calculator();
let z: number = calc.add(4, 5);
z = calc.add(6, 7);