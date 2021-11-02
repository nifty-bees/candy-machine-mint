import { Grid } from '@material-ui/core';
import { ReactElement } from 'react';
import wallet from './assets/wallet.png';
import './styles/Wallet.css';

interface props {
  children: ReactElement;
}

const Wallet = ({ children }: props): JSX.Element => (
  <Grid
    container
    direction='column'
    justifyContent='center'
    alignItems='center'
    className='img-bg'
    style={{ backgroundImage: `url(${wallet})`, margin: '-10px auto 0', height: '1200px', width: '100%' }}
  >
    <Grid item xs={4} />
    <Grid item xs={3}>
      {children}
    </Grid>
  </Grid>
);

export default Wallet;
