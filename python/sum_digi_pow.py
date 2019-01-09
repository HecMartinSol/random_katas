"""
The number 89 is the first integer with more than one digit that fulfills the property
partially introduced in the title of this kata.
What's the use of saying "Eureka"? Because this sum gives the same number.
In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two
integers a, b that defines the range [a, b] (inclusive) and outputs
a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sum_dig_pow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sum_dig_pow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sum_dig_pow(90, 100) == []
Enjoy it!!

https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka/train/python
"""


def sum_dig_pow(a, b): # range(a, b + 1) will be studied by the function
    solution = []
    for current_number in range(a, b + 1):
    	sum_pow, pos = 0,1
    	for digit in str(current_number):
    		sum_pow += int(digit)**pos
    		pos += 1
    		pass

    	if sum_pow == current_number:
    		solution.append(current_number)
    		pass
    pass

    return solution


print(sum_dig_pow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9])
print(sum_dig_pow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
print(sum_dig_pow(10, 89) ==  [89])
print(sum_dig_pow(10, 100) ==  [89])
print(sum_dig_pow(90, 100) == [])
print(sum_dig_pow(89, 135) == [89, 135])