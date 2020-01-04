interface FullNameBuilder {
    (name: string, surname: string): string;
}
 
let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
        return "Mr. " + name + " " + surname;
}
//---
interface StringArray {
    [index: number]: string;
}
 
let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
//---
interface Dictionary {
    [index: string]: string;
}
 
var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
var tt: string = colors.red;