const findSumPandigitalProducts = () => {
    let multiplier = 1234;
    let productSet = new Set();

    while (multiplier < 9877) {
        const multiplierString = multiplier.toString();
        if (!multiplierString.includes('0') && new Set(multiplierString).size == 4) {
            productSet = getProductSet(productSet, multiplier, getLowerBound(multiplierString), getUpperBound(multiplierString))
        }
        multiplier++
    }

    multiplier = 123;

    while (multiplier < 988) {
        const multiplierString = multiplier.toString();
        if (!multiplierString.includes('0') && new Set(multiplierString).size == 3) {
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

        if (!combinedNumbers.includes('0') && combinedNumbers.length === 9 && new Set(combinedNumbers).size === 9) {
            productSet.add(product);
        }
    }
    return productSet;
}

findSumPandigitalProducts();
