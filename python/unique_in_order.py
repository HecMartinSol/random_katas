"""
Implement the function unique_in_order which takes as argument a
sequence and returns a list of items without any elements
with the same value next to each other and preserving
the original order of elements.

For example:

unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
unique_in_order([1,2,2,3,3])       == [1,2,3]

https://www.codewars.com/kata/54e6533c92449cc251001667/train/python
"""
def unique_in_order(iterable):
	unique = []
	for el in iterable:
		if len(unique) == 0 or el != unique[-1]:
			unique.append(el)
			pass
		pass
	pass
	return unique

print(unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B'])
print(unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D'])
print(unique_in_order([1,2,2,3,3])       == [1,2,3])
