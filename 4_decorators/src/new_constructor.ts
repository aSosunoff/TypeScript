function logger<TFunction extends Function>(turget: TFunction): TFunction{
    
    let newConstructor: Function = function(this: any, name: string){
        console.log('Creating new instance');
        this.name = name;
        this.age = 23;
        this.print = function(): void{
            console.log(this.name, this.age);
        }
    }   
    
    return <TFunction>newConstructor;
}

@logger
class User_2{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    print(): void{
        console.log(this.name);
    }
}

let tom = new User_2('Tom');
let bob = new User_2('Bob');
tom.print();
bob.print();