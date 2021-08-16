import styled from "styled-components";
import Paragrafo from "../tipografia/paragrafo";
import * as FaIcons from "react-icons/fa";

import Link from 'next/link'

const NavBotao = ({children, icon, id, className, href}) => {
   
    return(
        <Link href={href}>
            <a>
                <Button className={className}>
                            <Paragrafo id={id} fontSize="22px" fontWeight="800">
                                {children}
                            </Paragrafo>
                </Button>
            </a>
        </Link>
    )
}
export default NavBotao

const Button = styled.button`
    border: none;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 50px;
    cursor: pointer;
    background-color: rgba(6, 11, 38);

    p{
        width: 100%;
        color: #FFF;
        text-transform: uppercase;
    }

    :hover{
        background-color: rgba(26, 131, 255, 0.4);
    }

    &.active{
        background-color: rgba(26, 131, 255);
        :hover{
            background-color: rgba(26, 131, 255, 0.9);
        }
        p{
            font-weight: 600;
        }
    }
 
`