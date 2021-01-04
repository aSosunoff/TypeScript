interface IComponentDecorator {
    containerMain: string,
    containerTemplate: string,
}

interface IComponentButton {
    title: string,
    handlerClick: EventListenerOrEventListenerObject
}

const DecoratorComponent = (config: IComponentDecorator) => {
    return <T extends { new(...args: any[]): IComponentButton }>(Constructor: T) => {
        return class extends Constructor {
            el: Element | null;
            get template() { return `<button class="btn">${this.title}</button>` };

            constructor(...args: any[]) {
                super(...args);

                this.el = document.querySelector(config.containerMain);
                const container = this.createElementFromHTML(config.containerTemplate);
                const btn = this.createElementFromHTML(this.template);
                btn.addEventListener('click', this.handlerClick);
                container.append(btn);
                this.el?.appendChild(container);
            }

            private createElementFromHTML(htmlString: string): Element {
                var div = document.createElement('div');
                div.innerHTML = htmlString.trim();
                // Change this to div.childNodes to support multiple top-level nodes
                return div.firstChild as Element;
            }
        }
    };
};


@DecoratorComponent({
    containerMain: '.container',
    containerTemplate: '<div></div>',
})
class SomeComponent implements IComponentButton {
    constructor(public title: string) {
    }

    handlerClick(e: Event): void {
        console.log(1);
    }

    /* logName(): void {
        console.log(`Component Name: ${this.name}`);
    } */
}

const button = new SomeComponent('QWERTY');
console.log(button);
