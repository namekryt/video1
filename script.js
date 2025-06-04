const mediaBox = document.getElementById('mediaBox');
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const fullscreenContent = document.getElementById('fullscreenContent');
const closeBtn = document.getElementById('closeBtn');
const mediaElement = document.getElementById('mediaElement');

mediaBox.addEventListener('click', () => {
  fullscreenContent.innerHTML = ''; // очистить содержимое

  if (mediaElement.tagName === 'VIDEO') {
    const video = document.createElement('video');
    video.src = mediaElement.src;
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = '90vw';
    video.style.maxHeight = '90vh';
    fullscreenContent.appendChild(video);
  } else if (mediaElement.tagName === 'IMG') {
    const img = document.createElement('img');
    img.src = mediaElement.src;
    img.alt = mediaElement.alt || '';
    fullscreenContent.appendChild(img);
  }

  fullscreenOverlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  fullscreenOverlay.classList.add('hidden');
  // Остановить видео, если есть
  const video = fullscreenContent.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
});