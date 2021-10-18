import styled from 'styled-components';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useCookies } from "react-cookie";

const FormularioCadastroProfessor = ({}) => {
   
    const {register,handleSubmit} = useForm();
    const router = useRouter();
    const [cookie, setCookie] = useCookies(["user"])

    const onSubmitF = async (data) => {
        
        try{
            
            console.log(data)
            if ( data.password == data.password_confirm && data.password.length >= 6){

                console.log('entrei');
                const url = "https://taep-backend.herokuapp.com/login/createUser";
                const userData = await axios.post(url,
                    {"first_name":data.first_name,
                    "password":data.password,
                    "email":data.email,
                    "nickname":data.apelido,
                    "user_type":1,
                    "last_name":"",
                    "emails":[
                        data.email,
                    ]
                })
                .then(response => response);
    
                if ( userData.data.login ){

                    alert('Professor cadastrado com sucesso');
                    router.push('/');                    
                
                }
            }
            else{
                if ( data.password.length < 6) 
                    alert("A senha precisa conter pelo menos 6 caracteres! ");
                else
                    alert("Senhas são diferentes");
            }

        }catch(error){
            alert(error.message);
        }
    }

    return(
        <Div>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit(onSubmitF)}>
                    <TextField 
                        id="cadastro-professor-email" 
                        label="Email" 
                        type="email" 
                        required 
                        fullWidth
                        margin="normal"
                        {...register("email")}
                    />

                    <TextField 
                        id="cadastro-professor-nome" 
                        label="Nome" 
                        type="text" 
                        required 
                        fullWidth
                        margin="normal"
                        {...register("first_name")}
                    />

                    <TextField 
                        id="cadastro-professor-apelido" 
                        label="Apelido" 
                        type="text" 
                        required 
                        fullWidth
                        margin="normal"
                        {...register("apelido")}
                    />
                    
                    <TextField 
                        id="cadastro-professor-senha" 
                        label="Senha" 
                        type="password" 
                        required 
                        fullWidth
                        margin="normal"
                        {...register("password")}
                    />

                    <TextField 
                        id="cadastro-professor-confirmar-senha" 
                        label="Confirmar senha" 
                        type="password" 
                        required 
                        fullWidth
                        margin="normal"
                        {...register("password_confirm")}
                    />

                    <Grid container xs={12}>
                        <Grid item={true} xs={12} className="centraliza">
                            <Button className="m-12" variant="contained" type="submit" color="primary" size="large">
                                Realizar cadastro
                            </Button>
                        </Grid>
                    </Grid>
                    <Link href="./">
                        <Grid container xs={12}>
                            <Grid item={true} xs={12} className="centraliza">
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