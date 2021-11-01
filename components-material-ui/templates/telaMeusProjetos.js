import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid, Container, Button } from '@material-ui/core';
import Link from 'next/link'  
import { useRouter } from 'next/router';

import BoxProjeto from '../molecules/boxProjeto';

const TelaMeusProjetos = ({projects, usuario}) => {
    const router = useRouter();
    return(
        <Tela>
          
            {
                projects.length > 0 ?
                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            {projects.map((item, i) => (
                                <Grid item={true} xs={12} sm={4}>
                                    <BoxProjeto 
                                        id={item.id}
                                        // imgProjeto = {img1}
                                        titulo = {item.titulo}
                                        professor = {item.userCreator}
                                        user={usuario}
                                        // imagemConteudoProjeto = {conteudoProjeto}
                                        status = {item.status}
                                        descricao = { item.descricao.lenght>35?
                                            item.descricao.substring(0,32)+'...':
                                            item.descricao 
                                        }
                                        onClick={()=>{ router.push('/meus-projetos/'+item.id)} }
                                    />
                                </Grid>
                            ))}
                            
                        </Grid>
                    </Container>
                :
                    <h4 style={{marginLeft:"20px", color:"#c4c3c0"}}>Não encontrado nenhum projeto</h4>
            }
        </Tela>
    )
};
export default TelaMeusProjetos;

const Tela = styled.div`

    padding-left:10px;
    margin-top:20px;
@media screen and (min-width : 0px) and (max-width : 767px){
}
`
const Div = styled.div`
    margin-bottom: 24px;
    display: flex;
    justify-content: flex-start;
`

