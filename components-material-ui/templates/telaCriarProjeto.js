import React,{useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid, Container, TextField, Button, Chip, makeStyles, TextareaAutosize } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

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
    const [cookies,setCookie] = useCookies(["user"])

    const router = useRouter();
    const [selectedOptionsDisciplinas, setSelectedOptionsDisciplinas] = useState([]);
    const [selectedOptionsTags, setSelectedOptionsTags] = useState([]);

    const handleChangeTags = (event, value) => setSelectedOptionsTags(value);
    const handleChangeDisciplinas = (event, value) => setSelectedOptionsDisciplinas(value);

    const onSubmit = async (data) => {
        
        try{
          
            const url = "https://taep-backend.herokuapp.com/project/createProjects";
            var data = {
               
                "title":data.title,
                "turma":data.turma,
                "disciplina":data.disciplina,
                "description":data.description,
                "tecnologias":data.tecnologias,
                "objective":data.objetivo,
                "material_apoio":data.material_apoio,
                "userId":cookies.user.data.id,
                "disciplinas_relacionais":[],
                "tags":[]
            };

            data["disciplinas_relacionais"] = selectedOptionsDisciplinas;
            data["tags"] = selectedOptionsTags;

            console.log(data);
            const projectData = await axios.post(url,data)   
            .then(response => response.data);
            
            // if ( cookies.user.login ){
                // setCookie("user", JSON.stringify(userData), {
            //         path: "/",
            //         maxAge: 3600, // Expires after 1hr
            //         sameSite: true
            //     });
            router.prefetch("/meus-projetos");
            router.push("/meus-projetos");
            // }
            
        }
        catch(error){
            alert(error.message);
        }
    }

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

    const {register,handleSubmit} = useForm()
    
    return(
        <Tela>
            <Container maxWidth="md">
                <h1>Criação de projeto</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                id="cadastrar-projeto-titulo"
                                label="Titulo do projeto"
                                fullWidth
                                type="text"
                                placeholder="Insira o titulo do projeto"
                                required
                                {...register("title")}

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
                                {...register("turma")}

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
                                        {...register("disciplina")}
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
                                {...register("description")}

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
                                    onChange={(event,value) => handleChangeTags(event,value)}
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
                                {...register("tecnologias")}
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
                                {...register("objetivo")}
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
                                {...register("material_apoio")}
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


