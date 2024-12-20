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







