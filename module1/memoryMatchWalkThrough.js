function randomAnswers() {

    let answers = [34,1,1,2,2,3,3,4,4,5];
    answers.sort(function(item) {
	//console.log(item);
	value = .5 - Math.random();
	console.log(value);
	//return .5 - Math.random();
	return value;
    });
    console.log(answers.length);
    return answers;
}

randomAnswers();
