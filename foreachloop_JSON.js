// forEach loop for normal array

const arr1 = [1, 2, 3, 4, 5]

arr1.forEach(function(num){

    console.log(num * 10);
});

// forEach loop for JSON object

const user = {
                "fname": "Sumathi",
                "lname": "Edwin",
                "Age": 37
            };


Object.keys(user).forEach((data) => {


console.log(`${data} : ${user[data]}`);


});

// ForEach loop for JSON array of objects

const employee = [{
    "Emp_fname": "Sumathi",
    "Emp_lname": "Edwin",
    "Emp_Age": 37
},
{
    "Emp_fname": "Galwin",
    "Emp_lname": "Edwin",
    "Emp_Age": 27
}];


let objLength = Object.keys(employee).length;

//Iterating outer array using for loop
for(let i=0; i<employee.length; i++){

    //Iterating inner object using forEach loop
    Object.keys(employee[i]).forEach(data => {
        
        console.log(`${data} : ${employee[i][data]}`);
        
    });

}




            