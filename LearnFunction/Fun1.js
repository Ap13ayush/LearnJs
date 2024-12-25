function number(){
    console.log("hello");
}
number();
console.log("hello");
let nowtime ="";
function time(){
nowtime += new Date();
console.log(nowtime);
    
}
time()


function replaceSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += '-'; // Replace space with '-'
        }
         else {
            result += str[i]; // Append the character as is
        }
    }
    return result;
}

// Example Usage:
console.log(replaceSpaces("hello world")); // Output: "hello-world"
console.log(replaceSpaces("this is a test")); // Output: "this-is-a-test"
console.log(replaceSpaces("no spaces here")); // Output: "no-spaces-here"


    