const name="jayanth"
const age=20
//console.log(name+age);//jayanth20

console.log(`Hello my name is ${name} and my age is ${age}`);//my name is jayanth and my age is 20

const game=new String("jayanth")//type this in console 
console.log(game)//type this in console 
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.charAt(3))
console.log(game.indexOf('n'))

const st1=game.substring(2,6)
console.log(st1);

const st2=game.slice(-5,1)
console.log(st2)

// also we've trim,strip,split,replace,includes and many more string functions you can check them on ecma js doc or in console 
