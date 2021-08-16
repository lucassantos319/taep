import styled from "styled-components";

import * as FaIcons from "react-icons/fa";

import DivElementosCentralizados from "../../atoms/div/divElementosCentralizados";
import NavBotao from "../../atoms/botao/navBotao";


const NavbarAluno = ({id, name, src}) => {
    return(
        <DivElementosCentralizados
            padding="12px 0 12px 0"
            height="100%"
            width="100%"
            display="inherit"
        >
            {/* informacoes de usuario */}
            <DivElementosCentralizados>
            </DivElementosCentralizados>

            {/* Troca de tela */}
            <DivElementosCentralizados
            >
                <NavBotao className={id=="home" ? "active":""} icon="FaIcons.FaUser" href="/home">
                    <FaIcons.FaHome /> home
                </NavBotao>

                <NavBotao className={id=="perfil" ? "active":""} icon="FaIcons.FaTasks" href="/perfil">
                    <FaIcons.FaUser /> perfil
                </NavBotao>

                <NavBotao className={id=="meus-projetos" ? "active":""} icon="FaIcons.FaHome" href="/meus-projetos">
                    <FaIcons.FaTasks /> meus projetos
                </NavBotao>

                <NavBotao href="index">
                    <FaIcons.FaTasks /> sair
                </NavBotao>
            </DivElementosCentralizados>
        </DivElementosCentralizados>
    )
}

export default NavbarAluno

const Nav = styled.div`

`