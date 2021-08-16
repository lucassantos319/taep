import styled from 'styled-components';

import React from 'react';
import clsx from 'clsx';
import * as FaIcons from "react-icons/fa";

import {makeStyles, useTheme, Drawer, CssBaseline, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'

import NavbarProfessor from '../molecules/navbarProfessor';
import NavbarAluno from '../molecules/navbarAluno';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    corBackground: {
        background: 'linear-gradient(90deg, #142850, #27496D)',
        backgroundSize: '300% 300%',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        // background: 'linear-gradient(0deg, #142850, #27496D)',
        background: 'linear-gradient(135deg, #142850, #27496D)',
        backgroundSize: '150% 150%',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        padding: '0',
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    branco: {
        color: '#FFF',
    },
}));

const Navbar = ({children, tipo, aberto=true}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(aberto);

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
    setOpen(false);
    };

    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
                <Toolbar className={classes.corBackground}>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)} >
                        <FaIcons.FaBars />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        HELLO WORLD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper, }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <FaIcons.FaArrowLeft className={classes.branco}/> : <FaIcons.FaArrowRight className={classes.branco}/>}
                    </IconButton>
                </div>
                
                {/* DEFININDO QUAL VAI SER A BARRA DE NAVEGAÇÃO */}
                {tipo == 2 ? 
                    <NavbarAluno/>
                :
                    <NavbarProfessor/>
                }
                
            </Drawer>

            <div
                className={clsx(classes.content, {
                [classes.contentShift]: open,
                })}
            >
                {/* serva pra começar apos a barra de menu */}
                <div className={classes.drawerHeader} />

                {children}
            </div>
        </div>
    )
};
export default Navbar;

const Div = styled.div`

`