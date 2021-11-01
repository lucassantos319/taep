import Collapsible from 'react-collapsible';
import React from 'react'

const TelaDesafio = ({}) => {
    return (
        <>
            <div style={{textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>
                <h3>Definir desafios problemas</h3>
            </div>
            <div>
                <h5>Por que trabalhar com problemas?</h5>
                <p>Essa prática permite a construção do conhecimento, a partir da discussão do problema em grupo. Dessa forma, o aluno estuda individualmente sobre determinado assunto, antes da aula, e anota todas as suas dúvidas ou dificuldades. Na aula, acontecem discussões sobre os problemas resolvidos pelos grupos. Leia mais!</p> 
                <a href="https://silabe.com.br/blog/aprendizagem-baseada-em-problemas-pbl/">https://silabe.com.br/blog/aprendizagem-baseada-em-problemas-pbl/</a>
                <div style={{marginTop:'30px'}}>

                    <Collapsible
                        triggerStyle={{padding:'10px',backgroundColor:"#c8c8c8"}}
                        trigger="Sugestões de desafios problemas"
                    >
                        <div style={{marginTop:'30px'}}>

                            <h5>Sugestões de Desafios Problemas</h5>
                            <p>Estes problemas podem ser vinculados aos projetos, servir para retomar os conteúdos, dinamizar os processos de ensino e aprendizagem, fazer o estudante pensar fora da caixa em busca de soluções para os problemas propostos . Portanto, sendo possível trabalhar o erro, o engajamento e o protagonismo do aluno.
                            </p>

                            <div>
                                <div style={{display:'inline-block'}}>

                                    <div>
                                        <span>Problema de lógica</span>
                                        <a style={{marginLeft:'20px'}} href="https://rachacuca.com.br/logica/problemas/">Racha Cuca</a> 
                                    </div>
                                    <div style={{marginTop:'15px'}}>
                                        <span>Desafo de Lógica</span>
                                        <a style={{marginLeft:'20px'}} href="https://www.geniol.com.br/logica/desafios/">Geniol</a> 
                                    </div>
                                    <div style={{marginTop:'15px'}}>
                                        <span>Situação-Problema</span>
                                        <a style={{marginLeft:'20px'}} href="https://www.rpm.org.br/cdrpm/50/7.htm">Problema do Bilhar</a> 
                                    </div>
                                    <div style={{marginTop:'15px'}}>
                                        <span>Problemas Matemáticos</span>
                                        <a style={{marginLeft:'20px'}} href="https://www.noas.com.br/ensino-medio/matematica/aritmetica/arithmetic/">NOAS</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapsible>
                </div>
            </div>

        </>
    );
}

export default TelaDesafio