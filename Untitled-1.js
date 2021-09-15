console.log("Hello World");


const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

  
  for (const [key] of Object.entries(object1)) {
    console.log(`${key}`);
  }

  const list = [ 'h', 'e', 'l', 'l', 'o'];
list.map((currElement, index) => {
  console.log("The current iteration is: " + index);
  console.log("The current element is: " + currElement);
  console.log("\n");
  return currElement; //equivalent to list[index]
});



(Object.entries(object1)).map((currElement,index, arr) => {

    console.log(currElement[1]);
    console.log(index);

})

let l = 7;
l = 20;