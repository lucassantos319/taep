import styled from "styled-components";

import * as FaIcons from "react-icons/fa";

import DivElementosCentralizados from "../../atoms/div/divElementosCentralizados";
import NavBotao from "../../atoms/botao/navBotao";



const NavbarProfessor = ({id, name, src}) => {
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
                <NavBotao className={id=="home" ? "active":""} href="/home">
                    <FaIcons.FaHome /> home
                </NavBotao>

                <NavBotao className={id=="perfil" ? "active":""} href="/perfil">
                    <FaIcons.FaUser /> perfil
                </NavBotao>

                <NavBotao className={id=="meus-projetos" ? "active":""} href="/meus-projetos">
                    <FaIcons.FaTasks /> meus projetos
                </NavBotao>

                <NavBotao className={id=="projetos" ? "active":""} href="/projetos">
                    <FaIcons.FaProjectDiagram/> projetos
                </NavBotao>

                <NavBotao className={id=="cadastrar-aluno" ? "active":""} href="/cadastrar-aluno">
                    <FaIcons.FaCog /> cadastrar aluno
                </NavBotao>

                <NavBotao href="/">
                    <FaIcons.FaTasks /> sair
                </NavBotao>
            </DivElementosCentralizados>
        </DivElementosCentralizados>
    )
}

export default NavbarProfessor

const Nav = styled.div`
`