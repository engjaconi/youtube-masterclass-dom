// get all keys
const keys = document.querySelectorAll(".key");
// get all audios
const audios = document.querySelectorAll('.audios');

window.addEventListener('load', registerEvents);

function registerEvents() {
    // click with mouse
    keys.forEach(key => {
        key.addEventListener('click', playNotes);
        key.addEventListener('transitionend', removePlayingClass)

    });
    // keyboard type
    window.addEventListener("keydown", playNotes);
}

function playNotes(event) {
    
    let audioKeyCode = getKeyCode(event);
    
    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

    // if key exists 
    const isKeyExists = key;

    if(!isKeyExists) {
        return;
    }
    
    playAudio(audioKeyCode);
    addPlayingClass(key);
};

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown";
    if(isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }
    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currenttime = 0;
    audio.play();
}

function addPlayingClass(key) {
    key.classList.add('playing');
}

function removePlayingClass(event) {
    event.target.classList.remove('playing');
}