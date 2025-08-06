
let studentName=["Rony","Ekram","Makram","Bavuma","Ishant","Ipshita","Akash"]
studentName.sort();
console.log(studentName);

let idNumber=[12,100,38,29,37,41,7];
idNumber.sort(function(a,b){  return a-b}); //ascending
console.log(idNumber);
idNumber.sort(function(a,b){ return b-a})//decending
console.log(idNumber);