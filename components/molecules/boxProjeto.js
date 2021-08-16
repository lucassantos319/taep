import styled from "styled-components";

import BotaoPrimario from "../atoms/botao/botaoPrimario";
import Paragrafo from "../atoms/tipografia/paragrafo";
import Div from "../atoms/div/div";
import DivElementosCentralizados from "../atoms/div/divElementosCentralizados";

import * as FaIcons from "react-icons/fa";

const BoxProjeto = ({id,onClick, imgProjeto, tituloProjeto, professorProjeto, imagemConteudoProjeto, statusProjeto, descricaoProjeto}) => {
    return(
        <Projeto>
            <CaseTitulo>
                <DivElementosCentralizados
                    width="20%"
                    height="100%"
                    margin="0 6px 0 0"
                >
                    <img src="https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/04-1.jpg"/>
                </DivElementosCentralizados>

                <DivElementosCentralizados
                    width="80%"
                    height="100%"
                    margin="0 0 0 6px"
                >
                    <Paragrafo
                        textAlign="left"
                        fontSize="22px"
                        fontWeight="900"
                    >
                        {tituloProjeto}
                    </Paragrafo>
                    <Paragrafo
                        textAlign="left"
                        fontSize="14px"
                        color="rgba(0,0,0,0.7)"
                    >
                        Professor: {professorProjeto}
                    </Paragrafo>
                </DivElementosCentralizados>
            </CaseTitulo>

            <CaseConteudo>
                <img src="https://media.istockphoto.com/vectors/background-unusual-modern-material-design-format-169-vector-vector-id534320520" />
                <Paragrafo className="projeto-status-info">
                    {statusProjeto}
                </Paragrafo>
            </CaseConteudo>

            <CaseResumo>
                <Paragrafo
                    color="#000"
                    fontSize="16px"
                    lineHeigth="18px"
                    fontWeight="800"
                    textAlign="justify"
                >
                    {descricaoProjeto}
                </Paragrafo>
                <BotaoPrimario onClick={onClick}
                    margin="12px 0 0 0"
                    texto='Visualizar Projeto'
                />
            </CaseResumo>
        </Projeto>
    )
}

export default BoxProjeto

const Projeto = styled.div`
    height: 450px;
    width: 350px;
    border: solid 1px #000000;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgb(165, 165, 165);
    margin: 12px;
`
const CaseTitulo = styled.div`
    padding: 12px;

    height: 20%;
    width: 100%;
    border-bottom: solid 1px #000000;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    img{
        height: 55px;
        width: 55px;
        border-radius: 50%;
        border: 1px solid #000000;
    }
`
const CaseConteudo = styled.div`
    height: 50%;
    width: 100%;
    border-bottom: solid 1px #000000;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .projeto-status-info{
        z-index: 999;
        font-size: 16px;
        position: sticky;
        left: 0;
        top: 100%;
        margin: 5px;
        color:#FFF;
    }

    :after{
        content:'';
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-image: linear-gradient(to bottom, rgba(0,0,0, 0.4), rgba(0,0,0, 0.8));
    }
`
const CaseResumo = styled.div`
    height: 30%;
    width: 100%;

    padding: 12px;
`