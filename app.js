function askQuestion(promptText, yesAnswer, yesAnswerOutput,noAnswer, noAnswerOutput) {
let response = prompt(promptText);
if (response !== null) {
    if (response.toLowerCase()=== yesAnswer) {
        console.log(yesAnswerOutput);
    } else if (response.toLowerCase() === noAnswer) {
        console.log(noAnswerOutput);
    } else {
        console.log('Invalid response. Please answer \'yes\' or \'no\'.'); 
    }
}

}

askQuestion('Are mangoes your favorite fruit?', 'yes', 'Great! Mangoes are delicious.', 'no', 'That\'s alright. Mangoes may not be for everyone.')
askQuestion('Did you know there are almost 300 different types of mangoes?', 'yes','You\'re a mango expert!','no','Don\'t worry! You can learn new things everyday.')