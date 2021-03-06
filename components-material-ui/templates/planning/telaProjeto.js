import { TextField } from '@material-ui/core';
import React from 'react'
import { Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible'
import ProjetoDescription from '../../organism/planning/projetoDescription';

const TelaProjeto = ({setStep,step}) => {
   
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 6 ? 6 : nextStep);
    };

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
                        <div style={{marginTop:"2rem"}}>
                    
                            <div style={{float:'left',marginRight:'20px'}}>
                                <Button onClick={async () => {
                                    onChange(step-1);
                                }}>Voltar</Button>
                            </div>
                    
                            <div style={{float:'right',marginRight:'20px'}}>
                                <Button onClick={ async () => {
                                    
                                    var title = document.getElementById("titulo").value;
                                    var objective = document.getElementById("objetivo").value;
                                    var description = document.getElementById("description").value;
                                    var turma = document.getElementById("turma").value;
                                
                                    var obj = {
                                        "title":title,
                                        "objective":objective,
                                        "description":description,
                                        "turma":turma
                                    }

                                    localStorage.setItem("projetoInfo",JSON.stringify(obj));
                                    await alert("Salvo com sucesso");
                                    onChange(step+1);
                                }}
                                >Salvar</Button>
                            </div>
                        </div>
                        <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
                            <Collapsible
                                triggerStyle={{padding:'10px',marginBottom:'20px',backgroundColor:'#c8c8c8'}}
                                trigger="Educação por projeto (Clique para saber mais)"
                            >
                                <ProjetoDescription/>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TelaProjeto;