// elements
const btnPlay = document.querySelector('.btn-play');
const grid = document.querySelector('.ad_grid');
const difficultyOption = document.getElementById('mode');

let nGrid;

// reset base
reset();

// al click inizializzo la funzione init che comprende reset e print della griglia
btnPlay.addEventListener('click', init)


//////////// FUNCTIONS ////////////

function generateSquares (index) {
  const sq = document.createElement('div');
  sq.className = 'ad_square';
  grid.append(sq);
  
  // controllo misura quadrati
  if (nGrid === 49) {
    
    sq.classList.add('hard')
    
  } else if (nGrid === 81) {
        
      sq.classList.add('medium')

  }
  
  // al click del singolo quadrato
  sq.addEventListener('click', function(){
    
    if (!this.classList.contains('clicked')) {
      this.classList.add('clicked');
      console.log(index); // stessa cosa per il counter ////////////////////
    }
    
  })
  
}

function init () {
  
  reset();
  nGrid = difficultyGrid();
  bombRandomizer();
  for (let i = 1; i <= nGrid; i++) {
    generateSquares(i);
  }

}

function reset () {
  grid.innerHTML = '';
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

  let arrayBombs = [];
  const nBombs = 16;
  
  do {
    
    const randomNumber = Math.ceil(Math.random() * nGrid);
    if (!arrayBombs.includes(randomNumber)) { 
      arrayBombs.push(randomNumber)
    }
    
  } while (arrayBombs.length !== nBombs);
  
  console.log(arrayBombs);

  return arrayBombs;

}