'use client'
import { ConnectionOptions } from '@/libs/components/ConnectionOptions';
import { ConnectionType, switchNetwork } from '@/libs/connections';
import { CHAIN_INFO } from '@/libs/constants';
import { useWeb3React } from '@web3-react/core';
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  // var [isWalletConnected , setIsWalletConnected] = useState(false);
  // var [balance , setBalance ] = useState("0.0");
  // var [chainId , setChainId ] = useState('0');

  const { chainId, account, isActive , isActivating } = useWeb3React()
  const [blockNumber, setBlockNumber] = useState<number>(0)
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(null)

  return (

    <section className='w-full flex-center flex-col  ' >
      <div className='container mx-auto px-4' >
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white' >Rana Ahsan Ansar</h1>
        <div>
          {/* <button className='bg-gray-400 border-s-blue-800' style={{ padding: '10px' , borderRadius: '10px' }} >Connect Wallet</button> */}
          <h1 className='mt-2' >Status: <span>{`Block Number: ${blockNumber + 1}`}</span></h1>
        </div>
        <div className='mt-2'>
          {/* <button className='bg-gray-400 border-s-blue-800' style={{ padding: '10px' , borderRadius: '10px' }} >Get Balance</button> */}
          <h1 className='mt-2' >Connected Account: <span>{account}</span></h1>
        </div>
        <div className='mt-2'>
          {/* <button className='bg-gray-400 border-s-blue-800' style={{ padding: '10px' , borderRadius: '10px' }} >Change Network</button> */}
          <h1 className='mt-2' >Chain Id: <span>{chainId }</span></h1>
        </div>

        <div className='mt-2' style={{ 
          border: '2px solid white',
          padding: '5px',
          display: 'flex'
        }} >
        <ConnectionOptions
          activeConnectionType={connectionType}
          isConnectionActive={isActive}
          onActivate={setConnectionType}
          onDeactivate={setConnectionType}
        />
        </div>

        <div className='mt-2' style={{ 
          border: '2px solid white',
          padding: '5px',
        }}  >
        {Object.keys(CHAIN_INFO).map((chainId) => (
          <div key={chainId}>
            <button onClick={() => switchNetwork(parseInt(chainId), connectionType)}>
              {`Switch to ${CHAIN_INFO[chainId].label}`}
            </button>
          </div>
        ))}
        </div>
        <div>
          {isActivating}
        </div>

      </div>
    </section>
  )
}