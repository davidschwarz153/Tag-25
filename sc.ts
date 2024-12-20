let firstName = "David"  
let lastName  = "Schwarz"

console.log(firstName.length, lastName.length);

let fullName = firstName + lastName
console.log(fullName, fullName.length);

//

const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."

let res = earthQuote.indexOf("h")

console.log(res);
res = earthQuote.indexOf("Earth")
console.log(res);
res = earthQuote.indexOf("Moon")
console.log(res);

//

// const susisStatus = 'Susi is going to codingschool'
// const a = document.createElement("p");
// const b = document.createElement("p");
// const c = document.createElement("p");
// const d = document.createElement("p");
// const e = document.createElement("p");
// let text

// text = susisStatus.slice(0,4)
// a.textContent = text
// school.appendChild(a);

// text = susisStatus.slice(5,7)
// b.textContent = text
// is.appendChild(b);

// text = susisStatus.slice(5,17)
// let text2 
// text2 = susisStatus.slice(23)
// c.textContent = text + text2
// going.appendChild(c);

// text = susisStatus.slice()
// d.textContent = text2
// school.appendChild(d);

// text = susisStatus.slice(0,8)
// e.textContent = text + text2
// susiis.appendChild(e);


//

const samsStatus = "Sam is good at codingschool"
const samOne = samsStatus.replace("good at codingschool", "bad at school")
const samTwo = samsStatus.replace("codingschool", "school")
const samThree = samsStatus.replace("codingschool", "tennis")

document.open()
document.write(samOne +"<br/>"+ samTwo +"<br/>" + samThree+ "<br/>"+ "<br/>")

// 

const infoAboutSam = "Sam is going to codingschool"
const susi = "Susi" 
const and = "and"


document.write(infoAboutSam.slice(0,16) + infoAboutSam.slice(22) + " " + and + " " + infoAboutSam.slice(13,15) + " the movie theater" + "<br/>")
document.write(infoAboutSam.slice(0,16)  + " the movie theater" + "<br/>")
document.write(infoAboutSam.slice(0,3) + " " + and + " " + susi + " are " +infoAboutSam.slice(7,16) +  infoAboutSam.slice(22) + "<br/>")
document.write(infoAboutSam.slice(0,3) + " " + and + " " + susi + " are " +infoAboutSam.slice(7,16) + "gym " + and +  " " + infoAboutSam.slice(13,15) + " the movie theater" + "<br/>"+ "<br/>")

// 

const whereIsSam = "Sam is going to school"

document.write(whereIsSam.toUpperCase() + "<br/>")
document.write(whereIsSam.toLowerCase() + "<br/>")
let sam = whereIsSam.slice(0,4)
let school = whereIsSam.slice(16)
let isGoingTo = whereIsSam.slice(4,16)



document.write(sam.toUpperCase() + isGoingTo + school.toUpperCase() + "<br/>")

let sam1 = sam.slice(0,1).toUpperCase()
let is1 = isGoingTo.slice(0,1).toUpperCase()
let going1 = isGoingTo.slice(3,4).toUpperCase()
let to1 = isGoingTo.slice(9,10).toUpperCase()
let school1 = school.slice(0,1).toUpperCase()

let sam2 = sam.slice(1)
let is2 = isGoingTo.slice(1,3)
let going2 = isGoingTo.slice(4,9)
let to2 = isGoingTo.slice(10,12)
let school2 = school.slice(1)

document.write(sam1+sam2 +is1+is2 + going1+going2 +to1+to2 +school1+school2)


//

let n1 = 15.16698
let n2 = 7.78714
let n3s ="12.3"
let n3 : number = +n3s 
let n4b = true
let n4 : number = +n4b
let n5b = false
let n5 : number = +n5b
let n6s ="321"
let n6 : number = +n6s 
let n7l = "Supercode"
let n7 = n7l.length

let n = n1.toFixed(2)
n = n2.toFixed(2)
n = n3.toFixed(2)
n = n4.toFixed(2)
n = n5.toFixed(2)
n = n6.toFixed(2)
n = n7.toFixed(2)


//

let testF = 15.16698
let f0 = testF.toString()
let f1 = testF.toString(2)
let f2 = testF.toString(8)
let f3 = testF.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

testF = 7.78714
f0 = testF.toString()
f1 = testF.toString(2)
f2 = testF.toString(8)
f3 = testF.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testStr = "12.3"
let testNum : number = +testStr
f0 = testNum.toString()
f1 = testNum.toString(2)
f2 = testNum.toString(8)
f3 = testNum.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);


testStr = "3.14random"
let testNum1 : number = +testStr.slice(0,4)
f0 = testNum1.toString()
f1 = testNum1.toString(2)
f2 = testNum1.toString(8)
f3 = testNum1.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

testStr = "32px"
let testNum2 : number = +testStr.slice(0,2)
f0 = testNum2.toString()
f1 = testNum2.toString(2)
f2 = testNum2.toString(8)
f3 = testNum2.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testbol1 = true
let testNum3 : number = +testbol1
f0 = testNum3.toString()
f1 = testNum3.toString(2)
f2 = testNum3.toString(8)
f3 = testNum3.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testbol2 = false
let testNum4 : number = +testbol2
f0 = testNum4.toString()
f1 = testNum4.toString(2)
f2 = testNum4.toString(8)
f3 = testNum4.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testStr1 = "321"
let testNum5 : number = +testStr1
f0 = testNum5.toString()
f1 = testNum5.toString(2)
f2 = testNum5.toString(8)
f3 = testNum5.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testStr2 = "Supercode"
let testNum6 : number = +testStr2.length
f0 = testNum6.toString()
f1 = testNum6.toString(2)
f2 = testNum6.toString(8)
f3 = testNum6.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);




