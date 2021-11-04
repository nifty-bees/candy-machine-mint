import { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import { clusterApiUrl, PublicKey, PublicKeyInitData } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import { createTheme, Grid, ThemeProvider } from '@material-ui/core';

import Home from './Home';
import Hero from './Hero';
import Wallet from './Wallet';
import Social from './Social';
import Roadmap from './Roadmap';
import BeeGallery from './BeeGallery';
import FAQ from './FAQ';
import './styles/App.css';

const treasury: PublicKey = new anchor.web3.PublicKey(process.env.REACT_APP_TREASURY_ADDRESS as PublicKeyInitData);
const config: PublicKey = new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_CONFIG as PublicKeyInitData);
const candyMachineId: PublicKey = new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID as PublicKeyInitData);
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST as string;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE as string, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
  palette: { type: 'dark' },
  overrides: {
    MuiButtonBase: { root: { justifyContent: 'flex-start' } },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: '12px 16px',
      },
      startIcon: { marginRight: 8 },
      endIcon: { marginLeft: 8 },
    },
  },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSlopeWallet(), getSolflareWallet(), getSolletWallet({ network }), getSolletExtensionWallet({ network })],
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <Grid container alignItems='center' style={{ overflow: 'hidden' }}>
          <Hero />
          <Wallet>
            <WalletProvider wallets={wallets} autoConnect={true}>
              <WalletDialogProvider>
                <Home
                  candyMachineId={candyMachineId}
                  config={config}
                  connection={connection}
                  startDate={startDateSeed}
                  treasury={treasury}
                  txTimeout={txTimeout}
                />
              </WalletDialogProvider>
            </WalletProvider>
          </Wallet>
          <Social />
          <Roadmap />
          <BeeGallery />
          <FAQ />
        </Grid>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
