import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Grid, TextField, Button, makeStyles, Modal, Backdrop, Fade } from '@material-ui/core';

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
            <Container maxWidth="md">
                <h1>Informações de usuário - {userCookie.user.user_type==1? 'Professor':'Aluno'}</h1>

                <Grid container spacing={3}>
                    <Grid item={true} xs={12} sm={6}>
                        <TextField
                            id="perfil-nome-sobrenome"
                            label="Nome"
                            defaultValue={userCookie.user.first_name + ' ' + userCookie.user.last_name}
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            type="text"
                        />
                    </Grid>

                    <Grid item={true} xs={12} sm={6}>
                        <TextField
                            id="perfil-apelido"
                            label="Apelido"
                            defaultValue={userCookie.user.nickname}
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            type="text"
                        />
                    </Grid>

                    <Grid item={true} xs={6} sm={6}>
                        <TextField
                            id="perfil-email"
                            label="E-mail"
                            defaultValue={userCookie.user.email}
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            type="email"
                        />
                    </Grid>

                    <Grid item={true} xs={6} sm={6} className={classes.centralizaEsquerda}>
                        <Button color="primary" onClick={handleOpenModalEmail}>
                            Alterar o e-mail
                        </Button>
                    </Grid>

                    <Grid item={true} xs={6} sm={6}>
                        <TextField
                            id="perfil-senha"
                            label="Senha"
                            defaultValue="trolei nao é a senha"
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            type="password"
                        />
                    </Grid>

                    <Grid item={true} xs={6} sm={6} className={classes.centralizaEsquerda}>
                        <Button color="primary" onClick={handleOpenModalSenha}>
                            Alterar a senha
                        </Button>
                    </Grid>
                </Grid>
            </Container>
                                
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
                        <form>
                            <h2 id="perfil-modal-email">Alteração de E-mail</h2>
                            <Grid container spacing={3} className={classes.centralizaItens}>
                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-novo-email"
                                        label="Novo e-mail"
                                        fullWidth
                                        type="email"
                                        required
                                    />
                                </Grid>

                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-confirmar-novo-email"
                                        label="Confirmar E-mail"
                                        fullWidth
                                        type="email"
                                        required
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
                        <form>
                            <h2 id="perfil-modal-senha">Alteração de senha</h2>
                            <Grid container spacing={3} className={classes.centralizaItens}>
                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-senha-antiga"
                                        label="Senha antiga"
                                        fullWidth
                                        type="password"
                                        required
                                    />
                                </Grid>
                                
                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-nova-senha"
                                        label="Nova senha"
                                        fullWidth
                                        type="password"
                                        required
                                    />
                                </Grid>

                                <Grid item={true} sm={12}>
                                    <TextField
                                        id="perfil-modal-confirma-nova-senha"
                                        label="Repita a nova senha"
                                        fullWidth
                                        type="password"
                                        required
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

