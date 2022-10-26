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
let bookType1 = books.Computer_Books

for(let entry in Object.entries(bookType1) ){
    console.log(entry);
    console.log(bookType1[entry]);

    for (let entry1 of Object.entries(bookType1)[entry]){
      console.log(Object.entries(bookType1)[entry][0]);
    
   }
}



 