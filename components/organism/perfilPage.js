import Div from "../atoms/div/div";
import { useCookies } from "react-cookie";
import axios from 'axios';
import InputText from "../molecules/inputForms/inputText";
import { useForm } from "react-hook-form";
import DivColuna from '../atoms/div/divColuna'


const PerfilPage = ({data,ooa}) => {

    const {register,handleSubmit} = useForm();
    const [userCookie,setCookie] = useCookies(["user"]);
    
    if ( Object.keys(userCookie).length !== 0 ){
        
        const userInfoLogin= userCookie.user.login;
        if ( userInfoLogin ){
//          
            console.log(userCookie);
            var user_type = '';
            if ( userCookie.user.user_type == 1){
                user_type = "Professor";
            }
            else{
                user_type = "Aluno";
            }

            return (
                <>
                    <DivColuna>

                        <Div>
                            <h3>Nome: {userCookie.user.first_name}</h3>

                        </Div>
                        <Div>
                            <h3>Sobrenome: {userCookie.user.last_name}</h3>

                        </Div>
                        <Div>
                            <h3>Apelido: {userCookie.user.nickname}</h3>
                            
                        </Div>
                        <Div>
                            <h3>Email: {userCookie.user.email}</h3>
                            
                        </Div>
                        <Div>
                            <h3>Tipo de usuario: {user_type}</h3>
                            
                        </Div>
                        
                    </DivColuna>
                    
                    {/* <InputText margin="0 0 20px 30%" label="Nome">
                        <input style={{width:'100%',height:'24px'}} {...register("first_name")}></input>
                    </InputText>

                    <InputText margin="0 0 20px 30%" label="Sobrenome">
                        <input style={{width:'100%',height:'24px'}} {...register("last_name")}></input>
                    </InputText>

                    <InputText margin="0 0 20px 30%" label="Apelido">
                        <input  style={{width:'100%',height:'24px'}} {...register("apelido")}></input>
                    </InputText>

                    <InputText margin="0 0 20px 30%" label="Email">
                        <input style={{width:'100%',height:'24px'}} {...register("email")}></input>
                    </InputText> */}

                  
                </>
            )
        }

        return (
            <>
                <h1>LOADING</h1>
            </>
        )
    
    }
    
    return (
        <>
            <h1>not found user data</h1>
        </>
    )

   
}


   
export default PerfilPage;