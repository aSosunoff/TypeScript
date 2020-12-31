interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number,
    }
}

const rect1: Rect = {
    id: '1',
    color: '123',
    size: {
        height: 1,
        width: 1
    }
}

const rect2: Rect = {
    id: '1',
    size: {
        height: 1,
        width: 1
    }
}

const rect3 = {} as Rect; // new way
const rect4 = <Rect>{}; // old way


// =========================

interface RectWithArea extends Rect {
    getArea(): number
}

const rect5: RectWithArea = {
    id: '1',
    size: {
        height: 1,
        width: 1,
    },
    getArea() {
        return this.size.height * this.size.width;
    }
}

// =========================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '1px',
    borderRadius: '5px',
};