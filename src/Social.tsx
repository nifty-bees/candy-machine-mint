import { Grid } from '@material-ui/core';
import social from './assets/our-social.png';
import discord from './assets/Discord-Icon.png';
import twitter from './assets/Twitter-Icon.png';
import './styles/social.css';

const Social = (): JSX.Element => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      className='social-container img-bg'
      style={{ backgroundImage: `url(${social})`, margin: '-10px auto 0', height: '600px', width: '100%' }}
    >
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid
          item
          xs={1}
          className='social-icon'
          style={{ backgroundImage: `url(${discord})`, height: '140px', marginLeft: '-1em' }}
        ></Grid>
        <Grid item xs={1} />
        <Grid
          item
          xs={1}
          className='social-icon'
          style={{ backgroundImage: `url(${twitter})`, height: '140px', marginLeft: '-1em' }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default Social;

/*

    */
