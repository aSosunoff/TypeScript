function logParam (target: any, propertyKey: string, propertyIndex: number): void {
    var metadataKey = `__log_${propertyKey}_parameters`;
     
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(propertyIndex);
      }
      else {
        target[metadataKey] = [propertyIndex];
    }
};

function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    var originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        var metadataKey = `__log_${key}_parameters`;
        var indices = target[metadataKey];
 
        if (Array.isArray(indices)) { 
            for (var i = 0; i < args.length; i++) { 
         
                if (indices.indexOf(i) !== -1) { 
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(`${key} arg[${i}]: ${argStr}`);
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    }

    //return descriptor;
}

class User_4 {
    private _name: string;
    constructor(name: string){
        this._name = name;
    }
    
    @logMethod
    setName(@logParam names: string): void {
        this._name = names;
    }

    print(): void{
        console.log(this._name);
    }
}

let user = new User_4("Red");
user.setName('Bob');
user.setName('Bill');