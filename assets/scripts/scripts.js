// Select all elements with the class 'accordian-item'
const items = document.querySelectorAll('.accordian-item');

// Gets through each 'accordian-item' element
items.forEach(item => {
  // selects the question and answer elements from 'accordian-item'
  const question = item.querySelector('.item-qs');
  const answer = item.querySelector('.item-ans');

  // Add a click event listener to each question element
  question.addEventListener('click', () => {
    // Toggle the 'active' class for the clicked question and answer
    question.classList.toggle('active');
    answer.classList.toggle('active');

    // Hide all other answers except the one being clicked
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.item-ans').classList.remove('active');
        otherItem.querySelector('.item-qs').classList.remove('active');
      }
    });
  });
});

// language selection 
document.addEventListener("DOMContentLoaded", function () {
  var customOptions = document.querySelector(".custom-slct");
  var selectElement = document.querySelector(".lang-slct");
  var langIcon = document.querySelector(".language-icon");
  var langCont = document.querySelector(".lang-cont");
  var caretDownIcon = document.querySelector(".fa-caret-down");

  console.log(selectElement);

  document.body.addEventListener("click", function (event) {

    if (
      event.target !== selectElement &&
      event.target !== caretDownIcon &&
      event.target !== langIcon && 
      event.target !== langCont
    ) {
      customOptions.style.display = "none";
    }
  });

  selectElement.addEventListener("click", function () {
    customOptions.style.display = "block";
  });
  caretDownIcon.addEventListener("click", function () {
    customOptions.style.display = "block";
  });

  langIcon.addEventListener("click", function () {
    customOptions.style.display = "block";
    console.log("clicked");
  });

  langCont.addEventListener("click", function () {
    customOptions.style.display = "block";
    console.log("clicked");
  });
  customOptions.addEventListener("click", function () {
    customOptions.style.display = "none";
  });
});



// updates selected language text in the language selection button 
var selectedOutput = document.querySelector(".lang-selected");
var hinLang = document.querySelector(".lang-ops-hin");
var engLang = document.querySelector(".lang-ops-eng");
function updateValue(clickedText) {
  // Get the text content of the clicked button
  var clickedValue = clickedText.textContent;

  // Update the content of the output paragraph tag
  selectedOutput.textContent = clickedValue;
}
hinLang.addEventListener('click', function () {
  updateValue(hinLang);
})

engLang.addEventListener('click', function () {
  updateValue(engLang);
})

