onst updateBackpack = (modify) => {
  return !modify;
};

const backpack = {
  name: 'Everyday Backpack',
  volume: 30,
  color: 'grey',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

var wallet = {
  name: 'Lots of dollars',
  volume: 13,
  color: 'black',
  isEmpty: true,
  balance: 0,
  putCash: (value) => {
    wallet.balance += value;
    wallet.isEmpty = false;
    console.info('We got money');
  },
};

let scissor = {
  type: 'Kitchen',
  size: 5,
};

pen = {
  color: 'blue',
};

//javascript allows us to modify object properties
//even if they are constants
backpack.pocketNum = 19;

//sometimes we will face a case in which the object propertie won't be defined by us
// so to access it we can use bracket notation
const query = 'strapLength';

//this should print 26 on terminal
console.log(
  'Backpack pocket number bracket notation:',
  backpack['strapLength']['left']
);

//this should also print 26
console.log(
  'Backpack pocket number bracket notation:',
  backpack.strapLength.left
);

//can I go crazy and mix both? Run it and check it out
console.log(
  'Backpack pocket number bracket notation:',
  backpack['strapLength'].left
);

backpack.novo = 32;

console.log('Novo:', backpack);

wallet.putCash(12);
console.log(wallet.balance);