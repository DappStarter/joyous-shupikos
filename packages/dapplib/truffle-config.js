require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rifle peace puppy harvest fork system genre'; 
let testAccounts = [
"0xb04d516fbc33782fc1560a04ddbc6171c8feacdad219efc44aba2692e0e3e639",
"0x4c2aa772e7264129e4464a621e89a45a4239c4143a0738f79a0db20f31cd6f8d",
"0x519c79cca10be54ee0df62e6e3e910e67bee26e29f916b1ea9a0cc39440e844a",
"0xdfc38d621500a8a017ed9b6df37960dbfcae6d5422415f0d367718cce8009f5f",
"0x16f87b30586d2b16438bd40265af68cb8ff61039826d2f69c41b2afa198f8591",
"0x72e207de20e1f57de1400d9b49d880fe970f3b66b2f06e0128dd1c182898161b",
"0x342e29d187a8444188b70fea7e411351f31055b1384fd6d2041e85b2970bf095",
"0x7c1cbc31a83b3a46ab9907a63979e6fb1ca51bfe44d67b42c315d2dd77e78c1f",
"0x1da0c7fcae35b1897924cfead1b88452355f3ee9ae6683479089151166142cc0",
"0xde18eac88abd4b54f42f574d89e951e1d12589387e043d3f315e016727673e1d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
