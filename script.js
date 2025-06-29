const $days = document.getElementById('days'),
      $hours = document.getElementById('hours'),
      $minutes = document.getElementById('minutes'),
      $seconds = document.getElementById('seconds'),
      $finalMessage = document.querySelector('.final-sms');

// Obtener la fecha del próximo 1 de enero
const now = new Date();
const nextYear = now.getMonth() === 0 && now.getDate() === 1
  ? now.getFullYear()
  : now.getFullYear() + 1;
const countdownDate = new Date(`01/01/${nextYear} 00:00:00`).getTime();

let interval = setInterval(function() {
    const currentTime = new Date().getTime();
    let distance = countdownDate - currentTime;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    if (distance < 0) {
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);

