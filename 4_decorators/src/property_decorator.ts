function format(target: any, propertyKey: string){
     
    let _val = target[propertyKey];   // получаем значение свойства
 
    // геттер
    var getter = function () {
        return "Mr./Ms." + _val;
    };
  
    // сеттер
    var setter = function (newVal: any) {
        _val = newVal;
    };
  
    // удаляем свойство
    if (delete target[propertyKey]) {
  
        // И создаем новое свойство с геттером и сеттером
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
 
class User_5 {
    @format
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}
let tom_2 = new User_5("Tom");
tom_2.print();
tom_2.name = "Tommy";
tom_2.print();