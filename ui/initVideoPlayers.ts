function initVideoPlayers() {
  const players = document.querySelectorAll(".player");
  players.forEach((player) => {
    const video = player.querySelector("video");
    let isPlaying = false;
    player.addEventListener("click", () => {
      isPlaying = !isPlaying;

      if (isPlaying) {
        player.classList.add("playing");
        video.play();
      } else {
        if (player.classList.contains("playing")) {
          player.classList.remove("playing");
          video.pause();
        }
      }
    });
  });
}

export default initVideoPlayers;
