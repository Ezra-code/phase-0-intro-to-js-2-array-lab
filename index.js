// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let allCats = [...cats, name]
    return allCats
}
// console.log(appendCat('otis'))
function prependCat(name){
    let firstCat = [name, ...cats]
    return firstCat
}
function  removeFirstCat(){
    let removeFCat = cats.slice(1, 3)
    return removeFCat
}
function removeLastCat(){
    let removeCat = cats.slice(0, 2)
    return removeCat
}
