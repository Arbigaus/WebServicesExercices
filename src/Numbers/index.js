export const sortNumbers = numbers => {
    const arr = numbers.split(";").map(n => parseInt(n))

    let ascend = arr.sort((a, b) =>  { return a - b })
    let descend = arr.sort((a, b) =>  { return b - a })
    let pairs = arr.filter( n => n % 2 == 0 ).sort((a, b) =>  { return a - b })

    return {
        ascend,
        descend,
        pairs
    }
}