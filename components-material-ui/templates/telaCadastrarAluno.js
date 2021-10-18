import React from 'react';
import styled, { keyframes } from 'styled-components';
import FormularioCadastroAluno from '../organism/formularioCadastroAluno';

const TelaCadastrarAluno = ({projects, usuario}) => {
    
    return(
        <Tela>
            <h1>Cadastrar Aluno no TAEP4.0</h1>
                <FormularioCadastroAluno professor={usuario}/>
        </Tela>
    )
};
export default TelaCadastrarAluno;

const Tela = styled.div`
    padding: 12px;
`
const Div = styled.div`
    margin: 12px 0 12px 0;
    display: none;
`

