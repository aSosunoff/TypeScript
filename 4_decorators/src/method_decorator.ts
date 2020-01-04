function readonly (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
};
 
class User_3 {
    name: string;
    constructor(name: string){
        this.name = name;
    }
 
    @readonly
    print():void{
        console.log(this.name);
    }
}

let red = new User_3("Red");
//red.print = function(){console.log("print has been changed");}
red.print();  // Red