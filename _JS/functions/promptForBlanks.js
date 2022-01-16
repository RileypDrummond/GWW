const blanksArrayAnswered = [];

async function writeToClipboard(text) {
		try {
			await navigator.clipboard.writeText(text);
				
			console.log("Text copied:\n" + text); //DEBUG
			} catch (error) {
				console.log(error);
			}
		}


async function alertPrompt(blanksArray = []) {
	let i = 0;
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