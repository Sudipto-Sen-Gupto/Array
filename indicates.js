// 3. Checking Array Membership with ‘includes’
// Instructions:

// .Create an array of books containing different book.
// .
// .Use the includes method to check if the array contains a javascript book.
// .
// .Print a message to the console indicating whether the element is present in the array or not.

let book=["Bangla","English","Math","C programming","Java programming"]
console.log(book);
console.log(book.includes("Javascript"));
book.push("Javascript");
console.log(book.includes("Javascript"));