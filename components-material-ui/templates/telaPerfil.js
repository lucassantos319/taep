import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Grid, TextField, Button, makeStyles, Modal, Backdrop, Fade, IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/image'
import { useCookies } from 'react-cookie';
import perfil from '../../public/img/img-perfil-teste.png';
import * as FaIcons from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    centralizaEsquerda:{
        display: 'flex',
        justifyContent: 'flex-start',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #27496D',
        borderRadius: '12px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        //pra centralizar verticalmente
        position: 'absolute',
        top: '30%',
        transform: 'translateY(-50%)',
        minWidth: '40%',
        display: 'flex',
    },
    centralizaItens: {
        display: 'flex',
        justifyContent: 'center',
    }
  }));

const TelaPerfil = ({userCookie}) => {

    const classes = useStyles();
    const [openModalEmail, setOpenModalEmail] = React.useState(false);
    const [openModalSenha, setOpenModalSenha] = React.useState(false);

    const {register,handleSubmit} = useForm();
    const [cookies,setCookies] = useCookies(['user']);

    const onSubmitEmail = async (data) => {
        
        try{

            if (userCookie.user.data.login){

                if ( data.email != data.email_confirm){
                    alert("Emails não são iguais");
                }
                else{
                    
                    const url = "https://taep-backend.herokuapp.com/editEmail/"+userCookie.user.data.id;
                    const userData = await axios.post(url,{"email":data.email})
                    .then(response => response.data);

                    setOpenModalEmail(false);

                    var cookieUpdate = cookies.user;
                    cookieUpdate.email = data.email;
                    
                    setCookies("user", JSON.stringify(cookieUpdate), {
                        path: "/",
                        sameSite: true
                    });

                    alert("Email trocado com sucesso!");
                }
            }
        }
        catch(error){
            alert(error.message)
        }
    }

    const onSubmitPassword = async (data) => {

        try{

            if (userCookie.user.data.login){

                if ( data.password_new != data.password_confirm){
                    alert("Senhas não são iguais");
                }
                else{
                    
                    const url = "https://taep-backend.herokuapp.com/editPassword/"+userCookie.user.data.id;
                    const userData = await axios.post(url,{"password":data.password_new,"password_old":data.password_old})
                    .then(response => response.data);
                   
                    alert("Senha trocado com sucesso!\nClique fora para continuar utilizando a plataforma");
                }
            }
        }
        catch(error){
            alert(error.message)
        }

    }

    const handleOpenModalEmail = () => {
            setOpenModalEmail(true);
    };

    const handleCloseModalEmail = () => {
            setOpenModalEmail(false);
    };

    const handleOpenModalSenha = () => {
        setOpenModalSenha(true);
    };

    const handleCloseModalSenha = () => {
            setOpenModalSenha(false);
    };

    return(
        <Tela>
            <div style={{display:'flex', marginTop:'20px'}}>
                <div style={{display:'inline-flex',justifyContent:'center',alignItems:'center', width:'25%'}}>
                    <Image className="avatar" width={250} height={250} src={perfil} ></Image>
                    <style jsx global>{`
                        .avatar {
                            border-radius: 50%;
                        }
                    `}</style>
                </div>
                <div style={{marginLeft:'12px',width:'85%'}}>
                    
                    <div style={{marginTop:'14px'}}>
                        <div>
                            <span style={{fontSize:'30px'}}>{userCookie.user.data.first_name+' '+userCookie.user.data.last_name}</span>
                        </div>
                        <div>
                            <span style={{fontSize:'18px',color:'gray',marginTop:'5px'}}>{userCookie.user.data.user_type==1? 'Professor(a)':'Aluno'}</span>
                        </div>
                    </div>
                    <hr/>
                    <div style={{ display:'flex', marginTop:'30px'}}>
                        <div style={{ display:'flex'}}>
                            <div style={{marginTop:'12px'}}>
                                <span style={{fontSize:'16px'}}>Email: </span>
                                <span style={{fontSize:'16px', marginLeft:'10px'}}>{userCookie.user.data.email}</span>
                            </div>
                            <IconButton OnClick={handleOpenModalEmail} size={10} style={{marginLeft:'20px',float:'right'}}>
                                <FaIcons.FaEdit/>
                            </IconButton>
                        </div>
                    </div>
                    
                    <div style={{ display:'flex',}}>
                        <div style={{ display:'flex'}}>
                            <div style={{marginTop:'12px'}}>
                                <span style={{fontSize:'16px'}}>Apelido: </span>
                                <span style={{fontSize:'16px', marginLeft:'10px'}}>{userCookie.user.data.nickname==""?'--Vazio--':userCookie.user.data.nickname}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{display: 'flex', marginTop:'20px'}}>
                        <Button color="primary" onClick={handleOpenModalSenha}>
                            Alterar a senha
                        </Button>

                    </div>
                </div>
            </div>
                
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModalEmail}
                onClose={handleCloseModalEmail}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={openModalEmail}>
                    <div className={classes.paper}>
                        <form onSubmit={handleSubmit(onSubmitEmail)}>
                            <h2 id="perfil-modal-email">Alteração de E-mail</h2>
                            <Grid container spacing={3} className={classes.centralizaItens}>
                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-novo-email"
                                        label="Novo e-mail"
                                        fullWidth
                                        type="email"
                                        required
                                        {...register("email")}
                                    />
                                </Grid>

                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-confirmar-novo-email"
                                        label="Confirmar E-mail"
 
                                        fullWidth
                                        type="email"
                                        required
                                        {...register("email_confirm")}
                                    />
                                </Grid>
                                
                                <Grid item={true} sm={12}>
                                    <Button variant="contained" color="primary" type="submit" size="large">
                                        Confirmar mudança
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModalSenha}
                onClose={handleCloseModalSenha}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={openModalSenha}>
                    <div className={classes.paper}>
                        <form onSubmit={handleSubmit(onSubmitPassword)}>
                            <h2 id="perfil-modal-senha">Alteração de senha</h2>
                            <Grid container spacing={3} className={classes.centralizaItens}>
                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-senha-antiga"
                                        label="Senha antiga"
                                        fullWidth
                                        type="password"
                                        required
                                        {...register("password_old")}
                                    />
                                </Grid>
                                
                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-nova-senha"
                                        label="Nova senha"
                                        fullWidth
                                        type="password"
                                        required
                                        {...register("password_new")}

                                    />
                                </Grid>

                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-confirma-nova-senha"
                                        label="Repita a nova senha"
                                        fullWidth
                                        type="password"
                                        required
                                        {...register("password_confirm")}
                                    />
                                </Grid>
                                
                                <Grid item={true} sm={12}>
                                    <Button variant="contained" color="primary" type="submit" size="large">
                                        Confirmar mudança
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Fade>
            </Modal>


        </Tela>
    )
};
export default TelaPerfil;

const Tela = styled.div`
    padding: 12px;

    @media screen and (min-width : 0px) and (max-width : 767px){
        span{
            font-size: 12px;
        }
    }
   
`

