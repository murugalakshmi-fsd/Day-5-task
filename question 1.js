//for loop
let student=[{"name":"Dhilip","age":"18","address":"kk nagar"},
            {"name":"prabha","age":"19","address":"vs nagar"}]
 for(var i=0;i<student.length;i++)
 {
    console.log("name=",student[i].name);
 }

 //for in loop
 let person=[{"name":"Dhilip","age":"18","address":"kk nagar"},
 {"name":"prabha","age":"19","address":"vs nagar"}]
 for (var key in student) 
 {
    if (person.hasOwnProperty(key))
  {  
      console.log("age=",person[key].age);
  }
}  

//for of loop
let array=[{"name":"Dhilip","age":"18","address":"kk nagar","id":"1234"},
{"name":"prabha","age":"19","address":"vs nagar","id":"1235"}]
for(var a of array)
{
    console.log("adress=",a.address);
}

//for Each loop
let ar1=[{"name":"Dhilip","age":"18","address":"kk nagar","id":"1234"},
{"name":"prabha","age":"19","address":"vs nagar","id":"1235"}]
ar1.forEach(function(item)
{
console.log("id=",item.id);
})