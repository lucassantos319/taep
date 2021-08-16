import styled from "styled-components";
import Div from "../atoms/div/div"
import DivElementosCentralizados from "../atoms/div/divElementosCentralizados";
import Paragrafo from "../atoms/tipografia/paragrafo";

import * as FaIcons from "react-icons/fa";

const CardAvaliacao = ({id, handleClick, selected, titulo, conteudo,date}) => {

    if (typeof conteudo != 'undefined')
        if(conteudo.length >= 38)
            var conteudoProcessado = conteudo.substring(0, 35) + "..."
        else
            var conteudoProcessado = conteudo

    return(
        <ButtonCardMessage
            id={id}
            onClick={(e) => handleClick(e, id)}
            className={selected == id ? "ativo":""}
        >
            <Div
                width="10%"
                height="100%"
                margin="0 6px 0 0 "
                padding="0px"
            >
                <DivElementosCentralizados
                    className="icone icon-font"
                    id={id + "-icon"} 
                    margin="0px" 
                    width="100%" 
                >
                    <FaIcons.FaBook />
                </DivElementosCentralizados>
            </Div>




            <Div
                width="65%"
                height="100%"
                margin="0 6px 0 6px"
                padding="0px"
            >
                <DivElementosCentralizados 
                    display="block" 
                    width="100%" 
                    // inputPTextAlign="left" 
                >
                    <Paragrafo className="nome" id={id + "-message-sender"} color="RGB(33, 34, 35)" fontSize="14px" lineHeigth="20px" textAlign="left">
                        {titulo}
                    </Paragrafo>
                    <Paragrafo color="RGB(113, 113, 113, 0.8)" fontSize="13px" lineHeigth="20px" textAlign="left">
                        {conteudoProcessado}
                    </Paragrafo>
                </DivElementosCentralizados>
            </Div>



            <Div
                width="25%"
                height="100%"
                
                margin="0 0 0 6px"
                padding="0px"
            >
                <DivElementosCentralizados width="100%" >
                    <Paragrafo color="RGB(144, 145, 145)" fontSize="12px" fontWeight="500">
                        {date}
                    </Paragrafo>

                    {/* <Paragrafo color="RGB(144, 145, 145)" fontSize="12px" fontWeight="500">
                        icon
                    </Paragrafo> */}
                </DivElementosCentralizados>
            </Div>
            

        </ButtonCardMessage>
    )
}

export default CardAvaliacao

const ButtonCardMessage = styled.button`
    width: 415px;
    height: 80px;
    padding: 12px;
    
    cursor: pointer;
    border: 1px solid RGB(151, 151, 151, 0.26);

    display: flex;

    background-color: #FFF;

    .icon-font{
        font-size: 30px;
    }

    &:hover{
        border: 1px solid RGB(151, 151, 151, 0.45);
    }

    &.ativo{
        border-left: 3px solid RGB(255, 71, 0);

        .icone{
            color: RGB(255, 71, 0);
        }
        
        .nome{
            color: RGB(255, 71, 0);
            font-size: 16px;
        }
    }
`
