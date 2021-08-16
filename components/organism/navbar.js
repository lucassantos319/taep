import styled from "styled-components";
import NavbarAluno from "../molecules/nav/navbarAluno";
import NavbarProfessor from "../molecules/nav/navbarProfessor";

const Navbar = ({id, tipo}) => {
    return(
        <Nav>
            {tipo == 2 ? 
                <NavbarAluno id={id}/>
            :
                <NavbarProfessor id={id}/>}
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    width: 300px;
    height: 100vh;
    background-color: rgba(6, 11, 38);
    box-shadow: 5px 0px 5px 0px rgb(199 199 199);
`