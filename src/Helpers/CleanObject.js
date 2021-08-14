const clean = (obj = {}) => {
    const newObj = {...obj}
    for (const propName in newObj) {
        if(newObj[propName] === null || newObj[propName] === undefined) {
            delete newObj[propName];
        }
    }

    return newObj
}

module.exports = clean
