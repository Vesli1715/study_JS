n = 1

def one():
	n=2
	print(n)
	def two():
		print(n)
		n=2

	return two()
one()
