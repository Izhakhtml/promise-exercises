//! exe 1

function getName(param) {
    return new Promise((resolve,reject)=>{
        param == "izhak"?resolve("very well"):reject("not well")
    })
}
async function asyncFunction() {
    try {
         return await getName("izhak")
       } catch (error) {
          return error
          }
}
asyncFunction()
.then((res)=>{
    // console.log(res);
})
.catch((rej)=>{
    // console.log(rej);
})

//! exe 2

function getNumbers(num1,num2) {
    return new Promise((resolve,reject)=>{
        num1==num2?resolve("very well"):reject("try again")
    })
}
async function numbersAsync() {
    try {
        return await getNumbers(4,4)
    } catch (error) {
        return error
    }
}
numbersAsync()
.then((res)=>{
    // console.log(res);
})
.catch((rej)=>{
    // console.log(rej);
})

//! exe 3

function lengthString(str) {
    return new Promise((resolve,reject )=>{
       setTimeout(() => {     
       str.length>6?resolve("longer"):reject("shorter")
       }, 4000)  
    })
}
async function getString() {
    try {
        showPhoto()
        return await lengthString("izhak")
    } catch (error) {
          return error        
    }
}
// getString()
// .then((res)=>{
//     container.innerHTML = res
// })
// .catch((rej)=>{
//     container.innerHTML = rej
// })
// .finally(()=>{ image.style.display="none"})

function showPhoto() {
    container.innerHTML = `<center><img id="image" src="./image.gif" ></img><center>`
}

function hidePhoto() {
    image.style.display = "none"
}
//! exe 4
class Dogs{
    name;
    age;
    type;
    constructor(name,age,type){
    this.name = name
    this.age = age
    this.type = type
    }
}
const DOG = new Dogs("blacky",13," BB")
const DOG2 = new Dogs("whity",12,"AA")
const DOG3 = new Dogs("pinky",17,"CC")
const DOGSARRAY = [DOG,DOG2,DOG3]
//! One way
function getBigNumber(array) {
    let biggestDog = array[0]
    for (const dogItem of array) {
        if(dogItem.age>biggestDog.age)biggestDog = `${dogItem.name} ${dogItem.age} ${dogItem.type}`;
    }
    return biggestDog
}
function promiseFun() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        true?resolve(getBigNumber(DOGSARRAY)):reject("No one")    
        }, 3000);
    })
}
//!
//! Second way
function anotherFunctionDogs(array) {
    let biggerDog = array[0]
    return new Promise((resolve)=>{
       array.forEach(dogItem => {
           if(dogItem.age>biggerDog.age){
              biggerDog =`${dogItem.name} ${dogItem.age} ${dogItem.type}`
           }   
       });
        true?resolve(biggerDog):reject("no") 
    })
}
//!
async function gatBiggersDog() {
    try {
        showPhoto()
        return await promiseFun()
    } catch (error) {
        return error
    }
    finally{
        hidePhoto()
    }
}
// gatBiggersDog()
// .then((res)=>{container.innerHTML = res})
// .catch((rej)=>{container.innerHTML = rej})

//! AGAIN 
class AnotherDog{
    name;
    age;
    type;
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
    }
}
const DOG_A = new AnotherDog("greeny",23,"SSS")
const DOG_B = new AnotherDog("orangey",29,"ZZZ")
const DOG_C = new AnotherDog("yellowy",21,"MMM")
const ANOTHERARRAYDOGS = [DOG_A,DOG_B,DOG_C]

function anotherFunctionDogs(array) {
    let biggerDog = array[0]
    return new Promise((resolve)=>{
       array.forEach(dogItem => {
           if(dogItem.age>biggerDog.age){
              biggerDog =`${dogItem.name} ${dogItem.age} ${dogItem.type}`
           }   
       });
        true?resolve(biggerDog):reject("no") 
    })
}
async function anotherAsyncFunction() {
    try {
     return await anotherFunctionDogs(ANOTHERARRAYDOGS)
    } catch (error) {
        return error
    }
}
// anotherAsyncFunction()
// .then((res)=>{container.innerHTML=res;})
// .catch((rej)=>{container.innerHTML= rej;})
//! exe 1 Map

let map = new Map()
map.set("izhak",24)
map.set("shay",25)
map.set("matan",32)
map.set("haim",43)
map.set("ilan",54)
map.set("avrham",37)
map.set("nitzan",44)
//! *
map.set("avi",87)
// console.log(map.get("avi"));
//! *
// console.log(map.values());
//! *
// console.log(map.keys());
for (const ageItem of map.keys()) {
   if (ageItem.length > 4) {
// console.log(ageItem);
   } 
}

//! exe 2
let apartmentMap = new Map()
apartmentMap.set(2,7)
apartmentMap.set(4,11)
apartmentMap.set(1,10)
apartmentMap.set(3,8)
console.log(apartmentMap);
//! exe 3 
//! way to achive the value
function promiseFunction(map) {
    let max 
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
    for (const mapItem of map.values()) {
    if (max.get(1)<mapItem) max = mapItem
    }
    true?resolve(max):reject("no")    
    }, 3000);   
    })
}
// !
//! way to achive the key
function appartmentsPromise(param) {
    let key = 0
    let max = 0 
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
      for (const appartmentItem of param.keys()) {
          if(param.get(appartmentItem)>max)
              key = appartmentItem
              max = param.get(appartmentItem)
      }  
        true?resolve(key):reject("no one")
    }, 3000);   
    })
}
// !
async function asyncFunction2(){
  try {
    showPhoto()
      return await appartmentsPromise(apartmentMap)
  } catch (error) {
      return error
  }
  finally{
    hidePhoto()  
  }
}
asyncFunction2()
.then((res)=>{container.innerHTML =res})
.catch((rej)=>{container.innerHTML =rej})
// .finally(()=>{hidePhoto()})
//! table
// for (const mapItem of apartmentMap.keys()) {
// tr.innerHTML+=`<td>${mapItem}</td>`
// tr2.innerHTML+= `<td>${apartmentMap.get(mapItem)}</td>`    
// }

