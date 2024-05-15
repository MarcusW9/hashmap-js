class HashSet {
    constructor(size) {
        this.size = size
        this.buckets = new Array(size).fill(null).map(() => [])
    }

    hash(key) {
        let len = key.length
        let hashCode = 0
        let primeNumber = 31

        for (let i = 0; i<len; i++) {
            hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.size 
        }
        return hashCode
    }

    set(key) {
        let index = this.hash(key);

        if (this.buckets[index].includes(key)) {
            return
        }
        this.buckets[index].push(key)
    }
}

test = new HashSet(16)

test.set("red")
test.set("red")

console.log(test)

