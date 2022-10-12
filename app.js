let str ="*"
while (str.length <=7){
    console.log(str + "\n")
    str+='*'
}

for (let i = 0; i < 101; i++){
    if (i % 3 ===0 && i % 5===0){
        console.log('fizzBuzz')
    }else if (i % 3 ===0){
        console.log('Fizz')
    }else if (i % 5 ===0){
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}

function createChess(a, b) {
  let value1 = "# ";
  let value2 = " #";
  let odd = "";
  let even = "";
  for (let i = 0; i < a / 2; i += 1) {
    odd += value2;
    even += value1;
  }

  for (let j = 0; j < b; j += 1) {
    if (j % 2 != 0) {
      console.log(odd);
    } else {
      console.log(even);
    }
  }
}

createChess(16, 16);