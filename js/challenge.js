let counter = 0;
let counterInterval;

function counterIncrements() {
   counter++; 
   document.getElementById('counter').textContent = counter;
} 

counterInterval = setInterval(counterIncrements, 1000);

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

minus.addEventListener('click', function(e) {
    counter--;
    document.getElementById('counter').textContent = counter;
});

plus.addEventListener('click', function(e) {
    counter++;
    document.getElementById('counter').textContent = counter;
});

let heartsObj = {};
let heartButton = document.getElementById('heart');
let likesList = document.querySelector('.likes');

heartButton.addEventListener('click', () => {
    let trackedCounter = counter;
    heartsObj[trackedCounter] = (heartsObj[trackedCounter] || 0) + 1;

    let likesItem = likesList.querySelector(`#likes-${trackedCounter}`);
    
    if (!likesItem) {
        likesItem = document.createElement('li');
        likesItem.id = `likes-${trackedCounter}`;
        likesList.appendChild(likesItem);
    }
    likesItem.textContent = `${trackedCounter}: ${heartsObj[trackedCounter]} likes`;
});

let isPaused = false;
let pauseButton = document.getElementById('pause');
let buttons = document.querySelectorAll('button:not(#pause)');

pauseButton.addEventListener('click', () => {
    isPaused = !isPaused;

    if (isPaused) {
        clearInterval(counterInterval);
        buttons.forEach(button => button.disabled = true); 
        pauseButton.textContent = "Resume";
    } else {
        counterInterval = setInterval(counterIncrements, 1000);
        buttons.forEach(button => button.disabled = false);
        pauseButton.textContent = "Pause"; 
    }
});

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addComment();
});

function addComment() {
    let commentInput = document.getElementById('comment-input');
    let commentList = document.getElementById('list');

    let commentItem = document.createElement('li');
    commentItem.textContent = commentInput.value;
    commentList.appendChild(commentItem);
    commentInput.value = '';
};