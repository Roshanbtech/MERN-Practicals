//_______ clone __________

//1. Shallow copy => copy the reference of the object itself without copying the object itself
// consider an object of employee and a new object of employee is created using assignment operator then both the objects are pointing to the same object
// if we change one object then the other object will also be changed 
 
const employee = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",   
  },    
};
console.log(employee,'before');
const newEmployee = employee;
newEmployee.name = "Jane"; // change the name of the employee object
console.log(employee,'after'); // Output: { name: "Jane", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }
console.log(newEmployee); // Output: { name: "Jane", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }


//2. Deep copy => copy the reference of the object itself and also copies the object itself 
// using spread operator or JSON.parse(JSON.stringify(object)) 
// if one object is changed then the other object will not be changed.

const employee1 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",   
  },    
};
console.log(employee1,'before');
const newEmployee1 = JSON.parse(JSON.stringify(employee1));
newEmployee1.name = "Jane"; // change the name of the employee object
console.log(employee1,'after'); // Output: { name: "John", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }
console.log(newEmployee1); // Output: { name: "John", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }

//3. structured clone => copy the reference of the object itself and also copies the object itself 
// using structuredClone() function
// if one object is changed then the other object will not be changed.

const employee3 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",   
  },    
};
console.log(employee3,'before');
const newEmployee3 = structuredClone(employee3);
newEmployee3.name = "Jane"; // change the name of the employee object
console.log(employee3,'after'); // Output: { name: "John", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }
console.log(newEmployee3); // Output: { name: "John", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }
