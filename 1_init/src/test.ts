class TestClass {
    private _el: HTMLElement | null = null;
    constructor(el: HTMLElement | null){
        this._el = el;
    }
    public SetTest(text: string){
        if(this._el != null)
            this._el.innerText = text;
    }
}

let test = new TestClass(document.getElementById('test'));
test.SetTest('Вставили текст');