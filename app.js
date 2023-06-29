function askQuestion(promptText, yesAnswer, yesAnswerOutput,noAnswer, noAnswerOutput) {
let response = prompt(promptText);
if (response !== null) {
    if (response.toLowerCase()=== yesAnswer) {
        alert(yesAnswerOutput);
    } else if (response.toLowerCase() === noAnswer) {
        alert(noAnswerOutput);
    } else {
        alert('Invalid response. Please answer \'yes\' or \'no\'.'); 
    }
}

}

askQuestion('Are mangoes your favorite fruit?', 'yes', 'Great! Mangoes are delicious.', 'no', 'That\'s alright. Mangoes may not be for everyone.')
askQuestion('Did you know there are almost 300 different types of mangoes?', 'yes','You\'re a mango expert!','no','Don\'t worry! You can learn new things everyday.')

function askNumber() {
    let number = prompt('How many different mangoes have you tried?');
    console.log(typeof(number))
    while(!number) {
        number = prompt('Please enter how many types of mangoes you\'ve tried.')
    }
    alert('Wow, you\'ve tried ' + number + ' types of mangoes!')
    return number
}
let number = parseInt(askNumber())
console.log(typeof(number));
for (let i = 0; i < number; i++) {
    console.log(i)
    document.write('<img src="https://florigen.co.ke/wp-content/uploads/fruit-mango-kent-02.jpg">')
} 