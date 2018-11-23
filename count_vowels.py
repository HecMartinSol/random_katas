def getCount(inputStr):
    num_vowels = 0
    # your code here
    for x in xrange(0, len(inputStr)):
    	letter = inputStr[x]
    	if letter == "a" or letter == "e" or letter == "i" or letter == "o" or letter == "u":
    		num_vowels += 1
    	pass
    pass
    
    return num_vowels