const player = document.querySelector(".player");
const video = player.querySelector(".player__video");
const loader = player.querySelector(".player__loader");
const duration = player.querySelector(".player__times--duration");
const currentTime = player.querySelector(".player__times--current");
const toggleBtn = player.querySelector(".player__toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const progressBar = player.querySelector(".player__progress");
const rangeInputs = player.querySelectorAll(".player__range-input");

// Do stuff when video is ready
function init() {
  updateStates();
  player.removeChild(loader);
  duration.textContent = formatTime(video.duration);
}

function formatTime(seconds) {
  return new Date(1000 * seconds).toISOString().substr(11, 8);
}

function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

function updateStates() {
  if (video.paused) {
    toggleBtn.classList.add("is-paused");
    toggleBtn.setAttribute("title", "Play");
    player.classList.add("is-paused");
  } else {
    toggleBtn.classList.remove("is-paused");
    toggleBtn.setAttribute("title", "Pause");
    player.classList.remove("is-paused");
  }
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  currentTime.textContent = formatTime(video.currentTime);
  progressBar.style.setProperty("--progressbar-value", `${percent}%`);
}

function handleSkiping() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeInputs() {
  video[this.name] = this.value;
}

video.addEventListener("loadeddata", init);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateStates);
video.addEventListener("pause", updateStates);
video.addEventListener("timeupdate", handleProgress);

toggleBtn.addEventListener("click", togglePlay);
skipBtns.forEach((skipBtn) => skipBtn.addEventListener("click", handleSkiping));
rangeInputs.forEach((rangeInput) =>
  rangeInput.addEventListener("change", handleRangeInputs)
);

let mouseDown = false;
progressBar.addEventListener("click", scrub);
progressBar.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progressBar.addEventListener("mousedown", () => (mouseDown = true));
progressBar.addEventListener("mouseup", () => (mouseDown = false));
