const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  })

  it('starts with genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it('adds a new block', () => {
    const data = 'arquivo.pdf';
    blockchain.addBlock(data);

    let lastBlockIndex = blockchain.chain.length - 1;

    expect(blockchain.chain[lastBlockIndex].data).toEqual(data);
  });
})