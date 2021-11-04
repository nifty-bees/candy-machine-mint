import { Grid } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import { ReactComponent as RoadmapSVG } from './assets/Roadmap.svg';

const Roadmap = (): JSX.Element => (
  <Grid item xs={12} style={{ marginTop: '-50px', zIndex: 10 }}>
    <RoadmapSVG width='100%' height='100%' />
  </Grid>
);

export default Roadmap;
