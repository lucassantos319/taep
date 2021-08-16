import styled from "styled-components";
import DivElementosCentralizados from "../atoms/div/divElementosCentralizados";
import Div from "../atoms/div/div";
import BotaoTexto from '../atoms/botao/botaoTexto';
import InputText from "../molecules/inputForms/inputText";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Label from "../atoms/tipografia/label";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const FormLogin = ({margin}) => {
    
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
        <Div margin={margin} width="100%" height="100vh" >
            <DivElementosCentralizados margin="0 0 0 20%" width="60%">
                <Div id="errorHeader">
                    <form onSubmit={handleSubmit(OnSubmitFunctionForm)} style={{margin:".1 0 0 .2",width:".6"}}>
                        
                        <Div margin={margin} >
                            <Div margin="0 0 10px 0" textAlign="left">
                                <Label fontSize="17px" fontWeight="bold" texto="Email" ></Label>
                            </Div>
                            <Div textAlign="left" >
                                <input style={{width:"100%"}} {...register("email")}></input>
                            </Div>
                        </Div>
                        <Div  >
                            <Div margin="0 0 10px 0" textAlign="left">
                                <Label fontSize="17px" fontWeight="bold" texto="Password" ></Label>
                            </Div>
                            <Div textAlign="left" >
                                <input style={{width:"100%"}} type="password" {...register("password")}></input>
                            </Div>
                        </Div>
                    
                        <BotaoTexto backgroundColorBotao="#2B435F" color="white" margin="0 0 20px 0" padding="14px" width="40%" texto="LOGIN"></BotaoTexto>

                        <div>
                            <Link href='cadastrar-professor'> 
                                <a>Create a new user</a>
                            </Link>
                        </div>
                    </form>
                </Div>
            </DivElementosCentralizados>

        </Div>
    )

}

export default FormLogin;

