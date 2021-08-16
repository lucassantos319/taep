import styled from "styled-components";
import Paragrafo from "../atoms/tipografia/paragrafo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsProjetoAluno = ({idProjeto}) => {
    return(
        
        <Div1>
            <Tabs>
                <TabList>
                    <Tab>Descrição</Tab>
                    <Tab>Atividades</Tab>
                    <Tab>Avaliações do Projeto</Tab>
                    <Tab>Avisos</Tab>
                </TabList>

                {/*Descrição*/}
                <TabPanel>
                    <DivInterna>
                        <h2>Any content 1</h2>
                    </DivInterna>
                </TabPanel>

                {/*Atividade*/}
                <TabPanel>
                    <DivInterna>
                        <h2>Any content 3</h2>
                    </DivInterna>
                </TabPanel>
                

                {/* Avaliação */}
                <TabPanel>
                    <DivInterna>
                        <h2>Any content 4</h2>
                    </DivInterna>
                </TabPanel>

                {/* Avisos */}
                <TabPanel>
                    <DivInterna>
                        <h2>Any content 5</h2>
                    </DivInterna>
                </TabPanel>
            </Tabs>
        </Div1>
    )
}

export default TabsProjetoAluno

const Div1 = styled.div`
    padding: 36px;
    height: 100%;
    width: 80%;

    ul{
        margin: 0px;
        li{
            font-weight: 600;
        }
    }
`
const DivInterna = styled.div`
    padding: 12px;
    border-top-color: transparent;
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: rgb(170, 170, 170);
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgb(170, 170, 170);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(170, 170, 170);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
`