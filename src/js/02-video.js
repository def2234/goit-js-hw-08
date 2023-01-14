import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(currentTmeupdate, 1000));

resetPage();

function currentTmeupdate(currentTime) {
  const time = currentTime;
  const saveTmeupdate = JSON.stringify(time);
  localStorage.setItem('videoplayer-current-time', saveTmeupdate);
}

function resetPage() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  const savedSecond = JSON.parse(savedTime);
  console.log(savedSecond);
  if (savedSecond) {
    player.setCurrentTime(savedSecond.seconds);
  }
}
