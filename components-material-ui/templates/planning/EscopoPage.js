import React from 'react';
import {ODSPage} from './ODSPage'
import {SteamPage} from './SteamPage';
import { SkillPage } from './SkillPage';

const EscopoPage = ({escopo}) => {
    console.log(escopo)
    return (
        <>
            <div style={{marginTop:'20px',marginBottom:'20px'}}>
                <h4>Disciplina: {escopo.escopo.disciplina}</h4>
            </div>
            <hr/>
            <div style={{marginTop:'30px'}}>
                <ODSPage ods={escopo.escopoOds}/>
            </div>
            <div style={{marginTop:'40px'}}>
                <SteamPage steam={escopo.escopoSteam}/>
            </div>
            <div style={{marginTop:'40px'}}>
                <SkillPage skills={escopo.escopoSkill}/>
            </div>

        </>
    )
}

export {EscopoPage}