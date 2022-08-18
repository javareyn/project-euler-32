/**
 * finds the sum of unique set of products of all multiplication equations that meet pandigital digits criteria
 * @returns sum of pandigital products
 */
const sumPandigitalProducts = () => {
    let multiplier = 1234;
    let productSet = new Set();

    while (multiplier < 9877) {
        if (multiplier.toString().includes('0') || new Set(multiplier.toString()).size < 4) {
            multiplier++;
            continue;
        }

        productSet = getProducts(productSet, multiplier, 1, 10);
        multiplier++
    }

    multiplier = 123;

    while (multiplier < 988) {
        if (multiplier.toString().includes('0') || new Set(multiplier.toString()).size < 3) {
            multiplier++;
            continue;
        }

        productSet = getProducts(productSet, multiplier, 12, 99);
        multiplier++;
    }

    const arr = Array.from(productSet);

    return arr.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
}

/**
 * Get set of unique product values
 * @param {Set} productSet 
 * @param {Number} multiplier 
 * @param {Number} low 
 * @param {Number} high 
 * @returns 
 */
const getProducts = (productSet, multiplier, low, high) => {
    for (let multiplicand = low; multiplicand < high; multiplicand++) {
        if (multiplicand.toString().includes('0')) {
            continue;
        }

        const product = multiplicand * multiplier;

        if (product.toString().includes('0') || productSet.has(product)) {
            continue;
        }

        const numberStrings = '' + multiplicand + multiplier + product;

        if (numberStrings.length === 9 && new Set(numberStrings).size === 9) {
            productSet.add(product);
        }
    }
    return productSet;
}

sumPandigitalProducts();