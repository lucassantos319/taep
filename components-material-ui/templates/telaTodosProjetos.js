import React from 'react';
import styled from 'styled-components';
import { Grid, Container, Button } from '@material-ui/core';

import BoxProjeto from '../molecules/boxProjeto';
import { useRouter } from 'next/router';

const TelaTodosProjetos = ({projects,usuario}) => {
    
    const router = useRouter();
    return(
        <Tela>
            <h1>TODOS OS PROJETOS</h1>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {projects.map((item, i) => (
                        <Grid item={true} xs={12} sm={4}>
                            <BoxProjeto 
                                id='teste'
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
                                onClick={()=>{ router.push('/projetos/'+item.id)} }
                            />
                        </Grid>
					))}
                    
                </Grid>
            </Container>
        </Tela>
    )
};
export default TelaTodosProjetos;

const Tela = styled.div`
padding: 12px;

@media screen and (min-width : 0px) and (max-width : 767px){
}
`
const Div = styled.div`
    margin-bottom: 24px;
    display: flex;
    justify-content: flex-start;
`

