
let data1 = JSON.stringify(newdev);
let data2 = JSON.stringify(phonebook);
let data3 = JSON.stringify(studentArray);
let data4 = JSON.stringify(students);

// 001
//console.log(data1, data2, data3, data4);
//002
//document.write(data1, data2, data3);

console.log(`----------divider------------`);

//003
localStorage.setItem("developer", data1);
localStorage.setItem("PhoneB", data2);
localStorage.setItem("StudentsArray", data3);
localStorage.setItem("StudentsGPA", data4);

//004
// let getWithArray = [data1, data2, data3, data4];
// console.log(getWithArray[2]);

//005

// let getFromLSto1 = localStorage.getItem('developer')

// console.log(JSON.parse(getFromLSto1));
// console.log(`----------divider------------`);

//006 
let getFromLSto1 = localStorage.getItem('developer');
let getFromLSto2 = localStorage.getItem('PhoneB');
let getFromLSto3 = localStorage.getItem('StudentsArray');
let getFromLSto4 = localStorage.getItem('StudentsGPA');


console.log(JSON.parse(getFromLSto1), JSON.parse(getFromLSto2), JSON.parse(getFromLSto3), JSON.parse(getFromLSto4));
