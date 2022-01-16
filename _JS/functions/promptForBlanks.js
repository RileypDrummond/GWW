const blanksArrayAnswered = [];

function alertPrompt(blanksArray = []) {
	var i = 0;
	for (const element of blanksArray){
		blanksArrayAnswered[i] = prompt(blanksArray[i]);
		
		//break out of function on cancel
		if (blanksArrayAnswered[i] === null) {
        return; 
    }
		
		i++;
		
		//Debug
		console.log(blanksArrayAnswered[i-1]);

	}
	
}