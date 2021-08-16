import styled from 'styled-components';

import React from 'react';
import clsx from 'clsx';
import * as FaIcons from "react-icons/fa";

import Link from 'next/link'    



import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'

const NavbarAluno = ({}) => {
    return(
        <Div>
            <List>
                <Link href="/home">
                    <ListItem className="hover-item-nav" button="true" key='home'>
                        <ListItemIcon>
                            <FaIcons.FaHome className="text-nav"/>
                        </ListItemIcon>
                        <ListItemText className="text-nav" primary="Home" />
                    </ListItem>
                </Link>

                <Link href="/perfil">
                    <ListItem className="hover-item-nav" button key='perfil'>
                        <ListItemIcon>
                            <FaIcons.FaUser className="text-nav"/>
                        </ListItemIcon>
                        <ListItemText className="text-nav" primary="Perfil" />
                    </ListItem>
                </Link>

                <Link href="/meus-projetos">
                    <ListItem className="hover-item-nav" button key='meus-projetos'>
                        <ListItemIcon>
                            <FaIcons.FaTasks className="text-nav"/>
                        </ListItemIcon>
                        <ListItemText className="text-nav" primary="Meus Projetos" />
                    </ListItem>
                </Link>

                <Link href="/sair">
                    <ListItem className="hover-item-nav" button key='sair'>
                        <ListItemIcon>
                            <FaIcons.FaSignOutAlt className="text-nav"/>
                        </ListItemIcon>
                        <ListItemText className="text-nav" primary="Sair" />
                    </ListItem>
                </Link>
            </List>
        </Div>
    )
};
export default NavbarAluno;

const Div = styled.div`
    .text-nav{
        font-size: 24px;
        color: #FFF;
    }

    .hover-item-nav:hover{
        background-color: rgba(0, 0, 0, 0.3);
    }
`