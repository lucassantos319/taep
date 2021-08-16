import styled from 'styled-components';

import React from 'react';
import clsx from 'clsx';
import * as FaIcons from "react-icons/fa";

import Link from 'next/link'

import {makeStyles, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import { useCookies } from 'react-cookie';

const NavbarProfessor = ({}) => {
    
    // const [cookies, setCookies, removeCookies] = useCookies(['user'])
    return(
        <Div>
            <List>
                <Link href="/home">
                    <ListItem button className="hover-item-nav" key='home'>
                            <ListItemIcon>
                                <FaIcons.FaHome className="text-nav"/>
                            </ListItemIcon>
                            <ListItemText className="text-nav" primary="Home" />
                    </ListItem>
                </Link>

                <Link href="/perfil">
                    <ListItem button className="hover-item-nav" key='perfil'>
                        <ListItemIcon>
                            <FaIcons.FaUser className="text-nav"/>
                        </ListItemIcon>
                        <ListItemText className="text-nav" primary="Perfil" />
                    </ListItem>
                </Link>

                <Link href="/meus-projetos">
                    <ListItem button className="hover-item-nav" key='meus-projetos'>
                        <ListItemIcon>
                            <FaIcons.FaTasks className="text-nav"/>
                        </ListItemIcon>
                        <ListItemText className="text-nav" primary="Meus Projetos" />
                    </ListItem>
                </Link>

                <Link href="/projetos">
                    <ListItem button className="hover-item-nav" key='projetos'>
                        <ListItemIcon>
                            <FaIcons.FaProjectDiagram className="text-nav"/>
                        </ListItemIcon>
                        <ListItemText className="text-nav" primary="Projetos" />
                    </ListItem>
                </Link>

                <Link href="/cadastrar-aluno">
                    <ListItem button className="hover-item-nav" key='cadastrar-aluno'>
                        <ListItemIcon>
                            <FaIcons.FaCog className="text-nav"/>
                        </ListItemIcon>
                        <ListItemText className="text-nav" primary="Cadastrar Aluno" />
                    </ListItem>
                </Link>

                <Link href="/sair" >
                    <ListItem button className="hover-item-nav" key='sair'>
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
export default NavbarProfessor;

const Div = styled.div`
    .text-nav{
        font-size: 24px;
        color: #FFF;
    }
    .hover-item-nav:hover{
        background-color: rgba(0, 0, 0, 0.3);
    }
`