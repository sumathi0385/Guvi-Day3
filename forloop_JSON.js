
var books = {"Computer_Books": [
    {
        "title": "Introduction of C",
        "year": 1994,
        "pages": 3000
    },
    {
        "title": "JAVA Basics",
        "year": 1984,
        "pages": 2000
    },
    {
        "title": "JavaScript basics",
        "year": 2000,
        "pages": 5000
    }
 ]
}

 // Iterating JSON array of objects using simple For loop  

 let bookType = books.Computer_Books

 for(let i=0; i<bookType.length; i++){

    console.log(`Book title is "${bookType[i].title}"`); 
    console.log(`Year of the book is "${bookType[i].year}"`);
    console.log(`Page of the book is "${bookType[i].pages}"`);     

 }

 

 

 