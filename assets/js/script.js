// elements
const btnPlay = document.querySelector('.btn-play');
const grid = document.querySelector('.ad_grid');
const message = document.querySelector('.message');
const difficultyOption = document.getElementById('mode');

const nBombs = 16;
let nGrid;
let arrayBombs;
let bombIndex;
let counter = 0;
let winCondition;
let bombfield;


// reset base
reset();

// al click inizializzo la funzione init che comprende reset e print della griglia
btnPlay.addEventListener('click', init)


//////////// FUNCTIONS ////////////

function generateSquares (index, bIndex) {

  // creazione quadrati
  const sq = document.createElement('div');
  sq.className = 'ad_square';
  grid.append(sq);
  
  // controllo misura quadrati
  if (nGrid === 49) {
    
    sq.classList.add('hard')
    
  } else if (nGrid === 81) {
    
    sq.classList.add('medium')
    
  }

  /*
  //CHEATS - DEBUG//
  if (bIndex.includes(index)) {
    sq.classList.add('bomb-cheats')
  }
  */
  
  // al click del singolo quadrato
  sq.addEventListener('click', function(){

    // controllo se è una bomba
    if (bIndex.includes(index)) {
      for (let i = 0; i < arrayBombs.length; i++) {
        document.getElementsByClassName('ad_square')[arrayBombs[i] - 1].classList.add('bomb');
      }
      winCondition = false;
      endGame(winCondition);
    }
    
    // se non è clicked e bomba contemporaneamente aumento il counter e aggiungo la classe clicked
    if (!this.classList.contains('clicked') && !this.classList.contains('bomb')) {
      this.classList.add('clicked');
      counter++;
      console.log(index, counter);
    }

    if (counter === nGrid - arrayBombs.length) {
      winCondition = true;
      endGame(winCondition);
    }
    
  })
  
}

function init () {
  
  reset();
  nGrid = difficultyGrid();
  bombRandomizer();

  //stampa quadrati
  for (let i = 1; i <= nGrid; i++) {
    generateSquares(i, arrayBombs);
  }

}

function reset () {
  grid.innerHTML = '';
  message.innerHTML = '';
  counter = 0;
}

function difficultyGrid () {

  if (difficultyOption.value === 'hard') {

    return 49;
    
  } else if (difficultyOption.value === 'medium') {
    
    return 81; 

  } else {

    return 100;

  }
}

function bombRandomizer () {

  arrayBombs = [];
  
  do {
    
    const randomNumber = Math.ceil(Math.random() * nGrid);
    if (!arrayBombs.includes(randomNumber)) { 
      arrayBombs.push(randomNumber)
    }
    
  } while (arrayBombs.length !== nBombs);
  
  console.log(arrayBombs);

  return arrayBombs;
}

function endGame (cond) {
  const blockScreen = document.createElement('div');
  blockScreen.className = 'ad_block';
  grid.append(blockScreen);

  if (cond) {
    message.innerHTML = `Hai Vinto! Punteggio: ${counter} su ${nGrid - nBombs}`;
  } else {
    message.innerHTML = `Hai Perso :( Punteggio: ${counter} su ${nGrid - nBombs}`;
  }
  
}