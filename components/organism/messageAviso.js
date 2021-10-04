import React, { useState } from "react";
import styled from "styled-components";
import Div from "../atoms/div/div"
import CardAvaliacao from "../molecules/cardAvaliacao";
import CardAviso from "../molecules/cardAviso";

const MensagensAviso = ({messagesData}) => {
    const [selected, setSelected] = useState(null)
    
    console.log(messagesData)

    const handleClick = (event, id) => {
        event.preventDefault()
        if(id == selected){
            setSelected(null)
        }
        else{
            setSelected(id) 
        }
    }

    return(
        <DivBoxMessages>
            <Div
                className="scroll-y"
                padding="0px"
                width="38.65%"
                height="100%"
                display="block"
                borderRadius="12px"
            >
                {messagesData.map((item, i) => (
                    <CardAvaliacao
                        key={i}
                        handleClick={handleClick}
                        id={item.id}
                        selected={selected}
                        titulo={item.titulo}
                        conteudo={item.descricao}
                        date={item.date}
                    />
                ))}
            </Div>

            <Div
                width="61.35%"
                height="100%"
                borderRadius="12px"
            >   
                <CardAviso 
                    id={selected}
                    messagesData={messagesData}
                    className={selected == null ? "esconde":""}
                />
            </Div>

        </DivBoxMessages>
    )
}
export default MensagensAviso;

const DivBoxMessages = styled.div` 
    height: 540px;
    width: 100%;
    background-color: #F0F2F5;
    display: flex;

    border: 3px solid RGB(151, 151, 151, 0.33);
    border-radius: 12px;

    .scroll-y{
        overflow-y: scroll;
    }

    .esconde{
        display: none;
    }

    .border-radius-12{
        border-radius: 12px;
    }
`