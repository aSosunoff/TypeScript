function LogClass(constructor: Function) {
    console.log(constructor);
}

function LogField<
    T extends object,
    K extends keyof T>(target: T, propName: K) {
    console.log(target, propName, target[propName]);
}

function LogMethod<
    T extends object,
    K extends keyof T,
    R extends TypedPropertyDescriptor<() => void>>
    (target: T, propertyKey: K, descriptor: R) {
    console.log(target, propertyKey, descriptor);
}

@LogClass
class ComponentTest {
    @LogField
    name: string

    constructor(name: string) {
        this.name = name;
    }

    @LogMethod
    logName(): void {
        console.log(`Component Name: ${this.name}`);

    }
}