export interface WalletContents {
    suiBalance: number,
    tokens: {[key: string]: any},
    nfts: any[]
  }