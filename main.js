// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {

  const errorModal = document.querySelector("#modal")

  function hideErrorModal() {
    errorModal.className = "hidden"
  }

  function activateHeart(heart){
    heart.textContent = FULL_HEART
    heart.classList.add("activated-heart")
  }

  function deactivateHeart(heart) {
    heart.textContent = EMPTY_HEART
    heart.classList.remove("activated-heart")
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("activated-heart")) {
      deactivateHeart(e.target)
    }
    else if (e.target.className === "like-glyph") {
      mimicServerCall()
      .then(activateHeart(e.target))
      .catch(error => {
        errorModal.classList.remove("hidden")
        errorModal.innerText = error
        setTimeout(hideErrorModal, 5000)
      })

    }

  })

  hideErrorModal()

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
