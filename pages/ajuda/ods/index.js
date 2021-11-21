import React from 'react'
import HelpHeader from '../../../components-material-ui/templates/ajuda/HelpHeader';
import imgODS from '../../../public/img/ods/objetivos-desenvolvimento-sustenavel.png';

const ODS = () => {

    return (
        <>
            <div>
                <HelpHeader title={"teste"}/>
            </div>
            <div style={{display:'flex'}}>

                <div style={{width:"60%"}}>
                    <div>
                        <img src={imgODS}></img>
                    </div>
                    <div></div>
                </div>

                <div style={{width:"40%"}}> 
                    <h4>
                        Como cultivar valores para um boa cidadania?
                    </h4>
                    <p> 
                        Os temas relacionados aos Objetivos de Desenvolvimento Sustentável (ODS) da Organização das Nações Unidas 
                        (ONU) foram escolhidos pela necessidade de abordar, a cada dia mais, os problemas que estão afetando a
                        qualidade de vida do homem. Desse modo, acredita-se que será possível cultivar valores para uma boa 
                        cidadania, como responsabilidade, cooperação, empatia e engajamento na construção de uma sociedade melhor.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ODS ;