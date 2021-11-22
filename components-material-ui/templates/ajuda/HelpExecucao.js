import Image from 'next/image'
import PlanningImg from '../../../public/img/execution/execution.png'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useState} from 'react';
import {useRouter} from 'next/router';
import imgAplicarProjeto from '../../../public/img/execution/aplicarProjeto.jpg'
import cicleInvension from '../../../public/img/execution/cicloInvencao.jpg'
import imgExample from '../../../public/img/execution/example.png'

const HelpExecucao = () => {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const router = useRouter();
    return (
        <>
            <div style={{width:'80%',marginLeft:'10%'}}>

                <div style={{marginTop:"20px"}}>
                    <Image src={PlanningImg}></Image>
                </div>
                <div>
                    <div style={{marginTop:"30px"}}>
                        <p>Na atividade de Execução, existem quatro etapas descritas a seguir:</p>
                        
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList  onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Aplicar avaliação diagnóstica" value="1" />
                                        <Tab label="Aplicar Projeto" value="2" />
                                        <Tab label="Preparar Avaliação Diagnóstica" value="3" />
                                        <Tab label="Preparar Avaliação Formativa" value="4" />
                                    </TabList>
                            
                                    <TabPanel value="1">
                                        <div>
                                           <div>
                                                <div style={{textAlign:"center"}}>
                                                    <h2>Por que avaliação diagnóstica?</h2>
                                                </div>
                                                <p>A avaliação diagnóstica é fundamental nesse processo, pois a partir dela, será possível alinhar o escopo, além de perceber as dificuldades e as necessidades dos estudantes. Desse modo, ficará mais fácil para escolher com o que trabalhar em sala de aula (problemas, projetos, ferramentas, dentre outras).</p>
                                            </div> 

                                            <div style={{marginTop:"40px"}}>
                                                <div style={{textAlign:"center"}}>
                                                    <h2>Como Aplicar a Avaliação Diagnóstica?</h2>
                                                </div>
                                                <p>Exemplos:</p>
                                                <div >
                                                    <span style={{fontWeight:"bold"}}>Produção de texto: </span>
                                                    <span>
                                                        Para retomar os gêneros trabalhados em cada série nas diferentes modalidades organizativas, pode ser planejada uma situação em que os alunos possam produzir um texto de determinado gênero e analisar os aspectos linguísticos e discursivos.
                                                    </span>
                                                </div>
                                                <div style={{marginTop:"30px"}}>
                                                    <span style={{fontWeight:"bold"}}>Resolução de problemas envolvendo as operações: </span>
                                                    <span>
                                                        Pode ser utilizado diferentes tipos de problemas que envolvam as operações de adição, subtração, multiplicação e divisão.
                                                    </span>
                                                </div>
                                                <div style={{marginTop:"30px"}}>
                                                    <span style={{fontWeight:"bold"}}>Análise de dados das turmas: </span>
                                                    <span>
                                                        Outra sugestão, seria procurar o índice de aproveitamento e resultado de avaliações anteriores.
                                                    </span>
                                                </div>
                                                <div style={{marginTop:"30px"}}>
                                                    <span>
                                                    A tabulação dos dados obtidos na avaliação diagnóstica oferecerá um mapa da turma e permitirá identificar quais são os alunos que precisam de uma orientação maior.
                                                    </span>
                                                </div>
                                            </div> 
                                            <div style={{padding:"4px",border:"1px solid #e0e0e0",marginTop:"30px"}}>
                                                <a href="https://gestaoescolar.org.br/conteudo/1486/a-importancia-da-avaliacao-diagnostica-inicial">gestaoescolar.org.br/conteudo/1486/a-importancia-da-avaliacao-diagnostica-inicial</a>
                                            </div>

                                        </div>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div style={{display:"flex",marginBottom:"60px"}}>
                                            <div style={{width:"50%"}}>
                                                <Image src={imgAplicarProjeto}></Image>
                                            </div>
                                            <div style={{width:"50%",marginLeft:"40px"}}>
                                                <h2>Vamos Aplicar o Projeto!</h2>
                                                <p>Nesta etapa, o professor apresentará a proposta aos estudantes, se certificará que todos entenderam os passos do projeto. Além disso, organizará os grupos e entregará o material de apoio providenciado na etapa Preparar os Materiais de Apoio.</p>
                                                <p>Não se esqueça de fazer um checklist para verificar se no laboratório existe máquinas suficientes com acesso à internet, se as ferramentas úteis para o projeto estão instaladas nos computadores, se tem projetor multimídia disponível, dentre outros recursos. Essa verificação é importante, pois no momento do estudo, tudo deve funcionar.</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <div>
                                            <div style={{textAlign:"center"}}>
                                                <h2>Ciclo de Invenções</h2>
                                            </div>
                                            <div>
                                                <p>Como sugestão, apresentamos esta metodologia baseada em Projetos que tem o objetivo de ajudar os estudantes aprenderem por meio do erro.</p>
                                                <p>A tentativa ao erro permite aos estudantes ter experiências lúdicas, possibilita descoberta e ajuda a resgatar o interesse dos alunos pelos aprendizados.</p>
                                                <p>Nesse ciclo, o estudante imagina, constrói e testa, se a ideia funcionar compartilha. Se não, identifica o erro, pensa, aperfeiçoa e testa novamente até funcionar.</p>
                                                <div style={{marginLeft:"40px",marginTop:"30px"}}>
                                                    <Image src={cicleInvension}></Image>
                                                </div>
                                                <div style={{marginTop:"40px",padding:"5px",border:'1px solid #e0e0e0'}}>
                                                    <a href="https://maonamassa.porvir.org/">maonamassa.porvir.org/</a>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="4"> 
                                        <div style={{marginBottom:"40px"}}>
                                            <div>
                                                <h2>Por que avaliação formativa ?</h2>
                                            </div>
                                            <p>É uma modalidade de avaliação fundamentada no diálogo, que possui como objetivo o reajuste constante do processo de ensino. Exige muito envolvimento por parte do professor; exige-lhe uma disponibilidade de tempo, pois passa a ser necessária a construção de um registro sobre cada aluno e da atualização desse registro sempre que novos dados surgirem. É fundamental planejar diariamente, as atividades que serão desenvolvidas pelos alunos e elaborar estratégias individualizadas.</p>
                                        </div>
                                        <hr/>
                                        <div style={{marginTop:"40px"}}>
                                            <div style={{marginBottom:"40px",textAlign:"center"}}>
                                                <h2>Exemplo de Avaliação Formativa </h2>
                                            </div>
                                            <Image src={imgExample}></Image>

                                        </div>
                                        <div style={{marginTop:"40px",padding:"5px",border:'1px solid #e0e0e0'}}>
                                            <a href="https://pontobiologia.com.br/avaliacao-formativa/">pontobiologia.com.br/avaliacao-formativa/</a>
                                        </div>

                                    </TabPanel>
                                </Box>
                            
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}

export {HelpExecucao}