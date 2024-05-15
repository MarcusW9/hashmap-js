
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

        if (this.length() > this.size * 0.75) {
            this.size = this.size * 1.25
        }
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

    length() {
        let count = 0

        this.buckets.forEach((bucket) => {
            if (bucket.length > 0) {
                for (let i = 0; i < bucket.length; i++) {
                    count++
                }
            }
        })
        return count
    }

    clear() {
        this.buckets = new Array(this.size).fill(null).map(() => [])
        return this.buckets
    }

    keys() {
        let keysArr = []

        this.buckets.forEach((bucket) => {
            if (bucket.length > 0) {
                for (let i = 0; i < bucket.length; i++) {
                    keysArr.push(Object.keys(bucket[i]).toString())
                }
            }
        })
        return keysArr
    }

    values() {
        let valArr = []

        this.buckets.forEach((bucket) => { 
            if (bucket.length > 0) {
                for (let i = 0; i < bucket.length; i++) {
                    valArr.push(Object.values(bucket[i]).toString())
                }
            }
        })
        return valArr
    }

    entries() {
        let entArr = []

        this.buckets.forEach((bucket) => { 
            if (bucket.length > 0) {
                for (let i = 0; i < bucket.length; i++) {
                    let key = Object.keys(bucket[i]).toString()
                    let val = Object.values(bucket[i]).toString()
                    entArr.push([key, val])
                }
            }
        })
        return entArr
    }


}

// To create out of bounds for the index 
if (index < 0 || index >= buckets.length) {
   throw new Error("Trying to access index out of bound");
 }

// To create the test hashmap
test = new hashMap(16) 
// console.log(test.buckets)

// set(key, value) 
test.set("yellow", "bird")
test.set("red", "dog")
test.set("red", "newdog")
test.set("der", "pig")
test.set("orange", "monkey")

// // get(key)
// console.log(test.get("blue"))

// // has(key)
// console.log(test.has("yellow"))

// // remove(key)
// console.log(test.remove("blue"))

// // length()
// console.log(test.length())

// // clear()
// console.log(test.clear())

// // keys
// console.log(test.keys())

// // values
// console.log(test.values())

// // entries
// console.log(test.entries())
