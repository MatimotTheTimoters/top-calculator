// Cache DOM elements
const inputDisplay = document.querySelector(".user-input");
const resultDisplay = document.querySelector(".operation-output");

const numberButtons = {
  0: document.querySelector("#zero"),
  1: document.querySelector("#one"),
  2: document.querySelector("#two"),
  3: document.querySelector("#three"),
  4: document.querySelector("#four"),
  5: document.querySelector("#five"),
  6: document.querySelector("#six"),
  7: document.querySelector("#seven"),
  8: document.querySelector("#eight"),
  9: document.querySelector("#nine")
};

const operatorButtons = {
  "+": document.querySelector("#add"),
  "-": document.querySelector("#subtract"),
  "*": document.querySelector("#multiply"),
  "/": document.querySelector("#divide")
};

const specialButtons = {
  clear: document.querySelector("#all-clear"),
  backspace: document.querySelector("#backspace"),
  negate: document.querySelector("#negate"),
  decimal: document.querySelector("#decimal"),
  calculate: document.querySelector("#calculate")
};

function getLastCharacter(str) {
  return str.charAt(str.length - 1);
}

function isInputFull(str) {
  return str.length > 18;
}

function tokenizeExpression(expr) {
  const { tokens, current } = [...expr].reduce(
    (acc, char) => {
      if (/\d|\./.test(char)) {
        acc.current += char;
      } else if (/[+\-*/]/.test(char)) {
        if (acc.current !== "") {
          acc.tokens.push(acc.current);
          acc.current = "";
        }
        acc.tokens.push(char);
      }
      return acc;
    },
    { tokens: [], current: "" }
  );
  if (current !== "") tokens.push(current);
  return tokens;
}

function computeResult(tokens) {
  const firstPass = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if ((token === '*' || token === '/') && firstPass.length) {
      const prev = parseFloat(firstPass.pop());
      const next = parseFloat(tokens[++i]);
      const calc = token === '*' ? prev * next : prev / next;
      firstPass.push(calc.toString());
    } else {
      firstPass.push(token);
    }
  }
  let result = parseFloat(firstPass[0] || 0);
  for (let i = 1; i < firstPass.length; i += 2) {
    const op = firstPass[i];
    const num = parseFloat(firstPass[i + 1]);
    if (op === '+') result += num;
    if (op === '-') result -= num;
  }
  return result;
}

function updateInput(value) {
  inputDisplay.textContent = value;
}

function updateResult(value) {
  resultDisplay.textContent = value;
}

function handleNumber(digit) {
  const current = inputDisplay.textContent;
  if (!isInputFull(current)) updateInput(current + digit);
}

function handleOperator(symbol) {
  const current = inputDisplay.textContent;
  if (current && !/[+\-*/]/.test(getLastCharacter(current))) {
    updateInput(current + symbol);
  }
}

function handleSpecial(action) {
  let current = inputDisplay.textContent;
  switch (action) {
    case 'clear':
      updateInput('');
      updateResult('');
      break;
    case 'backspace':
      updateInput(current.slice(0, -1));
      break;
    case 'negate':
      if (current.startsWith('-')) updateInput(current.slice(1));
      else if (current) updateInput('-' + current);
      break;
    case 'decimal':
      const segment = current.split(/[+\-*/]/).pop();
      if (!segment.includes('.')) updateInput(current + '.');
      break;
    case 'calculate':
      if (current) {
        const tokens = tokenizeExpression(current);
        const result = computeResult(tokens);
        updateResult(result);
        updateInput('');
      }
      break;
  }
}

Object.keys(numberButtons).forEach(digit => {
  numberButtons[digit].addEventListener('click', () => handleNumber(digit));
});

Object.keys(operatorButtons).forEach(symbol => {
  operatorButtons[symbol].addEventListener('click', () => handleOperator(symbol));
});

Object.keys(specialButtons).forEach(action => {
  specialButtons[action].addEventListener('click', () => handleSpecial(action));
});