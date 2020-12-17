const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const fistSentences = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas',
];
const secondSentences = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];
const thirdSentences =[
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

function makeStory(stories, options) {
    const storyText = `It was ${options.temperature} outside, so ${stories.first}
went for a walk. When they got to ${stories.second},
 they stared in horror for a few moments, then ${stories.third}.
 ${options.name} saw the whole thing, but was not surprised — ${stories.first}
 weighs ${options.weight}, and it was a hot day.`;

    return storyText;
}

function result() {
    let name, weight, temperature
    if(customName.value !== '') {
        name = customName.value;
    } else name = 'Bob';

    if(!document.getElementById("uk").checked) {
        weight = Math.round(300) + ' pounds';
        temperature =  Math.round(94) + ' fahrenheit';
    } else {
        weight = Math.round(300*0.071429) + ' st';
        temperature =  Math.round((94-32)*5/9) + ' celsius';
    }

    const first = randomValueFromArray(fistSentences);
    const second = randomValueFromArray(secondSentences);
    const third = randomValueFromArray(thirdSentences);

    const newStory = makeStory({first,second,third}, {name, weight,temperature});
    story.textContent = newStory;
    story.style.visibility = 'visible';
}