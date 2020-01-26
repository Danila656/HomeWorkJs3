//part1
let mass1 = ['a', 'b', 'c'];
let mass2 = [1, 2, 3, ''];
let mass3 = mass1.concat(mass2);

mass3.pop();
alert(mass3);

//part2
let Array1 = ['a', 'b', 'c', 1];
Array1.splice(3, 1, 1, 2, 3);
alert(Array1);
//part3
const obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
};
const massive = Object.keys(obj);
alert(massive);