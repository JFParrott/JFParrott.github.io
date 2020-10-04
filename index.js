window.onload = function () {
  animateSequence();
  animateRandom();
};

function animateSequence() {
  let a = document.getElementsByClassName('sequence');
  for (let i = 0; i < a.length; i++) {
    let $this = a[i];
    let letter = $this.innerHTML;
    letter = letter.trim();
    let str = '';
    let delay = 100;
    for (l = 0; l < letter.length; l++) {
      if (letter[l] != ' ') {
        str +=
          '<span style="animation-delay:' +
          delay +
          'ms; -moz-animation-delay:' +
          delay +
          'ms; -webkit-animation-delay:' +
          delay +
          'ms; ">' +
          letter[l] +
          '</span>';
        delay += 150;
      } else str += letter[l];
    }
    $this.innerHTML = str;
  }
}

function animateRandom() {
  let a = document.getElementsByClassName('random');
  for (let i = 0; i < a.length; i++) {
    let $this = a[i];
    let letter = $this.innerHTML;
    letter = letter.trim();
    let delay = 70;
    let delayArray = new Array();
    let randLetter = new Array();
    for (j = 0; j < letter.length; j++) {
      while (1) {
        let random = getRandomInt(0, letter.length - 1);
        if (delayArray.indexOf(random) == -1) break;
      }
      delayArray[j] = random;
    }
    for (l = 0; l < delayArray.length; l++) {
      let str = '';
      let index = delayArray[l];
      if (letter[index] != ' ') {
        str =
          '<span style="animation-delay:' +
          delay +
          'ms; -moz-animation-delay:' +
          delay +
          'ms; -webkit-animation-delay:' +
          delay +
          'ms; ">' +
          letter[index] +
          '</span>';
        randLetter[index] = str;
      } else randLetter[index] = letter[index];
      delay += 80;
    }
    randLetter = randLetter.join('');
    $this.innerHTML = randLetter;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
