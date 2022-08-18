const findSumPandigitalProducts = () => {
    let multiplier = 123;
    let productSet = new Set();
    while (multiplier < 9877) {
        const multiplierString = multiplier.toString();
        const multiplierSet = new Set(multiplierString);
        if (multiplierString.length == multiplierSet.size && !multiplierSet.has('0')) {
            productSet = getProductSet(productSet, multiplier, getLowerBound(multiplierString), getUpperBound(multiplierString))
        }
        multiplier++;
    }

    return sumProducts(productSet);
}

const getLowerBound = (multiplierString) => {
    return multiplierString.length == 4 ? 1 : 12;
}

const getUpperBound = (multiplierString) => {
    return multiplierString.length == 4 ? 10 : 99;
}

const sumProducts = (productSet) => {
    const arr = Array.from(productSet);

    return arr.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
}

const getProductSet = (productSet, multiplier, low, high) => {
    for (let multiplicand = low; multiplicand < high; multiplicand++) {
        const product = multiplicand * multiplier;

        const combinedNumbers = '' + multiplicand + multiplier + product;

        const combinedSet = new Set(combinedNumbers);

        if (!combinedSet.has('0') && combinedNumbers.length == 9 && combinedSet.size == 9) {
            productSet.add(product);
        }
    }
    return productSet;
}

findSumPandigitalProducts();
