# Project Euler #32: Pandigital Products
Find the [sum of products](https://projecteuler.net/problem=32) based on all multiplication equations that meet pandigital digits criteria.

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

## Givens
* No duplicates: x * y = z is no different from y * x = z
* So we don't have to duplicate loops
* No duplicate products
* Should not include 0
* Combining the equation, we should have 9 pandigital digits total
<br />

* If x (multiplicand) is 2 digits, then y (multiplier) should be 3 digits to return a product of 4 digits minimum
* If x is 1 digit, y should be 4 digits to return a product of 4 digits minimum
* Maths tells me this is mostly true
<br />

* So for x at 2 digits, `lowest value: 12` and `highest value: 98`
    * For y at 3 digits, `low: 123` and `high: 987`
<br />

* For x at 1 digit, `low: 1` and `high: 9`
    * For y at 4 digits, `low: 1234` and `high: 9876`

## Unknowns
* What equations meet this criteria?
* Find the sum of all products (set of products)
* Can I do this without nested loops?
