const videos = document.querySelectorAll('.video-item video');

videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play().then(() => {
                video.requestFullscreen();
            });
        } else {
            video.pause();
            document.exitFullscreen();
        }
    });

    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
    });
});

    var audio = document.getElementById("myAudio");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio2");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio3");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio4");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio5");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio6");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio7");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio8");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio9");
    audio.volume = 0.1; // Set volume to 40%
    var audio = document.getElementById("myAudio10");
    audio.volume = 0.1; // Set volume to 40%
