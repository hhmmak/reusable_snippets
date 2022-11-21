/*
+, -, () calculator
params : s {string}
return  {number}
*/

var calculate = function(s) {
  let pt = 0;
  let stack = [0];
  let num = 1;
  while (pt < s.length){
    while (s[pt] === " "){
      pt ++;
    }
    if (pt >= s.length) break;

    if (!isNaN(s[pt])){
      let fast = pt + 1;
      while (fast < s.length && !isNaN(s[fast])){
        fast ++;
      }
      num *= Number(s.slice(pt, fast));
      stack[stack.length - 1] += num;
      num = 1;
      pt = fast - 1;
    } else if (s[pt] === "-") {
      num = -1;
    } else if (s[pt] === "(") {
      stack.push(num);
      num = 1;
      stack.push(0);
    } else if (s[pt] === ")") {
      num = stack.pop() * stack.pop();
      stack[stack.length - 1] += num;
      num = 1;
    }
    pt ++;
  }
  return stack[0];
};