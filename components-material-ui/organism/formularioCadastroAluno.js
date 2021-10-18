import styled from 'styled-components';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const FormularioCadastroAluno = ({professor}) => {
    
    const {register,handleSubmit} = useForm();
    const handleForm = async (data) => {
        
        try{
            if ( data.Nome.length > 0 ){
    
                const url = "http://34.95.205.248:5000/login/createUser";
                const userData = await axios.post(url,
                    {"first_name":data.Nome,
                    "password": Math.random().toString(36).slice(-8),
                    "email":data.Email,
                    "nickname":data.Apelido,
                    "user_type":2,
                    "last_name":"",
                    "emails":[
                        data.Email
                    ],
                    "professor":professor
                })
                .then(response => response);
                
    
                if (userData.data.login){
                    alert("Usuario criado com sucesso !");
                }
            }
        }
        catch(error){
            alert(error)
        }
    
    }
    
    return(
        <Div>
            <Container maxWidth="md">
                <form onClick={handleSubmit(handleForm)}>
                    <Grid container spacing={3}>
                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-aluno-nome"
                                name="nomeAluno"
                                label="Nome"
                                fullWidth
                                type="text"
                                required
                                {...register("Nome")}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-aluno-apelido"
                                name="apelidoAluno"
                                label="Apelido"
                                fullWidth
                                type="text"
                                {...register("Apelido")}
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
                                {...register("Email")}
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
                    {/* <Alert id="cadastro-aluno-alerta" variant="filled" severity="success">
                        This is a success alert — check it out!
                    </Alert> */}
                </Div>
            </Container>
        </Div>
    )
};
export default FormularioCadastroAluno;

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