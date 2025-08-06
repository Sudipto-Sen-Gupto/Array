console.clear();
let student=[
    {
        name:"Abdul Samad",
        roll:23,
        class:3,
        religion:"Islam",
        gender:"Male"
    },
    {
        name:"Raisha",
        roll:3,
        class:5,
        religion:"Islam",
        gender:"Female" 
    },
    {
        name:"Abdul Kuddus",
        roll:20,
        class:6,
        religion:"Islam" ,
        gender:"Male"

    },
    {
        name:"Arju Das",
        roll:1,
        class:5,
        religion:"Hindu",
        gender:"Male"
    }

]

// console.log(student[2].name.concat(",",student[2].class));
for(const x of student){
    console.log(x.name.concat(":",x.roll));
    
    
}

