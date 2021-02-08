function sum(a, b){
    if (Array.isArray(a)) {
        let total = 0
        a.forEach((i) => (total += i))
        // for (let i=0; i<a.length ; i++)
        //     total += a[i]
        return total
    }
    return a + b
}

module.exports = {
    sum, 
}