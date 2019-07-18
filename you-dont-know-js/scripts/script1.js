let books = document.querySelectorAll('.books');

let book =document.querySelectorAll('.book');


//console.log(books);

let bookTitle = document.querySelectorAll('h2');

//console.log(bookTitle);


console.log(bookTitle[0]);


/*
* bookTitle[0].firstElementChild.textContent
* */
/*
* bookTitle[0].firstElementChild.textContent.match(/\d/)[0]
* */

employees.sort(function(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //сортируем строки по возрастанию
        return -1
    if (nameA > nameB)
        return 1
    return 0 // Никакой сортировки
});