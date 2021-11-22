import Image from 'next/image'
import PlanningImg from '../../../public/img/planning/planning.png'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useState} from 'react';
import imgVerifica from '../../../public/img/verificaTec.jpg'
import imgDefinirProjeto from "../../../public/img/definirProjeto.jpg";
import imgOrganizacao from "../../../public/img/organizeMaterial.jpg";
import imgMaterialApoio from '../../../public/img/prepararAtividade.png';
import {useRouter} from 'next/router';

const HelpPlanejamento = () => {

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
                        <p>Na atividade de Planejamento, há sete etapas descritas a seguir:</p>
                        
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList  onChange={handleChange} aria-label="lab API tabs example">
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
                                                    <li><span>Qual aula será trabalhada? Qual é a necessidade desta aula?</span></li>
                                                    <li><span>Qual disciplina? Qual conteúdo?</span></li>
                                                    <li><span>Quais temas relacionados aos <a href="/ajuda/ods">ODS</a> você pode incluir em sua proposta de aula?</span></li>
                                                    <li><span>Além desta disciplina, em quais áreas do <a href="/ajuda/steam">STEAM</a> você pretende trabalhar em sala de aula?</span></li>
                                                    <div>
                                                        <li><span>Quais habilidades e competências do século 21 você deseja desenvolver?</span></li>
                                                        <br/>
                                                        <span>Ex: </span><a href="/ajuda/steam/socioemotional-skills">Socioemocional</a>, <span> 
                                                            <span><a href="/ajuda/steam/cognitivas">Cognitivo</a>, </span>
                                                            <span><a href="/ajuda/steam/organizational-skills">Organizacional</a>, </span>
                                                            <span><a href="/ajuda/steam/behavioral-skills">Comportamental</a> e </span> 
                                                            <span><a href="/ajuda/steam/communicative-skills">Comunicativo</a></span>
                                                        </span>
                                                    </div>
                                                        
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                
                                <TabPanel value="2">
                                    <div style={{display:"flex"}}>
                                        <div style={{width:"60%"}}>
                                            <div style={{width:"70%"}}>
                                                <Image src={imgVerifica}></Image>
                                            </div>
                                            <div style={{width:"70%"}}>
                                                <h3>Qual Tecnologia escolher para se trabalhar Educação 4.0 nas escolas?</h3>
                                                <span>O professor precisa escolher a ferramenta, conforme a realidade da sua escola. Deve-se verificar se tem computadores com acesso a internet disponível aos alunos, se há investimentos para peças e equipamentos, dentre outros. Adapte os exemplos, a partir das suas necessidades.</span>
                                            </div>
                                        </div>
                                        <div style={{width:"40%"}}>
                                            <div style={{marginRight:"10%"}}>
                                                <h3>Sugestões de Tecnologias para apoiar a Educação.</h3>
                                                <div>
                                                    <button onClick={() => {
                                                        router.push("/ajuda/verifica-tecnologia/gamificacao")
                                                    }} style={{paddingTop:"10px",paddingBottom:"10px",width:"100%"}}>Gamificação</button>

                                                    <button onClick={() => {
                                                        router.push("/ajuda/verifica-tecnologia/programacao-visual")
                                                    }} style={{paddingTop:"10px",marginTop:"20px",paddingBottom:"10px",width:"100%"}}>Programação em blocos</button>

                                                    <button onClick={() => {
                                                        router.push("/ajuda/verifica-tecnologia/gamificação")
                                                    }} style={{paddingTop:"10px",marginTop:"20px",paddingBottom:"10px",width:"100%"}}>Robótico Educacional</button>

                                                    <button onClick={() => {
                                                        router.push("/ajuda/verifica-tecnologia/gamificação")
                                                    }} style={{paddingTop:"10px",marginTop:"20px",paddingBottom:"10px",width:"100%"}}>Realidade Aumentada</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>            
                                </TabPanel>
                                <TabPanel value="3">
                                    <div>
                                        <div>
                                            <h3>Por que Avaliação Diagnóstica ?</h3>
                                            <p>A avaliação diagnóstica ajuda identificar a realidade de cada turma, observar se os estudantes apresentam ou não habilidades e pré-requisitos para os processos de ensino e aprendizagem, e refletir sobre as causas das dificuldades recorrentes, definindo assim as ações para sanar os problemas.</p>
                                            <p>Sugestão: Faça uma avaliação interativa, use as ferramentas de Gamificação para motivar ainda mais os alunos (disponíveis na Seção Verificar Recursos Tecnológicos).</p>
                                        </div>
                                        <div style={{marginTop:"30px"}}>
                                            <h3>O que avaliar ?</h3>
                                            <ul>
                                                <li style={{textDecoration:"none"}}>Qual o nível de conhecimento sobre o assunto?</li>
                                                <li style={{textDecoration:"none"}}>Qual a expectativa em relação ao projeto?</li>
                                                <li style={{textDecoration:"none"}}>Quais conhecimentos e habilidades relevantes eles precisam aprender? O que eles já sabem?</li>
                                                <li style={{textDecoration:"none"}}>Quão bem eles podem aprender? Quais habilidades serão trabalhadas no projeto?</li>
                                                <li style={{textDecoration:"none"}}>Qual motivação e interesses, atitudes em relação aos métodos de ensino e aprendizagem?</li>
                                                <li style={{textDecoration:"none"}}>Quais são os obstáculos para a aprendizagem, como ansiedade, resolução de problemas, falta de concentração, acesso a computadores?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="4">
                                    <div>
                                        <div>
                                            <h3>Por que trabalhar com problemas?</h3>
                                            <p>Essa prática permite a construção do conhecimento, a partir da discussão do problema em grupo. Dessa forma, o aluno estuda individualmente sobre determinado assunto, antes da aula, e anota todas as suas dúvidas ou dificuldades. Na aula, acontecem discussões sobre os problemas resolvidos pelos grupos. Leia mais!</p>
                                            <p><a href="https://silabe.com.br/blog/aprendizagem-baseada-em-problemas-pbl/">https://silabe.com.br/blog/aprendizagem-baseada-em-problemas-pbl/ </a></p>
                                        </div>
                                        <div style={{marginTop:"30px"}}>
                                            <h3>Sugestões de Desafios Problemas</h3>
                                            <p>Estes problemas podem ser vinculados aos projetos, servir para retomar os conteúdos, dinamizar os processos de ensino e aprendizagem, fazer o estudante pensar fora da caixa em busca de soluções para os problemas propostos . Portanto, sendo possível trabalhar o erro, o engajamento e o protagonismo do aluno.</p>
                                            <ul>
                                                <li>
                                                    <a href="https://rachacuca.com.br/logica/problemas/">Racha Cuca - Problemas de lógica</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.geniol.com.br/logica/desafios/">Geniol - Desafios de lógica</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.rpm.org.br/cdrpm/50/7.htm">Problema do Bilhar - Situação-Problema</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.noas.com.br/ensino-medio/matematica/aritmetica/arithmetic/">NOAS - Problemas Matemáticos</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="5">
                                    <div >
                                        <div style={{display:"flex",marginBottom:"60px"}}>
                                            <div style={{width:"50%"}}>
                                                <Image src={imgDefinirProjeto}></Image>
                                            </div>
                                            <div style={{width:"50%",marginLeft:"40px"}}>
                                                <h3>Por que trabalhar com projetos educativos?</h3>
                                                <p>Essa prática ajuda na construção do conhecimento, por meio de um trabalho longo de investigação que responda a uma pergunta complexa, problema ou desafio. A partir dessa questão inicial, os alunos se envolvem em um processo de pesquisa, elaboração de hipóteses, busca por recursos e aplicação prática da informação até chegar a uma solução ou produto final.</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div style={{marginTop:"40px"}}>
                                            <div style={{textAlign:"center"}}>
                                                <h2>Educação por Projetos: Organizando Times</h2>
                                            </div>
                                            <div>
                                                <h3>Objetivos</h3>
                                                <p>Fomentar o desenvolvimento; Provocar e desenvolver nos participantes o autoconhecimento; Trabalhar o protagonismo juvenil responsável; Identificar as características de cada participante; Organizar uma equipe multidisciplinar.</p>
                                            </div>
                                            <div style={{marginBottom:"40px"}}>
                                                <h3>Configuração do Ambiente</h3>
                                                <p>Sugerimos que o ambiente seja organizado de maneira que os participantes possam se movimentar livremente, com mesas e cadeiras adequadas ao trabalho em grupo, assim como os seguintes recursos: - folha de papel - canetas coloridas e/ou hidrográficas;</p>
                                                <div>
                                                    <p>A realização dessa atividade foi planejada para ocorrer nas etapas descritas a seguir:</p>
                                                    <ol>
                                                        <li>
                                                            <p>
                                                                Apresente aos participantes a motivação para usar uma ferramenta para a organização dos times 
                                                                (<a href="https://artia.com/kanban/">kanban</a>, 
                                                                <a href="https://rockcontent.com/br/blog/canvas/">canvas</a>, 
                                                                <a href="https://trello.com/">trello</a>);
                                                            </p>
                                                        </li>
                                                        <li>
                                                           <p>Convide os participantes a sugerirem habilidades e competências para o desenvolvimento de um projeto genérico. Comumente serão citadas habilidades e competências similares ou relacionadas que podem ser agrupadas, então junto a eles discuta quais serão mantidas e quais serão retiradas, mantendo apenas 4 (15 minutos);</p> 
                                                        </li>
                                                        <li>
                                                            <p>Docente faça uma ficha das competências com a quantidade de estrelas correspondentes, a partir da seguinte regra: o participante não pode se autoavaliar com o mesmo número de estrelas para duas habilidades/competências diferentes. Por exemplo, um participante não pode ter cinco estrelas na competência A e competência B simultaneamente (10 minutos);</p>
                                                        </li>
                                                        <li>
                                                            <p>Incentive os participantes a customizar o avatar na ficha ou criar um desenho com o qual ele se identifique (5 minutos);</p>
                                                        </li>
                                                        <li>
                                                            <p>Solicite que a turma indique os seus líderes, você pode indicar que eles escolham um líder por mesa, por exemplo – a depender da organização do espaço e quantidade de participantes (5 minutos);</p>
                                                        </li>
                                                        <li>
                                                            <p>Combine junto aos líderes de que maneira (ordem, quantidade de pessoas por turno) eles irão escolher os membros do time (3 minutos);</p>
                                                        </li>
                                                    </ol>
                                                </div>   
                                            </div>
                                            <hr/>
                                            <h3>Sugestão extraída do Manual Pedagógico do Multiplicador produzido pelo CESAR (2018).</h3>
                                        </div>
                                    </div>  
                                </TabPanel>
                                <TabPanel value="6">
                                    <div>
                                        <div style={{display:"flex",marginBottom:"60px"}}>
                                            <div style={{width:"50%"}}>
                                                <Image src={imgMaterialApoio}></Image>
                                            </div>
                                            <div style={{width:"50%",marginLeft:"40px"}}>
                                                <p>Para essa etapa, os passos anteriores precisam estar bem definidos: escopo, ferramentas, problemas e projeto. Além disso, deve ter sido aplicado a avaliação diagnóstica. Dessa maneira, será possível conhecer as necessidades dos alunos, posteriormente será mais fácil produzir os materiais de apoio.</p>
                                                <p>Os materiais de apoio consistem em tudo que será usado pelos alunos, durante a atividade. Desde slides sobre o conteúdo até os recursos necessários para a execução da proposta, incluindo: folha com o passo-passo, post-it, canetas, manuais, dentre outros.</p>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="7">
                                    <div>
                                        <div style={{display:"flex",marginBottom:"60px"}}>
                                            <div style={{width:"50%"}}>
                                                <Image src={imgOrganizacao}></Image>
                                            </div>
                                            <div style={{width:"50%",marginLeft:"40px"}}>
                                                <p>Organize os materiais de apoio. Faça um kit educacional com os elementos que você providenciou.</p>
                                                <p>Escolha a configuração da sala de aula que maior permita interação entre os participantes, conforme o tamanho da sala de aula, quantidade de cadeiras e mesas, computadores com acesso a internet, dentre outros aspectos. De modo geral, a logística da sala de aula deve ser projetada para reduzir riscos, evitar desconforto e garantir bons resultados da turma.</p>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}

export {HelpPlanejamento}