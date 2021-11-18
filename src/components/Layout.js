import { Grid } from '@mui/material';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Content from './Content';
import { useState } from 'react';
import { styled } from '@mui/system';

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <Root>
      <NavBar onOpenSidebar={() => setOpen(true)} />
      {/* <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      /> */}
      {/* <MainStyle>
        <Outlet />
      </MainStyle> */}
      <p>asdasda</p>
    </Root>
  );
};

const Root = styled('div')({});

export default Layout;
