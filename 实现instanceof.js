function Person() {}

const jack = new Person()
const steven = {}

function myInstanceof(obj, Constr) {
//     return Constr.prototype.isPrototypeOf(obj)

    let proto = obj.__proto__

    while (proto) {
        if (proto === Constr.prototype)
            return true
        proto = proto.__proto__
    }

    return false

}

function myInstanceof2 (obj, Constr) {
    var proto = Object.getPrototypeOf(obj)

    while (proto) {
        if (proto === Constr.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }

    return false
}

// console.log(jack instanceof Person)
// console.log(jack instanceof Object)
// console.log(steven instanceof Person)
// console.log(steven instanceof Object)

console.log(myInstanceof(jack, Person))
console.log(myInstanceof(jack, Object))
console.log(myInstanceof(steven, Person))
console.log(myInstanceof(steven, Object))
