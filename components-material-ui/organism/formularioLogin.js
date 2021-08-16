import styled from 'styled-components';

import { useForm } from "react-hook-form";
import axios from 'axios';
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Link from 'next/link'

import { Button, TextField, Container, Grid } from '@material-ui/core'

const FormularioLogin = ({}) => {
    const router = useRouter();
    const {register,handleSubmit} = useForm();
    const [cookie, setCookie] = useCookies(["user"])

    const OnSubmitFunctionForm = async (data) => {
        
        try{
            
            const url = process.env.SERVER_HOST+"login";
            const userData = await axios.post(url,{"email":data.email,"password":data.password})
            .then(response => response.data);
            
            if ( userData.login ){
                setCookie("user", JSON.stringify(userData), {
                    path: "/",
                    maxAge: 3600, // Expires after 1hr
                    sameSite: true
                });
                router.prefetch("/home");
                router.push("/home");
            }
            
        }
        catch(error){
            console.log(error.message);
        }
    }

    return(
        <Div>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit(OnSubmitFunctionForm)}>
                    <TextField 
                        id="login-email" 
                        label="Email"  
                        type="email" 
                        required 
                        fullWidth
                        margin="normal"
                        {...register("email")}
                    />
                    
                    <TextField 
                        id="login-senha" 
                        label="Senha" 
                        type="password" 
                        required 
                        fullWidth
                        margin="normal"
                        {...register("password")}
                    />

                    <Grid container xs={12}>
                        <Grid item xs={12} className="centraliza">
                            <Button className="m-12" variant="contained" color="primary" type="submit" size="large">
                                Entrar
                            </Button>
                        </Grid>
                        <Grid item xs={12} className="centraliza-texto">
                            <Link className="centraliza" href="cadastrar-professor">
                                <Button color="primary">
                                    Professor, faça o seu cadastro
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Div>
    )
};
export default FormularioLogin;

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