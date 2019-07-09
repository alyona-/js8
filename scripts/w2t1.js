//week 2 task 1

let arr = [1, 2, 2, 4, 10, 8, 6, 8, 9, 8, 6, 6];

let count = Object.create(null);

console.log(typeof count);

for (let q=0; q<arr.length; ++q) {
    if (!count[arr[q]]) {
        count[arr[q]] = {i:q, n:1}
    } else {
        ++count[arr[q]].n
    }
}

let order = Object.keys(count).sort(function (x, y) {
    return count[y].n - count[x].n || count[x].i - count[y].i
});

let res = [];

for (let q=0; q<order.length; ++q) {
    for (let w=0; w<count[order[q]].n; ++w) {
        res.push(+order[q])
    }
}

console.log(res.join(' '));
