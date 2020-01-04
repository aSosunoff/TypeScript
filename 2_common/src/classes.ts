class User{
    constructor(){
        this.Id = User._GetId();
    }

    private static _id: number = 0;
    private static _GetId(): number {
        return ++this._id;
    }
    
    readonly Id: number = 0;

    private _name?: string;
    get Name(): string | undefined {
        return this._name;
    };
    set Name(v: string | undefined){
        this._name = v;
    }

    GetInfo(): string{
        return `${this.Id}: ${this._name}`;
    };

    static GetNewUser(): User {
        return new User();
    }
}

let user_1 = User.GetNewUser();

user_1.Name = 'Alex';
let info: string = user_1.GetInfo();

let user_2 = User.GetNewUser();


let y = 1;

