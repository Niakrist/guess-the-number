const config= { 
  life: '.life',
  number: '.number',
  sub: '.sub',
  result: '.result',
}

;(function({life, number, sub, result}) {

  const l = document.querySelector(life);
  const n = document.querySelector(number);
  const s = document.querySelector(sub);
  const res = document.querySelector(result);
  let random = Math.floor(Math.random() * 10);
  
  s.addEventListener('click', function() {

    console.log(random)
   

      if (n.value.length < 1) {
        res.textContent = 'Введите число';
        n.classList.add('red-border');
      } else {
        n.classList.remove('red-border');
        l.textContent = Number(l.textContent) - 1;

        if (random > Number(n.value)) {
          res.textContent = 'Загаданное число больше вашего';
        } else if (random < Number(n.value)) {
          res.textContent = 'Загаданное число меньше вашего';
        } else {
          res.textContent = 'Вы угадали';
          const btn = document.createElement('input');
          btn.type = 'submit'
          btn.value = 'Начать заново';
          s.insertAdjacentElement('afterend', btn)
          s.disabled = true;

          btn.addEventListener('click', function() {
            random = Math.floor(Math.random() * 10);            
            n.value = ''
            l.textContent = 3;
            btn.remove();
            res.textContent = '';
            s.disabled = false;
          })
        }


        if (Number(l.textContent) === 0) {
          res.textContent = 'Вы проиграли';
          const btn = document.createElement('input');
          btn.type = 'submit'
          btn.value = 'Начать заново';
          s.insertAdjacentElement('afterend', btn);
          s.disabled = true;

          btn.addEventListener('click', function() {
            random = Math.floor(Math.random() * 10);            
            l.textContent = 3;
            btn.remove();
            s.disabled = false;
            n.value = '';
          })

        }

      }

      n.value = '';

    })


})(config);

