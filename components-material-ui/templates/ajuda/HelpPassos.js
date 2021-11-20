import Image from 'next/image';
import PassImg from '../../../public/img/process.png'

const HelpPassos = () => {

    return (
        <>
            <div  style={{marginTop:'50px',width:'80%',marginLeft:'10%'}}>
                <div>
                    <p style={{fontSize:'18px'}}>O TAEP4.0 busca preparar os alunos para o desenvolvimento de projetos colaborativos, com recursos e processos tecnológicos que apoiam o ensino e a aprendizagem. O TAEP4.0 apresenta exemplos de uso, notas explicativas e ferramentas que podem ajudar o professor a criar uma aula baseada no contexto da Educação 4.0. O TAEP4.0 consiste em treze etapas distribuídas em atividades de planejamento, execução e verificação.</p>
                </div>
                <div style={{paddingBottom:'60px'}}>
                    <Image src={PassImg}></Image>
                </div>
            </div>
        </>
    );
}

export {HelpPassos}