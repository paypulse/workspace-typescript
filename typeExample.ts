let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

let fullName: string = 'Yunseok Han';
let age: number =27;
let sentence: string = `
    Hello, my name is ${fullName}.
    I'll be ${age + 1} years old next month.
`;

let sentence1: string = "Hello test" + this.fullname;
//console.log(sentence);

let list: number[] = [1,2,3];
let listArray: Array<number> = [1,2,3];

let x: [string, number];
x = ["hello", 10]; //이런식 으로 초기화 

//console.log(x[0].substr(1));

enum Color {Red, Green, Blue};
let c: Color = Color.Red;
//console.log(c);

enum Color1 {Red=1, Grenn, Blue};
let colorName: string = Color1[2];
//console.log('colorName : ', colorName);


let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let notSure1: any = true;

let listTest: any[] = [1, true, "free"];
listTest[1] = 100;
console.log(notSure);
console.log(listTest);




