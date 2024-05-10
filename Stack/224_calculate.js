// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:

// let s = "1 + 1"
// Output: 2
// Example 2:

// let s = " 2-1 + 2 "
// Output: 3
// Example 3:

let s = "(1+(4+5+2)-3)+(6+8)";
// Output: 23

var calculate = function (s) {
  let sum = 0;
  let sign = 1;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);

    if (!isNaN(parseInt(ch))) {
      let num = 0;
      while (i < s.length && !isNaN(parseInt(s.charAt(i)))) {
        num = num * 10 + parseInt(s.charAt(i));
        i++;
      }
      i--;

      sum += sign * num;
    } else if (ch === "+") {
      sign = 1;
    } else if (ch === "-") {
      sign = -1;
    } else if (ch === "(") {
      stack.push(sum);
      stack.push(sign);
      sum = 0;
      sign = 1;
    } else if (ch === ")") {
      sum *= stack.pop();
      sum += stack.pop();
    }
  }

  return sum;
};

console.log(calculate(s));
