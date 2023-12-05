let [seconds, minutes, hours] = [0, 0, 0];
let displayTimeEl = document.getElementById("displayTime");
let timer = null;

var typed = new Typed(".auto-type",{
  strings:["my first auto typing","stop watch"],
  typeSpeed:150,
  backSpeed:150,
  looped: true,
});

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    if (hours == 24) {
      hours = 0;

    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTimeEl.innerHTML = h + ":" + m + ":" + s;
}

function startwatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function holdwatch() {
    clearInterval(timer);

}

function resetWatch(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTimeEl.innerHTML = "00:00:00";
} 

