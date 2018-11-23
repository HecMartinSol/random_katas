# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/python
def accum(s):
	res = ""
	i = 1
	for char in s:
		for x in range(0,i):
			if x == 0:
				res += char.upper();
			else:
				res += char.lower();
			pass
		pass
		
		if i != len(s):
			res += "-";
		pass

		i += 1;
	pass

	return res
pass