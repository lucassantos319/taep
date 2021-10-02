import axios from 'axios';
import Link from 'next/link'
import { useState } from 'react';
import styled from 'styled-components';
import * as ReactBootStrap from 'react-bootstrap';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { Button, TextField, Container, Grid} from '@material-ui/core'

const FormularioLogin = ({}) => {
    
    const router = useRouter();
    const {register,handleSubmit} = useForm();
    const [cookie, setCookie] = useCookies(["user"])
    const [error,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [loading,setLoading] = useState(false);

    const handleError = (error) => {
        
        var errorM = new String(error.message)
        console.log(error);
        
        if ( errorM.includes('400') )
            return error.message;
        
        if ( errorM.includes("402") )
            return "Senha incorreta";         

        if ( errorM.includes("403") )
            return "Usuário não cadastrado";
            
        return error.message;
    }

    const OnSubmitFunctionForm = async (data) => {
        
        try{
            
            setLoading(true);
            const url = "https://taep-backend.herokuapp.com/login";
            const userData = await axios.post(url,{"email":data.email,"password":data.password});
            console.log(userData.data);
            if ( userData.data.login ){
                setCookie("user", JSON.stringify(userData), {
                    path: "/",
                    maxAge: 3600, // Expires after 1hr
                    sameSite: true
                });
             
                router.push("/home");
            }
        }
        catch(error){
            setError(true);
            setErrorMessage(handleError(error));
        }
    }

    return(
        <Div>
            <Container maxWidth="sm">
                <Collapse in={error}>
                    <Alert severity="error">{errorMessage}</Alert>
                </Collapse>
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
                        <Grid item={true} xs={12} className="centraliza">
                            <Button className="m-12" variant="contained" color="primary" type="submit" size="large">
                                {loading ? <ReactBootStrap.Spinner animation="border"/> : "Entre com login"}
                            </Button>
                        </Grid>
                        <Grid style={{marginTop:'20px'}} item={true} xs={12} className="centraliza-texto">
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