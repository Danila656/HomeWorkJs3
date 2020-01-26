function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let massive = [3, 4, 1, 2, 7];

massive.sort(compareNumeric);

alert(massive);
