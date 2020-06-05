// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Change error to hidden

const modal = document.getElementById('modal')
modal.className = "hidden"

document.addEventListener('click', function(e){
  if (e.target.className == "like-glyph"){
    mimicServerCall()
    .then(response => {
      e.target.className = "activated-heart"
      e.target.innerText = FULL_HEART
    })
    .catch(response => {
      modal.className.remove() 
      modal.innerText = response
      setTimeout((e) => {
        modal.className = "hidden"
      }, 5000)
    })
  } else if (e.target.className == "activated-heart") {
    e.target.innerText = EMPTY_HEART
    e.target.className = "like-glyph"
  }
})



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
