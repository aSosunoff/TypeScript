function LogClass(constructor: Function) {
    console.log(constructor);
}

function LogField<
    T extends object,
    K extends keyof T>(target: T, propName: K) {
    console.log(target, propName, target[propName]);
}

@LogClass
class ComponentTest {
    @LogField
    name: string

    constructor(name: string) {
        this.name = name;
    }
}