const frame = document.querySelector('section');
const list = frame.querySelectorAll('article');
const listLength = list.length;
const deg = 360/listLength;

// panel 각도 회전
for(let i = 0; i < listLength; i++){
  list[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
}