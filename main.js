// Questions array
const questions = [

  ];

  // get DOM elements
  const questionList = document.getElementById('question-list') 
  const calculateButton = document.getElementById('calculate') 
  const resetButton = document.getElementById("reset")
  const scoreElement = document.getElementById("score")
  const testSection = document.getElementById("test-section")
  const resultSection = document.getElementById("result-section")

  // generate the list of questions with checkboxes
  function generateQuestions() {
    questionList.innerHTML = "";

    questionList.forEach((question, index) => {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `q${index+1}`;
        checkbox.name = `q${index+1}`;

        const label = document.createElement('label');
        label.htmlFor = `q${index+1}`;  //for attribute connects the <label> to a form input by id
        label.textContent = question;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        questionList.appendChild(listItem);
    });
  }

  // calculate purity score
  function calculateScore() {
    const checkboxes = questionList.querySelectorAll('input[type="checkbox"]');
    let checkCount =  0;

    checkboxes.forEach(checkbox =>{
      if (checkbox instanceof HTMLInputElement && checkbox.checked) {
        checkCount++;
      }
    });

    const purityScore = 100 - checkCount;

    // display result
    scoreElement.textContent = purityScore.toString();
    testSection.style.display = 'none';
    resultSection.style.display = 'block';
  }

  // reset checkboxes
  function resetCheckboxes() {
    const checkboxes = questionList.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      checkbox.checked == false;
    });
  }

  //event listener
  calculateButton.addEventListener('click', calculateScore);
  resetButton.addEventListener('click', resetCheckboxes);

  //initialize question list when page loads
  generateQuestions();