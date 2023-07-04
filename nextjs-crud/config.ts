// Sets if the example should run locally or on chain
export enum Chain {
  POLYGON,
  MAINNET,
  MUMBAI,
}

// Inputs that configure this example to run
interface ExampleConfig {
  chain: Chain
  rpc: {
    polygon: string
    mainnet: string
    mumbai: string
  }
}

// Example Configuration
export const CurrentConfig: ExampleConfig = {
  chain: Chain.MUMBAI,
  rpc: {
    polygon: 'https://polygon-mainnet.g.alchemy.com/v2/vl-cX8rl7PrINswn9hN30D296QpsQd_L',
    mainnet: 'https://eth-mainnet.g.alchemy.com/v2/Yqaxq1EYcqCjCQ9GPyoIi18Hpsw7tkc5',
    mumbai: 'https://polygon-mumbai.g.alchemy.com/v2/4YYvPEDb7CTXkGbxzYdb826GB5kyFFuL',
  },
}
