import { TextField } from '@material-ui/core';
import React from 'react'
import { Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible'
import ProjetoDescription from '../../organism/planning/projetoDescription';

const TelaProjeto = ({}) => {
   
    return (
        <>
            <div style={{textAlign:'center',marginTop:'40px',marginBottom:'20px'}}>
                <h3>Criação de projeto</h3>
            </div>
            <div>
                <div>
                    <div style={{marginTop:'15px',marginBottom:'40px'}}>
                        <div style={{marginBottom:'20px',marginBottom:'80px'}}>
                            <div style={{
                                marginLeft:'25%'
                            }}>
                                <TextField
                                    required
                                    id="titulo"
                                    label="Titulo do projeto"
                                    style={{marginTop:'20px',width:"35%"}}
                                >
                                </TextField>
                                <TextField
                                    required
                                    id="objetivo"
                                    label="Objetivo"
                                    style={{marginTop:'20px',marginLeft:'20px',width:"35%"}}
                                >
                                </TextField>
                            </div>
                            <div style={{
                                marginLeft:'25%'
                            }}>
                                <TextField
                                    required
                                    id="description"
                                    label="Descrição do projeto"
                                    multiline
                                    style={{marginTop:'20px',width:"72%"}}
                                >
                                </TextField>
                            </div>
                            <div style={{
                                marginLeft:'25%'
                            }}>
                                <TextField
                                    required
                                    id="turma"
                                    label="Turma"
                                    multiline
                                    style={{marginTop:'30px',width:"72%"}}
                                >
                                </TextField>
                            </div>

                        </div>
                        <div style={{float:'right',marginRight:'20px'}}>
                            <Button onClick={() => {
                                var title = document.getElementById("titulo").value;
                                var objective = document.getElementById("objetivo").value;
                                var description = document.getElementById("description").value;
                                var turma = document.getElementById("turma").value;

                                var obj = {
                                    "title":title,
                                    "objective":objective,
                                    "description":description,
                                    "turma":turma,
                                }

                                localStorage.setItem("projetoInfo",JSON.stringify(obj));
                                alert("Salvo com sucesso");

                            }}
                            >Salvar</Button>
                        </div>
                        <Collapsible
                            triggerStyle={{padding:'10px',marginBottom:'20px',backgroundColor:'#c8c8c8'}}
                            trigger="Educação por projeto"
                        >
                            <ProjetoDescription/>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TelaProjeto;