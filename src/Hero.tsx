import { Grid } from '@material-ui/core';
import { ReactComponent as NiftyBee } from './assets/NiftyBee.svg';

const Hero = (): JSX.Element => (
  <Grid item xs={12}>
    <NiftyBee width='100%' height='100%' />
  </Grid>
);

export default Hero;
