import Image from 'next/image'
import PlanningImg from '../../../public/img/planning/planning.png'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useState} from 'react';

const HelpPlanejamento = () => {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div style={{width:'80%',marginLeft:'10%'}}>

                <div style={{marginTop:"20px"}}>
                    <Image src={PlanningImg}></Image>
                </div>
                <div>
                    <div style={{marginTop:"30px"}}>
                        <p>Na atividade de Planejamento, há sete etapas descritas a seguir:</p>
                        
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Definir Escopo" value="1" />
                                        <Tab label="Verificar Recursos Tecnológicos" value="2" />
                                        <Tab label="Preparar Avaliação Diagnóstica" value="3" />
                                        <Tab label="Definir Desafios Problemas" value="4" />
                                        <Tab label="Definir Projeto" value="5" />
                                        <Tab label="Preparar Materiais de Apoio" value="6"/>
                                        <Tab label="Organizar Projeto" value="7"/>
                                    </TabList>
                                </Box>
                            
                                <TabPanel value="1">
                                    <div>
                                        <p> Nesta etapa, o professor delimita o projeto a ser desenvolvido com os alunos. Por meio da documentação do escopo, são solicitados os seguintes itens: definir a turma a ser trabalhada, a disciplina e o conteúdo a serem disseminados, os temas relacionados aos Objetivos de Desenvolvimento Sustentável (ODS) a serem trabalhados (a fim de incentivar habilidades socioemocionais , mas não limitado a eles), as áreas da STEAM que serão inseridas (para permitir que o aluno trabalhe de maneira multidisciplinar), bem como as competências e habilidades do século XXI que serão desenvolvidas.</p>
                                    </div>
                                    <div>
                                        <div>
                                            <h3>A documentação de escopo visa delimitar o plano de aula voltado para a Educação 4.0.</h3>
                                            <div>
                                                <p>No Education 4.0, as informações precisam estar disponíveis e os alunos devem aprender a encontrá-las. Além disso, os alunos precisam ser orientados a desenvolver suas habilidades, em vez de apenas aprender um conjunto de dados predefinidos.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Documentação de escopo</h3>
                                            <div>
                                                <ol>
                                                    <li>Qual aula será trabalhada? Qual é a necessidade desta aula?</li>
                                                    <li>Qual disciplina? Qual conteúdo?</li>
                                                    <li>Quais temas relacionados aos ODS você pode incluir em sua proposta de aula?</li>
                                                    <li>Além desta disciplina, em quais áreas do STEAM você pretende trabalhar em sala de aula?</li>
                                                    <div>
                                                        <li>Quais habilidades e competências do século 21 você deseja desenvolver?</li>
                                                        <br/>
                                                        <p>Ex: Socioemocional, Cognitivo, Organizacional, Comportamental e Comunicativo</p>
                                                    </div>
                                                        
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                
                                <TabPanel value="2">
                                    <div></div>            
                                </TabPanel>
                            </TabContext>
                        </Box>
                        {/* <ul>
                            <div style={{marginTop:"40px"}}>
                                <li>
                                </li>s
                            </div>
                            <div style={{marginTop:"44px"}}>
                                <li>
                                    <div>
                                        <p><a href="" style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>Verificar Recursos Tecnológicos</a></p><p>Nesta etapa, o professor escolhe a ferramenta, de acordo com a realidade da escola. Portanto, deve ser verificada a disponibilidade de computadores com acesso à Internet aos alunos, investimentos em equipamentos e recursos, entre outros. Dessa forma, será possível adaptar os exemplos e sugestões de acordo com a realidade da escola. Como material de apoio para os professores, o TAEP4.0 oferece sugestões de ferramentas para Gamificação, Robótica, Programação, Realidade Aumentada e Storytelling Digital.</p>
                                    </div>
                                </li>
                            </div>
                            <div style={{marginTop:"44px"}}>
                                <li>
                                    <div>
                                        <p><a href="" style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>Preparar Avaliação Diagnóstica</a></p><p>Esta etapa apresenta a necessidade de realizar uma avaliação diagnóstica com os alunos. Assim, será possível alinhar o escopo, além de perceber as dificuldades e necessidades da turma. Essa etapa pode facilitar a escolha dos elementos apropriados, como problemas, projetos, ferramentas, materiais, entre outros. Portanto, são apresentadas sugestões sobre como realizar a avaliação diagnóstica na sala de aula.</p>
                                    </div>
                                </li>
                            </div>
                            <div style={{marginTop:"44px"}}>
                                <li>
                                    <div>
                                        <p><a href="" style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>Definir Desafios Problemas</a></p><p>Nesta etapa, a escolha dos desafios a serem trabalhados na solução de problemas é incentivada. Nesta atividade, a construção do conhecimento ocorre por meio da discussão do problema em grupos. Os alunos estudam um assunto específico, anotam suas dúvidas ou dificuldades e, em seguida, apresentam os problemas resolvidos. Além disso, são apresentados alguns exemplos de problemas que podem estar vinculados a projetos.</p>
                                    </div>
                                </li>
                            </div>
                            <div style={{marginTop:"44px"}}>
                                <li>
                                    <div>
                                        <p><a href="" style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>Definir Projeto</a></p><p>Nesta etapa, o projeto é delimitado ajustando as etapas anteriores. Na aprendizagem baseada em projeto, os alunos se envolvem em um processo de pesquisa, procuram recursos e aplicação prática de informações até chegarem a uma solução ou produto.</p>
                                    </div>
                                </li>
                            </div>
                            <div style={{marginTop:"44px"}}>
                                <li>
                                    <div>
                                        <p><a href="" style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>Preparar Materiais de Apoio</a></p><p>Para esta etapa, as etapas anteriores precisam ser bem definidas: escopo, ferramentas, problemas e design. Além disso, a avaliação diagnóstica deve ter sido aplicada. Dessa forma, será possível conhecer as necessidades dos alunos e, posteriormente, será mais fácil produzir os materiais de apoio. Os materiais de apoio consistem em tudo o que os alunos usarão durante a atividade, incluindo slides, planilhas, canetas, manuais, entre outros.</p>
                                    </div>
                                </li>
                            </div>
                            <div style={{marginTop:"44px"}}>
                                <li>
                                    <div>
                                        <p><a href="" style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>Organizar Projeto</a></p><p>Nesta etapa, é indicado organizar os materiais de apoio, escolher a configuração da sala de aula que permita a interação entre os participantes. Para isso, são levados em consideração o tamanho da sala de aula, número de cadeiras e mesas, computadores com acesso à internet, entre outros. Em geral, a logística da sala de aula deve ser projetada para reduzir riscos e evitar desconforto.</p>
                                    </div>
                                </li>
                            </div>
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export {HelpPlanejamento}