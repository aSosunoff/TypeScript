class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car_1 {
    readonly model: string;
    readonly numberOfWeels: number = 4;

    constructor(theModel: string) {
        this.model = theModel;
    }
}

class Car_2 {
    readonly numberOfWeels: number = 4;

    constructor(readonly model: string) {
    }
}

// ====

class Animal {
    protected voice: string = '';
    public color: string = 'black';

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {

}

// ====

abstract class Component {
    render(): void {
        console.log('Component on render');
    };
    abstract info(): string;
}

class AppComponent extends Component {
    info(): string {
        return 'This is info';
    }
}