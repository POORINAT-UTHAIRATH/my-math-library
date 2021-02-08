function sum(a, b){
    if (Array.isArray(a))
        return a.reduce((total, i) => total + i, 0)
    return a + b
}

module.exports = {
    sum, 
}