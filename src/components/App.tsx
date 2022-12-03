import React, { useEffect } from 'react';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Coins } from '../features/coins/Coins';
import ResetButton from './ResetButton';
import Home from '../pages/Home';
import ContactPage from '../pages/Contact';
import ReceptionPage from '../pages/Reception';
import MeetingRoomPage from '../pages/MeetingRoom';
import LibraryPage from '../pages/Library';
import CoffeePage from '../pages/Coffee';
import OfficePage from '../pages/Office';
import StorePage from '../pages/Store';

// Offset to go under AppBarr
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
    // Constants and setup
    const pages: object = {
        'Home': '/',
        'Help': '/reception',
        'Contact': '/contact'
    }
    const linkClassName = 'menu-link'
    const drawerWidth = 240

    // Hooks
    const [navOpen, setNavOpen] = React.useState<boolean>(false);
    const [anchorElSettings, setAnchorElSettings] = React.useState<HTMLElement | null>(null);
    const navigate = useNavigate()

    // Methods
    const toggleNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setNavOpen(!navOpen);
    };
    const handleCloseNavMenu = () => {
        setNavOpen(false);
    };
    
    const handleOpenSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElSettings(event.currentTarget);
    };
    const handleCloseSettingsMenu = () => {
        setAnchorElSettings(null);
    };

    const navigateAndCloseDrawer = (route: string) => {
        setNavOpen(false)
        navigate(route)
    }

    // Add "Esc" on click handling
    useEffect(() => {
        // Anything in here is fired on component mount.
        const handleKeyDown = (event: KeyboardEvent) => {
            const keyName = event.key
            switch (keyName) { 
                case 'Escape':
                    navigate('/')
                    break
                default: break
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Anything in here is fired on component unmount.
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    // App
    return (<>
        <AppBar position="fixed" className="nice-gradient" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {Object.keys(pages).map((page) => {
                            return (<Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={pages[page as keyof typeof pages]} className={linkClassName}>{page}</Link>
                            </Button>)
                        })}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {// TODO: add translations
                        }
                        <Coins />
                        <ResetButton />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        { !navOpen ? <></> : <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {Object.keys(pages).map((page) => {
                        return (<ListItem key={`${page}-drawer`} disablePadding>
                        <ListItemButton onClick={() => navigateAndCloseDrawer(pages[page as keyof typeof pages])}>
                        <ListItemText primary={page} />
                        </ListItemButton>
                        </ListItem>)})
                    }
                </List>
            </Box>
        </Drawer>}
            <Offset sx={{ mb: '16px' }}/>
            <Box sx={{ flexGrow: 1 }} className='content-box'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reception" element={<ReceptionPage />} />
                    <Route path="/meeting_room" element={<MeetingRoomPage />} />
                    <Route path="/bathroom" element={<Home />} />
                    <Route path="/lab" element={<Home />} />
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/coffee" element={<CoffeePage />} />
                    <Route path="/office" element={<OfficePage />} />
                    <Route path="/store" element={<StorePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Box>
    </>);
}

export default App;

