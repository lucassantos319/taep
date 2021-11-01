import { TextField } from '@material-ui/core';
import React from 'react'
import { Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible'
import ProjetoDescription from '../../organism/planning/projetoDescription';

const TelaProjeto = ({}) => {
   
    return (
        <>
            <div style={{textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>
                <h3>Criação de projeto</h3>
            </div>
            <div>
                <div>
                    <Collapsible
                        triggerStyle={{padding:'10px',marginBottom:'20px',backgroundColor:'#c8c8c8'}}
                        trigger="Educação por projeto"
                    >
                        <ProjetoDescription/>
                    </Collapsible>
                    <div style={{marginTop:'15px',marginBottom:'15px'}}>
                        <div>
                            <form>
                                <div>
                                    <TextField
                                        required
                                        label="Titulo do projeto"
                                        style={{marginTop:'20px',width:"40%"}}
                                        // {...register("titulo")}
                                    >

                                    </TextField>
                                </div>
                            </form>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TelaProjeto;