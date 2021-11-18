import { alpha, styled } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import MHidden from './shared/MHidden';
import MenuIcon from '@mui/icons-material/Menu';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const NavBar = ({ onOpenSidebar }) => {
  return (
    <Root>
      <ToolbarStyle>
        <MHidden width='lgUp'>
          <IconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </MHidden>
        <Stack
          direction='row'
          alignItems='center'
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <p>Lang</p>
          <p>notif</p>
          <p>account</p>
        </Stack>
      </ToolbarStyle>
    </Root>
  );
};

const Root = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default NavBar;
