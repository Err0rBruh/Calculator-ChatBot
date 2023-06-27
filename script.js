function handleInput() {
  var userInput = document.getElementById('user-input').value;
  var chatbox = document.getElementById('chatbox');
  chatbox.innerHTML += '<p>User: ' + userInput + '</p>';

  var words = userInput.toLowerCase().split(' ');
  var num1, operator, num2;

  for (var i = 0; i < words.length; i++) {
    if (!isNaN(words[i])) {
      if (num1 === undefined) {
        num1 = parseFloat(words[i]);
      } else if (num2 === undefined) {
        num2 = parseFloat(words[i]);
      }
    } else if (isNaN(words[i])) {
      operator = convertOperator(words[i]);
    }
  }

  if (num1 !== undefined && operator !== undefined && num2 !== undefined) {
    var result;

    switch (operator) {
      case '-':
        result = num1 - num2;
        break;
      case '+':
        result = num1 + num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
        break;
    }

    if (isNaN(result) || !isFinite(result)) {
      chatbox.innerHTML += '<p>Chatbot: Sorry, I couldn\'t understand the question.</p>';
    } else {
      chatbox.innerHTML += '<p>Chatbot: The answer is ' + result + '.</p>';
    }
  } else {
    chatbox.innerHTML += '<p>Chatbot: Sorry, I cannot generally talk with you. I am only here to do calculations.</p>';
  }

  document.getElementById('user-input').value = '';
  chatbox.scrollTop = chatbox.scrollHeight;
}

function convertOperator(operator) {
  switch (operator) {
    case 'plus':
    case '+':
      return '+';
    case 'minus':
    case '-':
      return '-';
    case 'multiply':
    case 'times':
    case '*':
      return '*';
    case 'divide':
    case '/':
      return '/';
    default:
      return null;
  }
}
