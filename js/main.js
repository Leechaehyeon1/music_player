const frame = document.querySelector('section');
const list = frame.querySelectorAll('article');
const listLength = list.length;
const deg = 360/listLength;
const prevBtn = document.querySelector('.btn_prev');
const nextBtn = document.querySelector('.btn_next');
let num = 0;
let active = 0;

// panel 각도 회전
for(let i = 0; i < listLength; i++){
  list[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
}

for(let elem of list) {
  let play = elem.querySelector('.play');
  let pause = elem.querySelector('.pause');
  let load = elem.querySelector('.load');

  play.addEventListener('click', (e) => {
    e.currentTarget.closest('article').querySelector('.pic').classList.add('on')
  });
  pause.addEventListener('click', (e) => {
    e.currentTarget.closest('article').querySelector('.pic').classList.remove('on')
  });
}

const activation = () => {
  for(let elem of list){
    elem.classList.remove('on');
  }
  list[active].classList.add('on');
}

const prevList = () => {

}
const nextList = () => {
  if(num > listLength - 1){
    num = 0;
  }
}


// btns event
prevBtn.addEventListener('click', () => {
  frame.style.transform = `rotate(${deg * ++num}deg)`;

  (active === 0) ? active = listLength - 1 : active--;
  
  activation();
});

nextBtn.addEventListener('click', () => {
  frame.style.transform = `rotate(${deg * --num}deg)`;

  (active === listLength - 1) ? active = 0 : active++;

  activation();
});