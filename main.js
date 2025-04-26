// Questions array
const questions = [
  'Pulled an all-nighter during finals',
  'Attended a class hungover',
  'Missed class because of hungover',
  'Gone to practice hungover',
  "Sneaked into a class you weren't enrolled in",
  'Drawn on the wall inside the tunnel between KB and Larrabee',
  'Slid down the AC in the snow',
  'Gone swimming in the Thames River',
  'Gone skinny dippinf in the Thames River',
  'Gone swimming in arboretum',
  'Gone skinny dipping in arboretum',
  'Stayed out until sunrise on Temple Green',
  "Had a sleepover in friend's room",
  'Got a haircut or hair dye in a dorm bathroom',
  'Gone on a date at Coffee Grounds or Blue Camel',
  'Gone stargazing on campus with your date',
  'Matched with a Conn student on Tinder/Bumble',
  'Flirted with someone over YikYak DM or another weird campus platform (like Moodle Message)',
  'Flirted with someone to get homework answers',
  'Taken dinnerware from the dining hall',
  'Set off a fire alarm (accidentally or not)',
  'Climbed on the roof of a dorm',
  'Participated in a campus protest or rally',
  'Hosted parties or pregames in your room beyond guest limits',
  'Walked a stranger home at night',
  'Had a crush on your Student Advisor',
  'Had a crush on your Professor',
  'Had a campus crush you never spoke to in real life',
  'Dated someone at least 2 class years above you',
  'Dated someone at least 2 class years below you',
  'Written someone a love letter or note (not a text!) at Conn',
  'Rode a campus golf cart',
  'Hidden in Shain Library until after it closed',
  'Sneaked into the Arboretum at night',
  'Sneaked alcohol into Floralia while underage',
  'Had a fake ID',
  'Urinated in public on campus',
  'Gossiped about someone on YikYak',
  'Used ChatGPT to do your entire homework',
  'Slept in a classroom overnight',
  'Slept in a common room overnight',
  'Slept through an exam',
  'Gone on a date with someone from Coast Guard',
  'Kept a pet in your dorm illegally',
  'Skipped more than 50% of a class in a semester',
  "Made out in a locker room in AC",
  'Had sex in a locker room in AC',
  'Made out in the pool in AC',
  'Had sex in the pool in AC',
  "Flirted with someone from another school's sport team at a game",
  'Kicked out a roommate for sexual activity',
  'Had sex in a common room',
  'Had sex in a classroom or academic building after hours',
  'Had sex outdoors somewhere on campus',
  'Had sex with someone from another school visiting campus',
  'Kissed someone at an all-campus event (Floralia, Harvestfest, etc)',
  'Kissed someone you just met at a Conn party',
  'Kissed multiple people at the same party',
  'Played "truth or dare" and dared someone to kiss you (or vice versa)',
  'Had a secret relationship that few people knew about',
  "Parked illegally in a faculty/staff spot and didn't get caught",
  "Collected multiple parking tickets before registering the car",
  "Blacked out at a dorm party",
  "Taken a shot in Shain or an academic building",
  'Had a dayger',
  "Hidden alcohol in a water bottle or coffee cup to sneak into a campus event",
  'Had to be physically carried back to your dorm after a night out',
  'Made up a fake identity while drunk talking to strangers at Conn',
  "Jaywalked after a Ridge/Winch/Abbey party",
  'Smoked marijuana on campus',
  'Smoked hookah on campus',
  "Smoked inside the Chapel",
  'Hotboxed a dorm room (and maybe set off the fire alarm)',
  'Got caught by Campo for smoking',
  'Got high before attending class',
  'Run from Campo',
  'Tried to prank call Campo',
  'Had a party shut down by Campo',
  'Stolen a furniture item from public use (common room, classroom, Shain, etc.)',
  'Sneaked someone into a single-gender bathroom',
  "Stolen someone else's laundry out of a dryer (accidentally or not)",
  'Got noise complaint from your neighbor',
  'Taken a bathroom break during a self-schedule exam to Google an answer',
  'Taken a self-schedule exam for someone else',
  'Taken a take-home exam in a full group chat helping each other',
  "Stolen someone else's Doordash/UberEats order",
  'Played a giant game of tag or manhunt across campus at night',
  'Played hide and seek in your dorm at night',
  'Played strip poker (or strip any game) in a dorm room',
  'Made up fake traditions to mess with first-years (like "Midnight Howl on Tempel Green")',
  'Streaked across Temple Green',
  'Made a bet on a Conn sport game',
  ];

console.log(questions.length);

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

  questions.forEach((question, index) => {
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
    checkbox.checked = false;
  });
}

//event listener
calculateButton.addEventListener('click', calculateScore);
resetButton.addEventListener('click', resetCheckboxes);

//initialize question list when page loads
generateQuestions();
