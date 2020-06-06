// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

const errorMsg = document.querySelector('#modal')
const heartButtons = document.querySelectorAll('.like-glyph')

errorMsg.className = 'hidden'

function likeCallback(e){
  let heart = e.target;
  mimicServerCall("http://mimicServer.example.com")
  .then(function(serverMessage){
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
  })
  .catch(function(error){
    errorMsg.className = "";
  })
}

for (let glyph of heartButtons) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
