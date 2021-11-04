import { Grid } from '@material-ui/core';
import beeGallery from './assets/BeeGallery.png';

const BeeGallery = (): JSX.Element => (
  <Grid item xs={12} className='img-bg' style={{ backgroundImage: `url(${beeGallery})`, height: '1200px', marginTop: '-90px' }} />
);

export default BeeGallery;
