import styled from 'styled-components';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import Link from 'next/link'

const FormularioCadastroProfessor = ({}) => {
    return(
        <Div>
            <Container maxWidth="sm">
                <form>
                    <TextField 
                        id="cadastro-professor-email" 
                        label="Email" 
                        type="email" 
                        required 
                        fullWidth
                        margin="normal"
                    />

                    <TextField 
                        id="cadastro-professor-nome" 
                        label="Nome" 
                        type="text" 
                        required 
                        fullWidth
                        margin="normal"
                    />

                    <TextField 
                        id="cadastro-professor-apelido" 
                        label="Apelido" 
                        type="text" 
                        required 
                        fullWidth
                        margin="normal"
                    />
                    
                    <TextField 
                        id="cadastro-professor-senha" 
                        label="Senha" 
                        type="password" 
                        required 
                        fullWidth
                        margin="normal"
                    />

                    <TextField 
                        id="cadastro-professor-confirmar-senha" 
                        label="Confirmar senha" 
                        type="password" 
                        required 
                        fullWidth
                        margin="normal"
                    />

                    <Grid container xs={12}>
                        <Grid item xs={12} className="centraliza">
                            <Button className="m-12" variant="contained" color="primary" type="submit" size="large">
                                Realizar cadastro
                            </Button>
                        </Grid>
                    </Grid>
                    <Link href="./">
                        <Grid container xs={12}>
                            <Grid item xs={12} className="centraliza">
                                <Button color="primary" size="large">
                                    Voltar para tela de login
                                </Button>
                            </Grid>
                        </Grid>
                    </Link>
                </form>
            </Container>
        </Div>
    )
};
export default FormularioCadastroProfessor;

const Div = styled.div`
    .centraliza{
        display: flex;
        justify-content: center;
    }
    .centraliza-texto{
        text-align: center;
    }
    .m-12{
        margin-top: 12px;
    }
`