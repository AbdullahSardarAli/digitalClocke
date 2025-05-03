var clock = document.getElementById("clock");
var button = document.getElementById("mode");


function showTime() {
  var now = new Date();
  clock.textContent = now.toLocaleTimeString();
  setTimeout(showTime, 1000);
}

function switchMode() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    button.classList.remove("dark-mode");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    button.classList.add("dark-mode");
  }
}

button.onclick = switchMode; 
document.body.classList.add("light-mode");
showTime();
