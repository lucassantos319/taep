import styled, { keyframes } from 'styled-components';
import Image from 'next/image'
import FormularioCadastroProfessor from '../organism/formularioCadastroProfessor';

import registro from '../../public/img/registro.png'

const TelaCadastrarProfessor = ({}) => {
    return(
        <Tela>
            <BoxInputLogin>
                <div className="centraliza">
                    <Image height={120} width={120} src={registro}></Image>
                </div>
                <h1 className="h1">Bem-vindo ao TAEP 4.0</h1>
                <FormularioCadastroProfessor />
            </BoxInputLogin>
        </Tela>
    )
};
export default TelaCadastrarProfessor;

const colors = keyframes`
    0%{
        background-position 0% 50%;
    }
    
    50%{
        background-position 100% 50%;
    }

    100%{
        background-position 0% 50%;
    }
`

const Tela = styled.div`
    height: 100vh;
    position: relative;

    display: flex;
    justify-content: center;

    //criação do backgournd gradiente (animado????)
    background: linear-gradient(45deg, #142850, #27496D, #0C7B93, #00A8CC);
    background-size: 300% 300%;
    animation: ${colors} 10s ease infinite;

    @media screen and (min-width : 0px) and (max-width : 767px){
        height: 150vh;
    }
`

const BoxInputLogin = styled.div`
    background-color: ;
    max-width: 500px;
    max-height: 800px;
    padding: 36px;
    background-color: #FFF;

    border-radius: 12px;
    box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.5);

    //pra centralizar verticalmente
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    .h1{
        margin: 12px 0 12px 0;
        text-align: center;
    }
    
    .centraliza{
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width : 0px) and (max-width : 767px){
        max-width: 300px;
        max-height: 900px;
    }
`