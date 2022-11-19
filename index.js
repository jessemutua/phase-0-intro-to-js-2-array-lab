// // Write your solution here!
var cats;
cats = ["Milo", "Otis", "Garfield"]

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield")
    return cats;
}

function destructivelyAppendCat(name) {
    cats.push(name);
    console.log(cats);
    return cats;
}
// destructivelyAppendCat("Ralph");
beforeEach()

function destructivelyPrependCat(name) {
    cats.unshift(name);
    console.log(cats);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}
beforeEach();

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}
beforeEach();

function appendCat(name) {
    var copy;
    copy = [...cats, name];
    return copy;
}

function prependCat(name) {
    var copy;
    copy = [name, ...cats];
    return copy;
}

function removeLastCat() {
    var copy;
    copy = cats.slice(0, cats.length - 1);
    return copy;

}

function removeFirstCat() {
    var copy;
    copy = cats.slice(1)
    return copy;
}