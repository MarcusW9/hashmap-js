
class hashMap {
    constructor(size) {
        this.size = size
        this.buckets = new Array(size).fill(null).map(() => [])
    }

    hash(key) {
        let len = key.length
        let hashCode = 0
        const primeNumber = 31
        
            for (let i = 0; i<len; i++) {
        
                hashCode =  (primeNumber * hashCode + key.charCodeAt(i)) % this.size
            }
        return hashCode
    }
    

    set(key, value) {
        let index = this.hash(key);

        for(let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i].hasOwnProperty([key])) {
                this.buckets[index][i] = {[key] : value}
                return
            } 
        }
        this.buckets[index].push({ [key] : value })
        // console.log(this.buckets[index])
    }

    get(key) {
        let index = this.hash(key) 

            for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i].hasOwnProperty([key])) {
                return (this.buckets[index][i][key])
            }
        }
        return null
    }

    has(key) {
        let index = this.hash(key)

            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i].hasOwnProperty([key])) {
                    return true
                }
            }
        return false
    }

    remove(key) {
        let index = this.hash(key)
        
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i].hasOwnProperty([key])) {
                    this.buckets[index].splice(i, 1)
                    return true
                }
            }
        return false
    }
}

// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

test = new hashMap(16) 
// console.log(test.buckets)

test.set("yellow", "bird")
test.set("red", "dog")
test.set("red", "newdog")
test.set("der", "pig")

// get
// console.log(test.get("blue"))

// has
// console.log(test.has("yellow"))

// remove
console.log(test.remove("blue"))


console.log(test.buckets)