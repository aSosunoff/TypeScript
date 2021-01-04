const DecoratorBind = <
    T extends object,
    K extends keyof T,
    R extends TypedPropertyDescriptor<() => any>>
    (_: T, __: K, descriptor: R): TypedPropertyDescriptor<() => any> => ({
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        get(): any {
            return descriptor.value?.bind(this)
        }
    });


class ComponentButton {
    constructor(private name: string) {
    }

    @DecoratorBind
    handlerClick(): void {
        console.log(`name component: ${this.name}`);
    }
}

const componentButton = new ComponentButton('QWERTY');
const button_element: Element | null = document.querySelector('#button');
button_element?.addEventListener('click', componentButton.handlerClick)
