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
  putCash: function (value) {
    this.balance += value;
    this.isEmpty = false;
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

backpack.pocketNum = 19;
console.log(backpack['strapLength']);
