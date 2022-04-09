let incompleteArray = [];
let completeArray = [];

let incompleteItemNumber = incompleteArray.length;
let completeItemNumber = completeArray.length;

const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");

const changeTheme = (text) => {
  console.log(document.body.style);
  if(text === "white") {
    document.body.style.color = "black";
    document.body.style.background = "white";
  } else if (text === "black") {
    document.body.style.color = "white";
    document.body.style.background = "linear-gradient(to top, #000000 0%, #141419 100%)";
  }
};

btnLight.addEventListener("click", (event) => {
  changeTheme("white");
});
btnDark.addEventListener("click", (event) => {
  changeTheme("black");
});


console.log(incompleteItemNumber);
console.log(completeItemNumber);
let resultString = `${incompleteItemNumber} incomplete, ${completeItemNumber} completed`;

const completedItem = document.querySelector(".completed");
// completedItem.textContent = resultString;

const changeCompleteText = () => {
  let incompleteItemNumber = incompleteArray.length;
  let completeItemNumber = completeArray.length;
  let resultString = `${incompleteItemNumber} incomplete, ${completeItemNumber} completed`;
  completedItem.textContent = resultString;
};

changeCompleteText();


// Get Time

const dateElement = document.querySelector(".date-time");
let today = new Date();
let monthName = today.toLocaleString("en-us", {month: "long"});
let monthNumber = today.getMonth();
let yearNumber = today.getFullYear();
let result = `${monthName} ${monthNumber}, ${yearNumber}`;
dateElement.textContent = result;

// Modal

const todoButton = document.querySelector(".add-todo");
const modalBackground = document.querySelector(".modal-background");
const modalButton = document.querySelector(".modal-bottom");
const submitButton = document.querySelector(".submit-todo");

todoButton.addEventListener("click", (event) => {
  modalBackground.classList.toggle("show");
  modalButton.classList.toggle("show-modal");
});

modalBackground.addEventListener("click", (event) => {
  modalBackground.classList.toggle("show");
  modalButton.classList.toggle("show-modal");
});

submitButton.addEventListener("click", (event) => {
  modalBackground.classList.toggle("show");
  modalButton.classList.toggle("show-modal");
});

// Arrays

const incompleteWrapper = document.querySelector(".incomplete-wrapper");
const completeWrapper = document.querySelector(".complete-wrapper");

const changeList = () => {
  incompleteArray.forEach((item) => {
    incompleteWrapper.appendChild(item);
  });
};

const changeCompleteList = () => {
  completeArray.forEach((item) => {
    completeWrapper.appendChild(item);
  });
}; 



const makeIncompleteItem = (text) => {
  const _IncDiv = document.createElement("div");
  _IncDiv.classList.add("incomplete-item");
  const _label = document.createElement("label");
  const _input = document.createElement("input");
  _input.classList.add("filled-in");
  _input.setAttribute("type", "checkbox");
  // _input.setAttribute("checked", "checked");
  const _span = document.createElement("span");
  _span.textContent = text;
  _label.appendChild(_input);
  _label.appendChild(_span);
  _IncDiv.appendChild(_label);
  _input.addEventListener("click", (event) => {
    let isChecked = event.target.checked;
    if(isChecked) {
      completeArray.push(_IncDiv);
      incompleteArray = incompleteArray.filter((item) => item !== _IncDiv);
      changeList();
      changeCompleteList();
      changeCompleteText();
    } else {
      incompleteArray.push(_IncDiv);
      completeArray = completeArray.filter((item) => item !== _IncDiv);
      changeList();
      changeCompleteList();
      changeCompleteText();
    }
    
  });
  return _IncDiv;
};



// Get Input Text

const inputElementAdd = document.querySelector(".add-todo-wrapper-text");
submitButton.addEventListener("click", (event) => {
  const inputText = inputElementAdd.value;
  if(inputText) {
    const incompleteItem = makeIncompleteItem(inputText);
    console.log(incompleteItem);
    incompleteArray.push(incompleteItem);
    changeList();
    changeCompleteText();
  }
});