// colo amra array er kichu method sikhi

// push method : ei method a array er last akta item add kore 

let array=[2,3,4,'food',6 , false,true,'monkey'];
array.push(3);
console.log(array);

//  pop method : last er item bad deyar jonno ei method use kora hoy

array.pop();
console.log(array);


// shift method : suru theke bad deyar jonno use kora hoy

array.shift();
console.log(array);

// unshift method : suru they item add korar jonno use kora hoy
array.unshift(500);
console.log(array);

//length method : array er totoal length ber korar jonno byabohar hoy

console.log(array.length);

// indexOf mehtod : item kotay achey seta cheack korar jonno indexof user kora hoy

console.log(array.indexOf(6));


// include : item achey kina cheack korar jonno

console.log(array.includes('food'));
