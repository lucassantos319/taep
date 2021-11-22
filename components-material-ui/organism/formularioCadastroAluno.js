import styled from 'styled-components';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const handleForm = async (data) => {
    
    try{
        if ( data.Nome.length > 0 ){

            const professor = localStorage.getItem("professor");
            console.log(professor);
            const url = "http://taep-backend.herokuapp.com/login/createUser";
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

            localStorage.removeItem("professor");
        }
    }
    catch(error){
        alert(error)
    }

}

const FormularioCadastroAluno = ({professor}) => {
    
    const {register,handleSubmit} = useForm();

    return(
        <Div>
            <Container maxWidth="md">
                <h1 style={{marginLeft:'9em',marginTop:'20px',marginBottom:'30px'}}>Cadastrar Aluno no TAEP4.0</h1>
                <form >
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

                    <Grid container spacing={3} style={{marginTop:'40px'}}>
                        <Grid item={true} xs={12} sm={6}>
                            <Button style={{width:'205%'}} variant="contained" onClick={()=>{localStorage.setItem("professor",professor); handleSubmit(handleForm)}} color="primary" size="large">
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