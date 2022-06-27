var evoNFT_abi = require("./EvoAbi.json");
var evoToken_abi = require("./ERC20Abi.json");

var config = {
    baseUrl: "http://192.168.103.53/api/",    
    chainId: 43113, //Cronos testnet : 338, Cronos mainnet : 25,   bsctestnet : 97
    mainNetUrl: 'https://mainnet.infura.io/v3/',
    testNetUrl:  "https://api.avax-test.network/ext/bc/C/rpc", 
    EvoNFTContractAddress : "0x6d2eed3e21c52e58Fa5c8f0780d90dBd27283a0D", 
    EvoTokenContractAddress : "0x638e99a717d3e140f3eebb84a35b7d72de2b02ed",
    EvoNFTContractAbi : evoNFT_abi,
    EvoTokenContractAbi : evoToken_abi,
    NFT_MAX_MINT: 100,
    MINTING_FEE_PER_NFT: 0.05
}

export default config;
