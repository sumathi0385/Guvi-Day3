var books = {"Computer_Books": [
    {
        "title": "Lord of the Rings",
        "year": 1994,
        "pages": 3000
    },
    {
        "title": "JAVA Basics",
        "year": 1984,
        "pages": 2000
    },
    {
        "title": "Art of war",
        "year": 2000,
        "pages": 5000
    }
 ]
}

//Iterating JSON array of objects using For in loop
let bookType = books.Computer_Books

 for(let key in bookType){
    for(let key1 in bookType[key]){
        
        console.log(`${key1} : ${bookType[key][key1]}`);


    } 


 }
