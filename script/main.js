

function Card(cardName, description, cardOwner){
    this.cardName = cardName;
    this.description = description;
    this.cardOwner = cardOwner;

  
}

 let card1 = new Card("task 1 ", "the fist task you can do ", "owner: Julian");
 let card1read = JSON.stringify(card1, null, 4);
 console.log(card1read);