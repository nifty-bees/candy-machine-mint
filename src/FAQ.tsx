import faq from './assets/faq-bg.png';
import { Grid } from '@material-ui/core';
import './styles/faq.css';

const FAQ = (): JSX.Element => (
  <Grid
    container
    direction='column'
    justifyContent='center'
    alignItems='center'
    className='img-bg'
    style={{ backgroundImage: `url(${faq})`, margin: '-10px auto', height: '1400px', width: '100%' }}
  >
    {/* TODO: Implement FAQ items */}
  </Grid>
);

export default FAQ;
