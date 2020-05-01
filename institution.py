'''
Institution class that contains all relevant information of an
Instutiton where Instructors will be matched to.                
'''

class Institution:
	def __init__(self, Name, Address, County, Program, Instructors, Schedule):
		self.name = Name
		self.address = Address
		self.program = Program
		self.county = County
		self.instructors = Instructors
		self.schedule = Schedule
