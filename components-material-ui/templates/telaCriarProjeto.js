import React from 'react';
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

const TelaCriarProjeto = ({projects, usuario}) => {
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
                <h1>Criação de projeto</h1>

                <form>
                    <Grid container spacing={3}>
                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-projeto-titulo"
                                label="Titulo do projeto"
                                fullWidth
                                type="text"
                                placeholder="Insira o titulo do projeto"
                                required
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-projeto-turma"
                                label="Turma"
                                fullWidth
                                type="text"
                                placeholder="Insira a turma de aplicação do projeto"
                                required
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
                                        placeholder="Escolha uma disciplina"
                                        required
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
                                placeholder="Informe o conteúdo do projeto"
                                required
                            />
                        </Grid>
                        
                        <Grid item={true} xs={12} sm={6}>
                            <div className={classes.root}>
                                <Autocomplete
                                    multiple
                                    id="cadastrar-projeto-disciplinas-relacionadas"
                                    options={disciplinas}
                                    getOptionLabel={(option) => option.disciplina}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Disciplinas relacionadas"
                                        placeholder="Escolha uma disciplina"
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
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Competências relacionadas"
                                        placeholder="Escolha uma competência"
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
                                placeholder="Descreva as tecnologias com as quais você pretende trabalhar"
                                required
                                multiline
                                maxRows={6}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField 
                                id="cadastrar-projeto-objetivos"
                                label="Objetivos do projeto"
                                fullWidth
                                type="text"
                                placeholder="Descreva quais são os objetivos que você pretende alcançar com o projeto"
                                required
                                multiline
                                maxRows={6}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={12}>
                            <TextField 
                                id="cadastrar-projeto-materiais-apoio"
                                label="Materiais de apoio"
                                fullWidth
                                type="text"
                                placeholder="Informe materiais de apoio para o projeto (será visivel para os alunos)"
                                multiline
                                maxRows={6}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <Button variant="contained" color="primary" type="submit" size="large">
                                Criar projeto
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Container>
        </Tela>
    )
};
export default TelaCriarProjeto;



const Tela = styled.div`
    padding: 12px;
`


