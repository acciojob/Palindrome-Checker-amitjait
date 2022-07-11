// complete the given function
const str = document.getElementById('input');

function palindrome(str){
    let i =0; 
    let j = str.length-1;

    while(i<=j){
        if(str.charAt(i++) != str.charAt(j--)){
            return false;
        }
    }
    return true;
}
console.log(palindrome);
module.exports = palindrome
