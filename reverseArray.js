
let subjects=["Bangla","Math","Biology","Higher math","Chemistry"];
console.log(subjects);
let rev=[];

// reverse method 1
// for(const x of subjects){
//     rev.unshift(x);
    
// }
// console.log(rev);

// reverse method 2
// for(let i=subjects.length-1; i>=0;i--){
//     rev.push(subjects[i]);
    
// }

// console.log(rev);

// reverse method 3
subjects.reverse();
console.log(subjects);
