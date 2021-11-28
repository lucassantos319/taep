import React from 'react';
import { Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import VerificaTec from '../../organism/planning/verificaTec';
import CheckBoxComponent from '../../organism/checkBoxComponent';

const TelaVerificaTec = ({tipo, children,setStep,step}) => {

    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 6 ? 6 : nextStep);
    };

    return (
		<>
            <form >

                <div style={{textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>
                    <h3>Verificar recursos tecnológicos</h3>
                </div>
                <div style={{width:'100%',marginTop:'35px',marginBottom:'80px'}}>
                    <h5>Qual tecnologia escolher para se trabalhar Educação 4.0 nas escolas ?</h5>
                    <div style={{marginTop:'30px'}}>
                        <div>
                            <p>Nesta etapa, o professor escolhe a ferramenta, de acordo com a realidade da escola.</p>
                            <p>Portanto, deve ser verificada a disponibilidade de computadores com acesso à Internet aos alunos, investimentos em equipamentos e recursos, entre outros.
                                <br/>Dessa forma, será possível adaptar os exemplos e sugestões de acordo com a realidade da escola.
                                <br/>Como material de apoio para os professores, o TAEP4.0 oferece sugestões de ferramentas para</p>
                            <div style={{marginTop:"3rem"}}>

                                <ul style={{listStyleType: 'none'}}>
                                    <div style={{display:"flex"}}>
                                        <div style={{width:"20%"}}>
                                            <li>
                                                <div>
                                                    <h6>
                                                        <a style={{marginLeft:'10px'}} href="/ajuda/verifica-tecnologia/gamificacao" target="_blank">Gamificação</a>
                                                    </h6>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Kahoot</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Quizizz</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Socrative</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Quizlet Live</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Quiz Alive</span>
                                                </div>
                                            </li>
                                        </div>
                                        <div style={{width:"20%"}}>
                                            <li>
                                                <div>
                                                    <h6>
                                                        <a style={{marginLeft:'10px'}} href="/ajuda/verifica-tecnologia/programacao-visual" target="_blank">Programação em bloco </a>
                                                    </h6>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Blockly Games</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Hora do Código</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Code Spark</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Twine</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Scratch</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Kodu</span>
                                                </div>
                                            </li>
                                        </div>
                                        <div style={{width:"20%"}}>
                                            <li>
                                                <div>
                                                    <h6>
                                            <a style={{marginLeft:'10px'}} href="/ajuda/verifica-tecnologia/robotica-educacional" target="_blank">Robótica Educacional</a>
                                                    </h6>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Robô de Sucata 1</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Robô de Sucata 2</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Escova-Robô</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Marialina</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Olimpíadas de Robótica</span>
                                                </div>
                                            </li>
                                        </div>
                                        <div style={{width:"20%"}}>
                                            <li>
                                                <div>
                                                    <h6>
                                                        <a style={{marginLeft:'10px'}} href="/ajuda/verifica-tecnologia/realidade-aumentada" target="_blank">Realidade aumentada</a>
                                                    </h6>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Metaverse</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Star Chart</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Quiver</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Anatomy Learning</span>
                                                </div>
                                            </li>
                                        </div>
                                        <div style={{width:"20%"}}>
                                            <li>
                                                <div>
                                                    <h6>
                                                        <a style={{marginLeft:'10px'}} href="/ajuda/verifica-tecnologia/storytelling-digital " target="_blank">Storytelling Digital</a>
                                                    </h6>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Book Creator</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Storyboard Creator</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Zimmer Twins</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Comic Life - HQ</span>
                                                </div>
                                                <div style={{marginTop:"1.25rem"}}>
                                                    <CheckBoxComponent />
                                                    <span style={{marginLeft:"1rem"}}>Storyjumper</span>
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                        </div>
                    </div>  
                    <div style={{marginTop:"2rem"}}>
                                <div style={{float:'left',marginRight:'20px'}}>
                                    <Button onClick={async () => {
                                        onChange(step-1);
                                    }}>Voltar</Button>
                                </div>

                                
                                <div style={{float:'right',marginTop:'20px',marginRight:'20px'}}>
                                    <Button onClick={() => {

                                        var tecRadio = [];
                                        var tec = document.getElementsByClassName("radio_check_tec");
                                        
                                        for ( var i = 0 ; i < tec.length; i++ )
                                            if ( tec[i].checked )
                                                tecRadio.push(i+1);

                                        var obj = {
                                            "tecRadio": tecRadio
                                        }

                                        localStorage.setItem("recurso",JSON.stringify(obj))
                                        alert("Salvo com sucesso");
                                        onChange(step+1);

                                    }}>Salvar</Button>
                                </div>
                            </div>           
                </div>
            </form>
    	</>
	)

}
export default TelaVerificaTec
