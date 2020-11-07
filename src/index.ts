import * as CryptoJS from 'crypto-js'; // ts에서 import 할때 이렇게 함.

class Block {
  index: number;
  hash: string;
  previousHash: string;
  data: string;
  timestamp: number;

  static calculateBlockHash = (
    // Block.caculateBlockHash() 를 쓰기 위해선 static이 필수.
    // 여기에 굳이 메서드 형식으로 넣을 필요는 없는데 수업진행상 넣음. (class 바깥에 해줘도 상관x)
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  };

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

const blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );

  return newBlock;
};
