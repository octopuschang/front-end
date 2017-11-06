//第一套方案：入栈push()、出栈pop()
var stack1 = [];
stack1.push('1');
stack1.push('2');
stack1.push('3');
stack1.push('4');
stack1.push('5');
console.log(stack1.pop());
//第二套方案：入栈unshift()、出栈shift()
var stack2 = [];
stack2.unshift('1');
stack2.unshift('2');
stack2.unshift('3');
stack2.unshift('4');
stack2.unshift('5');
console.log(stack2.shift());
