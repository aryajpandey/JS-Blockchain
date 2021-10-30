const { Block, Blockchain } = require("./blockchain.js");

const Aries = new Blockchain();
// Add a new block
Aries.addBlock(new Block(Date.now().toString(), { from: "Edward", to: "Toni", amount: 100 }));

// Prints out the updated chain
console.log(Aries.chain); 