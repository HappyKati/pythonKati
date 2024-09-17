const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function (n) {
    if (n >= 101) {
    console.log("Error");
}else if (n >= 80) {
    console.log("Grade = A");
} else if (n >= 75){
    console.log("Grade = B+");
}else if (n >= 70){
    console.log("Grade = B");
}else if (n >= 65){
    console.log("Grade = c+");
}else if (n >= 60){
    console.log("Grade = c");
}else if (n >= 55){
    console.log("Grade = D+");
}else if (n >= 50){
    console.log("Grade = D");
}else if (n >= 0){
    console.log("Grade = F");
}else if(n<=0)
    console.log("Error");
    rl.close();
});