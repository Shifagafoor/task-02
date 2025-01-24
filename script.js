const input = document.querySelector('.input_two')
const box = document.querySelector('.input_button')
const container = document.querySelector('.output_container')
const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const restart = document.querySelector('.restart_button')


start_btn.addEventListener('click', () => 
  screens[0].classList.add('up'))


box.addEventListener('click', () => {
  let inputValue = input.value;
  console.log(inputValue);

  const result = character(Number(inputValue));
  container.innerHTML = `<h2 class="container_h2">This is The Given Number's Symbol:</h2>
                         <span class="container_span">${result}</span>`;
});

function character(number) {
  const char = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
  const base = char.length;

  for(let i=0; i<= number; i++){
    number -= 1; 
    if (number < 0) return "1"; 

    let result = "";
    while (number >= base) {
      result = char[number % base] + result;
      number = Math.floor(number / base) - 1; 
    }
    result = char[number] + result;

    return result;
  }
}
    lastActiveIndex = -1; 
    animationTimeouts = [];
    restart.addEventListener("click", () => {
      box.disabled = false;

      container.innerHTML = "";
      input.innerHTML ="";
      console.log(restart)
    });