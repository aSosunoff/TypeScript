let stringOrNumberOrNull: string | number | null;
stringOrNumberOrNull = 1;
//---
type stringOrNumberType = string | number;
let stringOrNumber_2: stringOrNumberType;
stringOrNumber_2 = 'qwerty';
//---
let someType: string | number | Date = "stringValue";//new Date(2019, 0, 1, 0, 0, 0);
let strokeLength: number = (someType as string).length;
let strokeLength_: number = (<string>someType).length;
