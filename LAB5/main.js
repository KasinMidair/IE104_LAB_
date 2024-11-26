const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

// 23520509
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 23520509
const storyText = `It was 94 fahrenheit outside, so :insertx: went for a 
walk. When they got to :inserty:, they stared in horror for a few moments
, then :insertz:.Bob saw the whole thing, but was not surprised — :insertx: 
weighs 300 pounds, and it was a hot day.`;

// 23520509
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];


// 23520509
randomize.addEventListener("click", result);

function result() {
  // 23520509
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // 23520509
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  // 23520509
  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  // 23520509
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429) + " stone";
    const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  // 23520509
  story.textContent = newStory;
  story.style.visibility = "visible";
}
