let phrases = [
    { text: 'Написать Алексею "Привет"', image: '123.gif' },
    { text: 'Погулять с Алексеем', image: '123.gif' },
    { text: 'Подарить Алексею подарок', image: '123.gif' },
    { text: 'Посмотреть кино с Алексеем', image: '123.gif' },
    { text: 'Поехать отдыхать с Алексеем', image: '123.gif' },
    { text: 'Помечтать с Алексеем', image: '123.gif' },
    { text: 'Влюбиться в Алексея', image: '123.gif' },
    { text: 'Посмотреть на звезды с Алексеем', image: '123.gif' },
    { text: 'Послушать музыку с Алексеем', image: '123.gif' },
    { text: 'Путешествовать по миру с Алексеем', image: '123.gif' }
  ];
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
    for(let i = 0; i <= 2; i = i + 1){
      smoothly(phrase, 'textContent', phrases[i].text)
      smoothly(image, 'src', phrases[i].image)
    }