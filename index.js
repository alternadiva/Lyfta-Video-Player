const video = document.getElementById("video");

// Control panel
const play = document.getElementById("play-video");
const progress = document.getElementById("progress-bar");
const progressCounter = document.getElementById("progress-counter");

/* Toggle play and pause */

play.addEventListener("click", playPauseVideo);

function playPauseVideo() {
  const pauseIcon = document.getElementById("pause-icon");
  const playIcon = document.getElementById("play-icon");

  if (video.paused) {
    video.play();
    pauseIcon.removeAttribute("hidden", "");
    playIcon.setAttribute("hidden", "");
  } else {
    video.pause();
    pauseIcon.setAttribute("hidden", "");
    playIcon.removeAttribute("hidden", "");
  }
}

/* Update progress bar */

function setProgressBarAttributes() {
  const duration = video.duration;
  progress.setAttribute("max", duration);

  const displayDuration = new Date(Math.floor(duration) * 1000)
    .toISOString()
    .slice(14, 19);
  progressCounter.innerText = displayDuration;
  console.log(displayDuration);
}

window.addEventListener("load", setProgressBarAttributes);

function updateElapsedTime() {
  progress.setAttribute("value", video.currentTime);
  progressCounter.innerText = new Date(Math.floor(video.currentTime) * 1000)
    .toISOString()
    .slice(14, 19);
}

video.addEventListener("timeupdate", updateElapsedTime);
