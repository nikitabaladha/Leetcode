// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[], [-2], [0], [-3], [], [], [], []];

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

var MinStack = function () {
  this.stack = [];
  this.Minstack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.Minstack.length === 0 || val <= this.getMin()) {
    this.Minstack.push(val);
  }
};

MinStack.prototype.pop = function () {
  let popped = this.stack.pop();
  if (popped === this.getMin()) {
    this.Minstack.pop();
  }
  return popped;
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.Minstack[this.Minstack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// ========================================================

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    if (!this.stack.length) {
      this.stack.push(val);
      this.minStack.push(val);
    } else {
      this.stack.push(val);
      this.minStack.push(
        Math.min(this.minStack[this.minStack.length - 1], val)
      );
    }
  }

  pop() {
    if (!this.stack.length) return null;
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// =================================================================

// Input
const commands = [
  "MinStack",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "top",
  "getMin",
];
const values = [[], [-2], [0], [-3], [], [], [], []];

// Output
const minStack = new MinStack();
const output = values.map((value, index) => {
  const command = commands[index];
  if (command === "push") {
    minStack.push(...value);
    return null;
  } else if (command === "pop") {
    return minStack.pop();
  } else if (command === "top") {
    return minStack.top();
  } else if (command === "getMin") {
    return minStack.getMin();
  } else {
    return null;
  }
});

console.log(output); // [null, null, null, null, -3, null, 0, -2]

// ===================================Javacode==============================

// import java.util.Stack;

// class MinStack {
//     private Stack<Integer> stack;
//     private Stack<Integer> minStack;

//     public MinStack() {
//         this.stack = new Stack<>();
//         this.minStack = new Stack<>();
//     }

//     public void push(int val) {
//         if (stack.isEmpty()) {
//             stack.push(val);
//             minStack.push(val);
//         } else {
//             stack.push(val);
//             minStack.push(Math.min(minStack.peek(), val));
//         }
//     }

//     public int pop() {
//         if (stack.isEmpty()) {
//             return -1; // or any suitable value to indicate an empty stack
//         }
//         minStack.pop();
//         return stack.pop();
//     }

//     public int top() {
//         if (stack.isEmpty()) {
//             return -1; // or any suitable value to indicate an empty stack
//         }
//         return stack.peek();
//     }

//     public int getMin() {
//         if (minStack.isEmpty()) {
//             return -1; // or any suitable value to indicate an empty stack
//         }
//         return minStack.peek();
//     }
// }
