import { Grid } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const Layout = () => {
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Navbar />
        </Grid>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item md={9}>
          <Content />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
