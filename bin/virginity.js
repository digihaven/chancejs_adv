module.exports = function (Chance) {
	// Random helper functions
	function initOptions(options, defaults) {
		options || (options = {});

		if (defaults) {
		    for (var i in defaults) {
			if (typeof options[i] === 'undefined') {
			    options[i] = defaults[i];
			}
		    }
		}

		return options;
	}

	// http://www.brasizechart.info/bra-sizes-by-age/

	// virginity table

	// When did you lose your virginity?
	// The average male loses his virginity at age 16.9; females average slightly older, at 17.4. And a new study shows that genetics may be a factor: inherited traits, such as impulsivity, can make a person more or less willing to have sex at an earlier age.
	// Sources: Kinsey Institute; California State University

	/*
	Almost half of women give away their V-card before they graduate high school.
	26% by age 15
	40% by age 16
	49% by age 17
	70% by age 18
	77% by age 19
	81% by age 21
	92% by age 24

	Source: The Kinsey Institute
	*/

	virginityChance={
		female:{
			10: 0.00,
			11: 5.19,
			12: 10.39,
			13: 15.6,
			14: 20.8,
			15: 26.00,
			16: 40.00,
			17: 49.00,
			18: 70.00,
			19: 77.00,
			20: 79.00,
			21: 81.00,
			22: 85.00,
			23: 88.00,
			24: 92.00
		},
		male:{ 	// Wrong because used famale data
			10: 0.00,
			11: 5.19,
			12: 10.39,
			13: 15.6,
			14: 20.8,
			15: 26.00,
			16: 40.00,
			17: 49.00,
			18: 70.00,
			19: 77.00,
			20: 79.00,
			21: 81.00,
			22: 85.00,
			23: 88.00,
			24: 92.00,
		}
	}

	Chance.prototype.virginity = function (options) {

		if (options.age && !options.birthday)
		{
			options = initOptions(options, {
			    year: (new Date().getFullYear() - options.age)
			});
		
			options.birthday=this.date(options);
		}
	
		if (options.birthday && !options.age)
		{
			var ageDifMs = Date.now() - options.birthday.getTime();
			var ageDate = new Date(ageDifMs); // miliseconds from epoch
			var age=Math.abs(ageDate.getUTCFullYear() - 1970);
			options = initOptions(options, {
			    age: age
			});
		}
	
		if (!options.gender)
		{
			options = initOptions(options, {
			    gender: this.gender()
			});
		}
	
		var vtable=virginityChance[options.gender.toLowerCase()];
		var vkeys=Object.keys(vtable);
	
		var vage=options.age;
	
		if (vage<vkeys[0])
			vage=vkeys[0];
		else if (vage>vkeys[vkeys.length-1])
			vage=vkeys[vkeys.length-1];
			
		var likelihood = vtable[vage];

		return !this.bool({likelihood: vtable[vage]});
	};
}