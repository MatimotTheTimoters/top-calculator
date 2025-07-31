let getLastChar = (str) => {
    let length = str.length;
    return str.at(length - 1);
}
let inputIsFull = (str) => {
    if (str.length <= 18) {
        return false;
    } else {
        return true;
    }
}

let thisNum, nextNum;
let input = document.querySelector(".user-input");
let output = document.querySelector(".operation-output");

let specBtns = {
    allClear: document.querySelector("#all-clear"),
    backSpace: document.querySelector("#backspace"),
    negate: document.querySelector("#negate"),
    decimal: document.querySelector("#decimal"),
    calculate: document.querySelector("#calculate"),
};

specBtns.allClear.addEventListener("click", () => {
    input.textContent = "";
    output.textContent = "";
});
specBtns.backSpace.addEventListener("click", () => {
    input.textContent = input.textContent.slice(0, -1);
});
specBtns.negate.addEventListener("click", () => {
    let firstItem = input.textContent.at(0);
    if (firstItem !== "-") {
        input.textContent = `${"-"}${input.textContent}`;
    } else if (firstItem === "-") {
        input.textContent.slice(1);
    }
});
specBtns.decimal.addEventListener("click", () => {
    let lastItem = input.textContent.at(input.textContent.length - 1);
    if (lastItem !== ".") {
        input.textContent += ".";
    } else if (lastItem === ".") {
        return;
    }
});
specBtns.calculate.addEventListener("click", () => {
    if (input.textContent.length === 0) {
        return;
    }

    output.textContent = Number(input.textContent);
    input.textContent = "";  
});

let opBtns = {
    divide: document.querySelector("#divide"),
    multiply: document.querySelector("#multiply"),
    subtract: document.querySelector("#subtract"),
    add: document.querySelector("#add"),
}

opBtns.divide.addEventListener("click", () => {
    if (getLastChar(input.textContent) !== "/") {
        input.textContent += "/";
    }
});
opBtns.multiply.addEventListener("click", () => {
    if (getLastChar(input.textContent) !== "*") {
        input.textContent += "*";
    }
});
opBtns.subtract.addEventListener("click", () => {
    if (getLastChar(input.textContent) !== "-") {
        input.textContent += "-";
    }
});
opBtns.add.addEventListener("click", () => {
    if (getLastChar(input.textContent) !== "+") {
        input.textContent += "+";
    }
})

let numBtns = {
    zero: document.querySelector("#zero"),
    one: document.querySelector("#one"),
    two: document.querySelector("#two"),
    three: document.querySelector("#three"),
    four: document.querySelector("#four"),
    five: document.querySelector("#five"),
    six: document.querySelector("#six"),
    seven: document.querySelector("#seven"),
    eight: document.querySelector("#eight"),
    nine: document.querySelector("#nine"),
}

numBtns.zero.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        if(input.textContent.length === 0) {
            output.textContent += "0";
            thisNum = 0;
        } else {
            input.textContent += "0";
            nextNum = 0;
        }
    }
});
numBtns.one.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        input.textContent += "1";
    }
});
numBtns.two.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        input.textContent += "2";
    }
});
numBtns.three.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        input.textContent += "3";
    }
});
numBtns.four.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        input.textContent += "4";
    }
});
numBtns.five.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        input.textContent += "5";
    }
});
numBtns.six.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        input.textContent += "6";
    }
});
numBtns.seven.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        input.textContent += "7";
    }
});
numBtns.eight.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {
        input.textContent += "8";
    }
});
numBtns.nine.addEventListener("click", () => {
    if (!(inputIsFull(input.textContent))) {    
        input.textContent += "9";
    }
});