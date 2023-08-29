class Palindrome {
    // constructor(input) {
    //     this.input = this.validateInput(input);
    // }

    validateInput(input) {
        if (typeof input !== "string") {
            throw new Error(`Your input: "${input}" is not a valid string parameter.`)
        }
        return input;
    }

    inputToArray() {
        let inputArray = this.input.split(" ");
        return inputArray;
    }


    // Return inputs that are palindrome
    isPalindrome(input) {
        this.input = this.validateInput(input);
        const inputArray = this.inputToArray();
        let result = "";

        for(let count = 0; count < inputArray.length; count++) {
            if (this.isPalindromeText(inputArray[count])) {
                result += inputArray[count] + " ";
            }
        }
        return result;
    }

    // Helper method to check if a single text is palindrome
    isPalindromeText(input){
        let midPoint = Math.floor(input.length / 2);
        let firstHalf = input.substring(0,midPoint);
        let secondHalf = input.length % 2 == 0 ? input.substring(midPoint).split("").reverse().join("") : 
                            input.substring(midPoint+1).split("").reverse().join("");
        if (firstHalf == secondHalf) {
            return true
        };
        return false;
    }
}

// Test Class functionality
// Call the isPalindrome() method to perform palindrome test
// Make sure to pass in a string parameter to the method as any other type will throw an error
let palindrome = new Palindrome();
console.log(palindrome.isPalindrome("1230321 mom"));// returns 1230321 mom
console.log(palindrome.isPalindrome("1230321")); // returns 1230321
console.log(palindrome.isPalindrome("1230321 09234 0124210"));
console.log(palindrome.isPalindrome("abcd5dcba 1230321 09234 0124210")); // returns abcd5dcba 1230321 0124210
console.log(palindrome.isPalindrome("tenet hologram plan madam")); // returns tenet madam
console.log(palindrome.isPalindrome("noon evade mom")); // returns noon mom
console.log(palindrome.isPalindrome("hannah bible mother sagas")); // returns hannah sagas
console.log(palindrome.isPalindrome("palindrome nun 2345432")); // returns nun 2345432
console.log(palindrome.isPalindrome("civic aeroplane 23456 mom")); // returns mom civic
console.log(palindrome.isPalindrome("radar noon refer bone")); // radar noon refer
console.log(palindrome.isPalindrome(['mom',"nun","google"])); // throws error
console.log(palindrome.isPalindrome(1230321)); // throws error

