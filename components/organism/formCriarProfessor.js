import styled from "styled-components";
import DivElementosCentralizados from "../atoms/div/divElementosCentralizados";
import Div from "../atoms/div/div";
import BotaoTexto from '../atoms/botao/botaoTexto';
import InputText from "../molecules/inputForms/inputText";
import { useRouter } from 'next/router';
import { useCookies } from "react-cookie";
import axios from 'axios';
import { useForm } from "react-hook-form";


const FormCriarUserProf = ({margin}) => {
    
    const {register,handleSubmit} = useForm();
    const router = useRouter();
    const [cookie, setCookie] = useCookies(["user"])

    const OnSubmitFunction = async (data) => {
       
        try{

            const url = 'http://localhost:3333/login/createUser'
            const userData = await axios.post(url,
            {
                "first_name":data.first_name,
                "last_name":data.last_name,
                "email":data.email,
                "password":data.password,
                "user_type":1,
                "nickname":data.apelido
                
            })
            .then(response => response.data);
            
            if ( userData.login ){
                
                setCookie("user", JSON.stringify(userData), {
                    path: "/",
                    maxAge: 3600, // Expires after 1hr
                    sameSite: true
                });
                router.push("/home");
            }
            
        }
        catch(error){
            console.log(error);
            return error;
        }
    }

    return(
        <Div margin={margin} width="100%" height="100vh" >
            <DivElementosCentralizados margin="0 0 0 20%" width="60%">
                <form onSubmit={handleSubmit(OnSubmitFunction)} style={{padding:'7em',margin:'.1 0 0 .2', width:'.6'}} >

                    <InputText margin="0 0 20px 30%" label="Nome">
                        <input style={{width:'100%',height:'24px'}} {...register("first_name")}></input>
                    </InputText>

                    <InputText margin="0 0 20px 30%" label="Sobrenome">
                        <input style={{width:'100%',height:'24px'}} {...register("last_name")}></input>
                    </InputText>

                    <InputText margin="0 0 20px 30%" label="Apelido">
                        <input style={{width:'100%',height:'24px'}} {...register("apelido")}></input>
                    </InputText>

                    <InputText margin="0 0 20px 30%" label="Email">
                        <input style={{width:'100%',height:'24px'}} {...register("email")}></input>
                    </InputText>

                    <InputText margin="0 0 20px 30%" label="Password">
                        <input style={{width:'100%',height:'24px'}} {...register("password")}></input>
                    </InputText>

                    <BotaoTexto type="submit" backgroundColorBotao="#2B435F" color="white" margin="20px 0 20px 0" padding="14px" width="45%" texto="Criar conta"></BotaoTexto>
                </form>

            </DivElementosCentralizados>
        </Div>
    )
    
}

export default FormCriarUserProf;

