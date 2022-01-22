const Block = require('./block');

const mineBlock = Block.mineBlock(Block.genesis(), '$500');

console.log(mineBlock.toString());