var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = "red";
var fullName = 'Yunseok Han';
var age = 27;
var sentence = "\n    Hello, my name is " + fullName + ".\n    I'll be " + (age + 1) + " years old next month.\n";
var sentence1 = "Hello test" + this.fullname;
//console.log(sentence);
var list = [1, 2, 3];
var listArray = [1, 2, 3];
var x;
x = ["hello", 10]; //이런식 으로 초기화 
//console.log(x[0].substr(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
//console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Grenn"] = 2] = "Grenn";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2];
//console.log('colorName : ', colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var notSure1 = true;
var listTest = [1, true, "free"];
listTest[1] = 100;
console.log(listTest);