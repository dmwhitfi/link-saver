//how to reverse an erray

const sentence = ['sense.','make', 'all', 'will', 'This'];

const reverseSentences = arr => {
    let reversed = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
};

console.log(reverseSentences(sentence));


const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
    console.log('Oh powerful ' + arr[i] +  ', we humans offer our unconditional surrender!');
        }
}
greetAliens(aliens)


const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
          console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
    }
}







const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');

}


const declineEverything = arr => {
    arr.forEach(politelyDecline)
  }
  
  /*
  // As a function declaration:
  function declineEverything(arr) {
        arr.forEach(politelyDecline)
  }
  */
  
  
  // Checkpoint 2 solutions:
  // Using an anonymous function and string interpolation:
  const acceptEverything = arr => {
    arr.forEach(e => {
      console.log(`Ok, I guess I will eat some ${e}.`);
    })
}

