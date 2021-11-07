import React from 'react';
import { Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import VerificaTec from '../../organism/planning/verificaTec';

const TelaVerificaTec = ({tipo, children}) => {


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
                            <ul style={{listStyleType: 'none'}}>
                                <li>
                                    <div>
                                        <input class="radio_check_tec" type="radio"  />
                                        <a style={{marginLeft:'10px'}} href="https://sites.google.com/view/taep/Planejamento/planning/verificar-recursos-tecnol%C3%B3gicos/gamifica%C3%A7%C3%A3o?authuser=0">Gamificação</a>
                                    </div>
                                </li>
                                <li style={{marginTop:'10px'}}>
                                    <div>
                                        <input class="radio_check_tec" type="radio"  />
                                        <a style={{marginLeft:'10px'}} href="https://sites.google.com/view/taep/Planejamento/planning/verificar-recursos-tecnol%C3%B3gicos/programa%C3%A7%C3%A3o-em-blocos?authuser=0">Programação em bloco </a>
                                    </div>
                                </li>
                                <li style={{marginTop:'10px'}}>
                                    <div>
                                        <input class="radio_check_tec" type="radio"  />
                                        <a style={{marginLeft:'10px'}} href="https://sites.google.com/view/taep/Planejamento/planning/verificar-recursos-tecnol%C3%B3gicos/rob%C3%B3tica-educacional?authuser=0">Robótica Educacional</a>
                                    </div>
                                </li>
                                <li style={{marginTop:'10px'}}>
                                    <div>
                                        <input class="radio_check_tec" type="radio"  />
                                        <a style={{marginLeft:'10px'}} href="https://sites.google.com/view/taep/Planejamento/planning/verificar-recursos-tecnol%C3%B3gicos/realidade-aumentada?authuser=0">Realidade aumentada</a>
                                    </div>
                                </li>

                                <li style={{marginTop:'10px'}}>
                                    <div>
                                        <input class="radio_check_tec" type="radio"  />
                                        <a style={{marginLeft:'10px'}} href="https://sites.google.com/view/taep/Planejamento/planning/verificar-recursos-tecnol%C3%B3gicos/storytelling-digital?authuser=0">Storytelling Digital</a>
                                    </div>
                                </li>
                            </ul>

                        </div>
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

                        }}>Salvar</Button>
                    </div>
                </div>
            </form>
    	</>
	)

}
export default TelaVerificaTec
