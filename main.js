function mixedMessage () {

    // words to be choosed randomly
        const qualities = ['handsome', 'lazy', 'crazy', 'smart'];
        const job = ['Designer', 'Network Engineer', 'Software Developper', 'Data Scientist'];
        const need = ['sleep', 'eat more food', 'rest a bit', 'take a shower'];

    // select an element randomly in the array
    let randomWordqualities = qualities[Math.floor(Math.random() * qualities.length)];
    let randomWordjob = job[Math.floor(Math.random() * job.length)];
    let randomWordneed = need[Math.floor(Math.random() * need.length)];

    // sentence to return when we run the program
    let result = [];
    let randomSentence = result.push(`If you are ${randomWordqualities}, that also means you can be a ${randomWordjob}. But to do that, you need to ${randomWordneed} when you are free`);
    
	// Return result of the whole function
    return console.log(result.join(' '));
};
 mixedMessage();
