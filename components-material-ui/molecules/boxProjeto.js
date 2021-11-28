import styled from 'styled-components';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardHeader, Icon, IconButton } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import * as FaIcons from "react-icons/fa";
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import img from '../../public/img/conteudoProjeto.jpg'
import Image from 'next/image'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


async function deleteProject(confirm,id){

    if (confirm){
        await axios.post("https://taep-backend.herokuapp.com/project/"+id+"/deleteProject")
        return true;
    }

    return false;
}

const BoxProjeto = ({id, imgProjeto=false, user,titulo, professor, status, descricao, onClick}) => {
    
    return(
        <Div id={id}>
            <Card className="root">
                
                <CardActionArea>
                    <Image height={215} width={345} src={imgProjeto==false? img: imgProjeto}></Image>
                    <Typography className="m-box" variant="body2" color="textSecondary" component="p">
                        <strong>Status:</strong> {status[0].toUpperCase() + status.substr(1)}
                    </Typography>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {titulo[0].toUpperCase() + titulo.substr(1)}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                        <strong>Professor:</strong> {professor.first_name+" "+professor.last_name} 
                        </Typography>
                        <Typography className="m-top" variant="body2" color="textSecondary" component="p">
                            <strong>Descrição:</strong> {descricao}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div style={{display:"flex"}}>
                        <Button onClick={onClick} variant="contained" color="primary" size="large">
                            Acessar
                        </Button>
                        {
                            user.id == professor.id ?
                                <div style={{marginLeft:"10rem"}}>
                                    <IconButton onClick={ () => deleteProject(confirm("Deseja mesmo deletar o projeto ?"),id)? document.getElementById(id).remove():null }>
                                        <FaIcons.FaTrash size="23px"/>
                                    </IconButton>
                                </div>
                                
                            : null
                        }

                    </div>
                </CardActions>
            </Card>
        </Div>
    )
};
export default BoxProjeto;

const Div = styled.div`
    .root{
        border 2px solid #142850;
        border-radius: 12px;
        max-width: 345px;
        box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.5);
        // background-color: #ededed;

        :hover{
            border 2px solid #27496D;
            box-shadow: 6px 6px 4px rgb(20, 40, 80, 0.8);;
        }

        .m-top{
            margin-top: 24px;
        }

        .m-box{
            margin-left: 16px;
        }

        h2{
            font-size: 36px;
            margin: 0;
        }
    }

    .media{
        height: 140px;
    }
`