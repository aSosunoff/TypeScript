interface IDB<T>{
    GetItem(id: number): T;
    GetItems(): T[];
}
//---
class People{
    constructor(public Name: string){
        this.Id = People._GetId();
    }

    private static _id: number = 0;
    private static _GetId(): number {
        return ++this._id;
    }

    readonly Id: number;
}

class Man{
    constructor(public Name: string, public Age: number){
        this.Id = Man._GetId();
    }

    private static _id: number = 0;
    private static _GetId(): number {
        return ++this._id;
    }

    readonly Id: number;
}
//---
interface IPeople extends IDB<People>{}
interface IMan extends IDB<Man>{}
//---
class PeopleLogic implements IPeople{
    private _people: People[] = [
        new People('Alex'),
        new People('Kety'),
        new People('Bill')
    ];

    GetItem(id: number): People {
        return this._people.filter(f => {
            return f.Id === id; 
        }).slice(0,1)[0];
    };    
    GetItems(): People[] {
        return this._people;
    };
}

class ManLogic implements IMan{
    private _man: Man[] = [
        new Man('Alex', 16),
        new Man('Kety', 17),
        new Man('Bill', 20)
    ];

    GetItem(id: number): Man {
        return this._man.filter(f => {
            return f.Id === id; 
        }).slice(0,1)[0];
    };    
    GetItems(): Man[] {
        return this._man;
    };
}
//---
function ServiceFactory<T extends PeopleLogic | ManLogic>(type: { new (): T }): T{
    return new type();
}

class ServiceLayer{
    private static _selviceLayer: ServiceLayer | undefined;
    private constructor(){}

    static get GetService(): ServiceLayer{
        if(!this._selviceLayer){
            this._selviceLayer = new ServiceLayer();
        }
        return this._selviceLayer;
    }

    people: IPeople = ServiceFactory(PeopleLogic);
    man: IMan = ServiceFactory(ManLogic);
}

let p: any = ServiceLayer.GetService.people.GetItem(1);
let ь: any = ServiceLayer.GetService.man.GetItem(2);
