namespace Person{
    export class Alex{
        constructor(public Name: string){

        }
    }

    export function GetInfo(a: Alex): string{
        return a.Name;
    }
}

let alex = new Person.Alex('Alex_1');