function reproducir(cancion) {
  const player = document.getElementById("audioPlayer");
  player.src = cancion;
  player.play();
}
