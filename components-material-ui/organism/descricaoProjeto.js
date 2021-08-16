import React,{useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid, Container, TextField, Button, Chip, makeStyles, TextareaAutosize } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        '& > * + *': {
        marginTop: theme.spacing(3),
        },
    },
}));

const DescricaoProjeto = ({projectInfo}) => {
    
    console.log(projectInfo)
    const classes = useStyles();

    const disciplinas = [
        { disciplina: 'Biologia'},
        { disciplina: 'Espanhol'},
        { disciplina: "Física"},
        { disciplina: 'Geografia'},
        { disciplina: 'História'},
        { disciplina: 'Informática'},
        { disciplina: 'Inglês'},
        { disciplina: 'Matemática'},
        { disciplina: 'Português'},
        { disciplina: 'Química'},
        { disciplina: 'Outra...'},
    ];

    const competencias = [
        { competencia: 'Autoconhecimento'},
        { competencia: 'Autoestima'},
        { competencia: 'Autonomia'},
        { competencia: "Colaboração"},
        { competencia: 'Confiança'},
        { competencia: 'Empatia'},
        { competencia: 'Ética'},
        { competencia: 'Felicidade'},
        { competencia: 'Paciência'},
        { competencia: 'Responsabilidade'},

        { competencia: 'Agilidade Para Tomar Decisões'},
        { competencia: 'Empreendedorismo'},
        { competencia: 'Generalização'},
        { competencia: 'Interpretação'},
        { competencia: 'Pensamento Abstrato'},
        { competencia: 'Pensamento Crítico'},
        { competencia: 'Reflexão'},
        { competencia: 'Solução de Problemas'},

        { competencia: 'Gerenciar tempo'},
        { competencia: 'Liderança'},
        { competencia: 'Planejamento'},

        { competencia: 'Iniciativa'},
        { competencia: 'Criatividade'},
        { competencia: 'Inovação'},
        { competencia: 'Fluência de Ideias'},
        { competencia: 'Ética e Coerência'},

        { competencia: 'Negociação'},
        { competencia: 'Comunicação'},

        { competencia: 'Outra'},
    ];

    
    return(
        <Tela>
            <Container maxWidth="md">
                <h1 style={{marginTop:"30px"}}>Informações do projeto</h1>

                <h4 style={{marginTop:"30px"}}>Professor criador - {projectInfo.userCreator.first_name+" "+projectInfo.userCreator.last_name} </h4>
                <form style={{marginTop:"30px"}}>
                    <Grid container spacing={3}>
                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="perfil-nome-sobrenome"
                                label={"Titulo"}
                                defaultValue={projectInfo.titulo}
                                InputProps={{
                                    readOnly: true,
                                }}
                                fullWidth
                                type="text"
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-projeto-turma"
                                label="Turma"
                                fullWidth
                                type="text"
                                defaultValue={projectInfo.turma}
                                InputProps={{
                                    readOnly: true,
                                }}

                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <div className={classes.root}>
                                <Autocomplete
                                    id="cadastrar-projeto-disciplinas-relacionadas"
                                    options={disciplinas}
                                    getOptionLabel={(option) => option.disciplina}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Disciplina do projeto"
                                        defaultValue={projectInfo.disciplina}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    )}
                                />
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-projeto-conteudo"
                                label="Conteúdo"
                                fullWidth
                                type="text"
                                defaultValue={projectInfo.descricao}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        
                        <Grid item={true} xs={12} sm={6}>
                            <div className={classes.root}>
                                <Autocomplete
                                    multiple
                                    id="cadastrar-projeto-disciplinas-relacionadas"
                                    options={disciplinas}
                                    onChange={(event,value)=>handleChangeDisciplinas(event,value)}
                                    getOptionLabel={(option) => option.disciplina}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Disciplinas relacionadas"
                                        />
                                    )}
                                />
                            </div>
                        </Grid>
                        
                        <Grid item={true} xs={12} sm={6}>
                            <div className={classes.root}>
                                <Autocomplete
                                    multiple
                                    id="cadastrar-projeto-competencias-relacionadas"
                                    options={competencias}
                                    getOptionLabel={(option) => option.competencia}
                                    filterSelectedOptions
                                    onChange={(event,value) => handleChangeTags(event,value)}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Competências relacionadas"
                                        />
                                    )}
                                />
                            </div>
                        </Grid>
                        
                        <Grid item={true} xs={12} sm={6}>
                            <TextField 
                                id="cadastrar-projeto-tecnologias"
                                label="Tecnologias a serem utilizadas"
                                fullWidth
                                type="text"
                                multiline
                                maxRows={6}
                                defaultValue={projectInfo.tecnologias}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField 
                                id="cadastrar-projeto-objetivos"
                                label="Objetivos do projeto"
                                fullWidth
                                type="text"
                                multiline
                                maxRows={6}
                                defaultValue={projectInfo.objetivo}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={12}>
                            <TextField 
                                id="cadastrar-projeto-materiais-apoio"
                                label="Materiais de apoio"
                                fullWidth
                                type="text"
                                multiline
                                maxRows={6}
                            />
                        </Grid>

                    </Grid>
                </form>
            </Container>
        </Tela>
    )
}

export default DescricaoProjeto;



const Tela = styled.div`
    padding: 12px;
`


