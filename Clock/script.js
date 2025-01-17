function analogClock(hours,minutes,seconds){
  const rotateSeconds = (seconds / 60) * 360 + 90; // 90 offset for initial position
  const rotateMinutes = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const rotateHours = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  document.querySelector(".seconds-hand").style.transform = `rotate(${rotateSeconds}deg)`;
  document.querySelector(".minutes-hand").style.transform = `rotate(${rotateMinutes}deg)`;
  document.querySelector(".hours-hand").style.transform = `rotate(${rotateHours}deg)`;
}
function digitalClock(Now,hours,minutes,seconds){
  
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const newHours = hours % 12 || 12;

  const time = `${newHours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} ${amPm}`;

  const date = Now.toLocaleDateString('en-IN', {day : '2-digit', month : 'short', year :'numeric'});
  const day = Now.toLocaleDateString('en-IN', {weekday : 'short'});
  document.querySelector('.time').textContent = time;
  document.querySelector('.date').textContent = `${day}, ${date}`;
}

function clockSet() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  analogClock(hours,minutes,seconds);
  digitalClock(date,hours,minutes,seconds);
  
}

(function () {
  const clockNumbers = ['Nothing','','','3','','','6','','','9','','','12']; //[i : 1-12]
  const allNumber = document.querySelector(".allNumber");

  for (let i = 1; i <= 12; i++) {
    const number = document.createElement("div");
    number.classList.add("number");
    number.textContent = clockNumbers[i];

    const angle = (i - 3) * 30;
    const radius = allNumber.offsetWidth / 2 - 15;
    
    
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);


    number.style.left = `${x-10}px`;
    number.style.top = `${y-10}px`;

    allNumber.appendChild(number);
  }
})();

clockSet();
setInterval(clockSet, 1000);  
