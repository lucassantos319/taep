import { Container, Grid, TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const FormularioCadastroAluno = ({professor}) => {
    
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
    
            }
        }
        catch(error){
            alert(error)
        }
    
    }
    const {register,handleSubmit} = useForm();

    return(    
        <div style={{width:"100%"}}>
            <div style={{textAlign:"center"}}>
                <h1 style={{marginTop:'20px',marginBottom:'30px'}}>Cadastrar Aluno no TAEP4.0</h1>
            </div>
            <form onSubmit={handleSubmit(handleForm)} >
                <div style={{marginLeft:"20%",width:"60%"}}>
                    <div style={{marginTop:"40px"}}>
                        <TextField
                            id="cadastrar-aluno-nome"
                            name="nomeAluno"
                            label="Nome"
                            fullWidth
                            type="text"
                            required
                            {...register("Nome")}
                        />
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <TextField
                            id="cadastrar-aluno-apelido"
                            name="apelidoAluno"
                            label="Apelido"
                            fullWidth
                            type="text"
                            {...register("Apelido")}
                        />
                    </div>

                    <div style={{marginTop:"20px"}}>
                        <TextField
                            id="cadastrar-aluno-email"
                            name="emailAluno"
                            label="Email"
                            fullWidth
                            type="email"
                            required
                            {...register("Email")}
                        />
                    </div>
                    <div style={{marginTop:"50px"}}>
                        <Button style={{width:"100%"}} variant="contained" color="primary" size="large" type="submit">
                            Confirmar Cadastro
                        </Button>
                    </div>
                </div>
            </form>
        </div>
        
        
    )
};
export default FormularioCadastroAluno;

