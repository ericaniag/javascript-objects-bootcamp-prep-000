var playlist = { Beyonce : 'Countdown' };

function updatePlaylist(playlist, artistName, songTitle) {
  console.log(playlist.artistName = 'songTitle');
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}