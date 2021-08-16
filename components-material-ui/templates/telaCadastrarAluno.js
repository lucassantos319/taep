import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid, Container, TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


const TelaCadastrarAluno = ({projects, usuario}) => {
     return(
        <Tela>
            <Container maxWidth="md">
                <h1>Cadastrar Aluno no TAEP4.0</h1>
                <form>
                    <Grid container spacing={3}>
                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-aluno-nome"
                                name="nomeAluno"
                                label="Nome"
                                fullWidth
                                type="text"
                                required
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-aluno-apelido"
                                name="apelidoAluno"
                                label="Apelido"
                                fullWidth
                                type="text"
                                required
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-aluno-email"
                                name="emailAluno"
                                label="Email"
                                fullWidth
                                type="email"
                                required
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item={true} xs={12} sm={6}>
                            <Button variant="contained" color="primary" type="submit" size="large">
                                Confirmar Cadastro
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Div>
                    <Alert id="cadastro-aluno-alerta" variant="filled" severity="success">
                        This is a success alert — check it out!
                    </Alert>
                </Div>
            </Container>
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

