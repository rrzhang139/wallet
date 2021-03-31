import React from 'react'
import { render } from 'react-dom'
import bsc from '@binance-chain/bsc-use-wallet'
import { UseWalletProvider, useWallet } from 'use-wallet'

function App() {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()

  return (
    <>
      <h1>Wallet</h1>
      {wallet.status === 'connected' ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.reset()}>disconnect</button>
        </div>
      ) : (
          <div>
            Connect:
            <button onClick={() => wallet.connect()}>MetaMask</button>
            <button onClick={() => wallet.connect('frame')}>Frame</button>
            <button onClick={() => wallet.connect('portis')}>Portis</button>
          </div>
        )}
    </>
  )
}

// Wrap everything in <UseWalletProvider />
export default () => (
  (
    <UseWalletProvider connectors={{ bsc }}>
      <App />
    </UseWalletProvider>
  ),
  document.getElementById('#root')
)