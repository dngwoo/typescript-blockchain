class Block {
  index: number;
  hash: string;
  previousHash: string;
  data: string;
  timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '202020202020', '', 'Hello', 123456);

const blockchain: [Block] = [genesisBlock];

console.log(blockchain);

blockchain.push('stuff'); // 타입이 Block이 아니기 때문에 에러가 난다.
