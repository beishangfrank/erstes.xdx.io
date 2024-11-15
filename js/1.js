function playAudio(audioNumber) {
    var audio = document.getElementById(`audio${audioNumber}`);
    if (audio) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }
}