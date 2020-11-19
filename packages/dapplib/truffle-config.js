require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember solid guess argue front slam'; 
let testAccounts = [
"0x594f0bb62a1a451aa7c1f91d400b5567cbf9643a0b489760820d7b8cef270b42",
"0xa186d0acb99975b839e7532e5c54efb7edd500ce01f1676dee81a35fe6ae3a50",
"0xa66b9caea506916e432e8a37b1128539e90af51b2aa0929f22af67dfa02c54c7",
"0xd493ec7fb0ad80ea0d8bc440f1c18444c28c99cad3e497c8c6a7e1fa1d503231",
"0x3f8589b32b174e418ce7ae60f7e83f3c0e5d0b095a5955ef53c9883019d16479",
"0xe80cbc3c73cd80924325762f77c0239420f1fbf3e7323a6fe03a6ced3918b776",
"0x409bbea87928835dd4ac248a9240544c8905f1d483a2271740362eff05ca8093",
"0x5c08294ec191fce290b0a30bfbe33f312625f0e8931487e4cf58d0a13c235a97",
"0x0da119f9253e3712dd84345dcb4e8b963126f230ad7abb6622b7a1fb846fe917",
"0x315bf8e9e8a7ed6d6926e0dea9a1f5d245aab596b5fa40fed3b1e86066fad629"
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
