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
            {usuario == 1? 
                <Container maxWidth="lg">
                    <Link href="criar-projeto">
                        <Div>
                            <Button variant="contained" color="primary" size="large">
                                Criar novo projeto
                            </Button>
                        </Div>
                    </Link>
                </Container>
            :
                ""
            }
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {projects.map((item, i) => (
                        <Grid item xs={12} sm={4}>
                            <BoxProjeto 
                                id={item.id}
                                // imgProjeto = {img1}
                                titulo = {item.titulo}
                                professor = {item.userCreator.first_name+' '+item.userCreator.last_name}
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
        </Tela>
    )
};
export default TelaMeusProjetos;

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

