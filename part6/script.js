let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5, ''];
let arr4 = [1, 2, 3, 4, 5, ''];
let buf3 = [];

arr1.splice(1, 2);
alert(arr1);

buf3 = arr2.splice(1, 3);
alert(buf3);


arr3.toString();
arr4.toString();
arr3.splice(3, 0, 'a', 'b', 'c');
arr3.pop();
alert(arr3);

arr4.splice(1, 0, 'a', 'b');
arr4.splice(5, 0, 'c');
arr4.splice(8);
arr4.push('e');
alert(arr4);
