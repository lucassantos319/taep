import Image from 'next/image'
import PlanningImg from '../../../public/img/verification/verification.png'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useState} from 'react';
import {useRouter} from 'next/router';
import imgConduzirAvaliacao from '../../../public/img/verification/conduzirAvaliacao.png'
import imgShared from '../../../public/img/verification/shared.png'


const HelpVerificacao = () => {

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
                        <p>Na atividade Verificação, existem duas etapas descritas a seguir:</p>
                        
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList  onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Conduzir Avaliação Formativa" value="1" />
                                        <Tab label="Aplicar Projeto" value="2" />
                                    </TabList>
                            
                                    <TabPanel value="1">
                                        <div style={{display:"flex",marginBottom:"60px"}}>
                                            <div style={{width:"50%"}}>
                                                <Image src={imgConduzirAvaliacao}></Image>
                                            </div>
                                            <div style={{width:"50%",marginLeft:"40px"}}>
                                                <h2>O aluno é avaliado ao longo do processo de aprendizagem</h2>
                                                <p>Como o professor irá acompanhar os estudantes, será mais fácil para esse educador verificar a evolução do aluno, a aquisição do conhecimento, a melhora de algumas habilidades. Entretanto, pode ser que esse aluno esteja com dificuldades, então os possíveis problemas já podem ser resolvidos. Dessa forma, essas percepções e observações devem ser registradas também.</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div style={{display:"flex",marginBottom:"60px"}}>
                                            <div style={{width:"50%"}}>
                                                <Image src={imgShared}></Image>
                                            </div>
                                            <div style={{width:"50%",marginLeft:"40px"}}>
                                                <h2>Chegamos na última etapa!</h2>
                                                <p>Para finalizar, dê oportunidade para os seus alunos se autoavaliarem, refletirem, esboçarem percepções e experiências, comentarem sobre pontos positivos e o que poderá ser melhorado em projetos futuros, dentre outros.</p>
                                                <p>Em sequência, possibilite os estudantes apresentarem os seus trabalhos. Por exemplo: monte um estande numa feira do conhecimento, prepare um evento e chame outras turmas para prestigiarem os projetos, ou até mesmo, permita uma apresentação interna na turma.</p>
                                            </div>
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

export {HelpVerificacao}