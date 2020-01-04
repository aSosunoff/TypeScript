abstract class Figure{
    constructor(public Name: string){}
    abstract GetInfo(): string;
    GetInfoDafault(): string{
        return `${this.Name}`;
    }
}

class Triangle extends Figure{
    constructor(){
        super('Треугольник');
    }
    GetInfo(): string{
        return `${super.GetInfoDafault()}: ${1}`;
    }
}

class Square extends Figure{
    constructor(){
        super('Квадрат');
    }
    GetInfo(): string{
        return `${this.Name}`;
    }
}

let t = new Triangle();
let s = new Square();


let rr = 1;