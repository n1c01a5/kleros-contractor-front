
export const NODES = {

};

export async function initWeb3Node() {
  const { web3 } = window;

  if (!web3 || !web3.currentProvider || !web3.currentProvider.sendAsync) {
    throw new Error(
      '
        Web3 not found. Please check that MetaMask is installed,
        or that MyEtherWallet is open in Mist.
      '
    );
  }

  // const lib = new Web3Node();
  // const networkId = await lib.getNetVersion();
  // const accounts = await lib.getAccounts();
  //
  // if (!accounts.length) {
  //   throw new Error('No accounts found in MetaMask / Mist.');
  // }
  //
  // if (networkId === 'loading') {
  //   throw new Error('MetaMask / Mist is still loading. Please refresh the page and try again.');
  // }

  NODES.web3 = {
    network: networkIdToName(networkId),
    service: 'MetaMask / Mist',
    lib,
    estimateGas: false,
    hidden: true
  };
}
