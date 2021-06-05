var text = "Hi, there ...";
var welcomeElement = document.getElementById("welcome-text");

var index = 0;
function displayWelcomeText() {
  welcomeElement.innerText = text.substring(0, index);
  if (index < text.length) {
    index++;
  } else {
    index = 0;
    clearInterval(welcomeFrame);
  }
}

var welcomeFrame = setInterval(displayWelcomeText, 250);
