const video = document.getElementById("video");

// Control panel
const play = document.getElementById("play-video");
const progress = document.getElementById("progress-bar");

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

window.addEventListener("load", setProgressBarAttributes);

function setProgressBarAttributes() {
  const duration = video.duration;
  progress.setAttribute("max", duration);
}
