import { TextField } from '@material-ui/core';
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from '@mui/material/styles';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import { useForm } from 'react-hook-form';
import Collapsible from 'react-collapsible';
import EscopoDescription from '../../organism/planning/escopoDescription';
import AllODS from '../../organism/planning/AllODS';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function getStyles(name, personName, theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

const TelaEscopo = ({escopo,setStep,step}) => {

    const {register,handleSubmit} = useForm();
    const [selectStream,setSelectStream] = useState([]);
    const [selectSkill,setSelectSkill] = useState([]);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 6 ? 6 : nextStep);
    };

    const MenuProps = {
        PaperProps: {
            style: {
                width: 500,
            },
        },
    };

    var stream = [
       'Ciências',
       'Tecnologia',
       'Engenharia',
       'Artes',
       'Matemática'
    ];

    var habilidades = [
        'Autoconhecimento',
        'Autoestima',
        'Autonomia',
        'Colaboração',
        'Confiança',
        'Empatia',
        'Ética',
        'Felicidade',
        'Paciência',
        'Responsabilidade',
        'Agilidade Para Tomar Decisões' ,
        'Empreendedorismo' ,
        'Generalização' ,
        'Interpretação' ,
        'Pensamento Abstrato' ,
        'Pensamento Crítico' ,
        'Reflexão' ,
        'Solução de Problemas' ,
        'Gerenciar tempo' ,
        'Liderança' ,
        'Planejamento' ,
        'Iniciativa',
        'Criatividade',
        'Inovação',
        'Fluência de Ideias',
        'Ética e Coerência',
        'Negociação',
        'Comunicação',
        'Outra',
    ];

    const theme = useTheme();
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectStream(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setSelectSkill(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return(
        <>
            <div style={{textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>
                <h3>Definindo o escopo</h3>
            </div>
            <div style={{width:'100%'}}>
                <Collapsible
                    triggerStyle={{padding:'10px',backgroundColor:"#c8c8c8"}}
                    trigger="O que é a definição de escopo ? (Clique
                        para saber mais)"
                    >
                    <EscopoDescription/>
                </Collapsible>
            </div>
            <form >
            <div style={{marginTop:'20px',paddingBottom:'60px',borderRadius:'10px',border:'1px solid black'}}>
                <div style={{marginTop:'24px',marginLeft:'20px'}}>
                    <div style={{fontSize:'20px',textAlign:'center'}}>
                        <h5>Documento de escopo</h5>
                    </div>
                    <div style={{}}>
                        <form >
                            <div style={{display:'flex',marginTop:'20px'}}>
                                <span style={{marginRight:'20px',marginTop:'5px'}}>1. Quais disciplinas serão trabalhadas ?</span>
                                <TextField
                                    id="Disciplinas"
                                    style={{width:'50%'}}
                                    placeholder="Disciplina do projeto"
                                    required
                                />
                            </div>
                            <div>
                                <div style={{display:'flex',marginTop:'20px'}}>
                                    <span style={{marginRight:'20px',marginTop:'5px'}}>2. Quais temas relacionados aos ODS você pode incluir em sua proposta de aula?</span>
                                </div>
                                <div style={{display:'inline-block',marginTop:'20px'}}>
                                    <Collapsible
                                        triggerStyle={{padding:'10px',backgroundColor:"#c8c8c8"}}
                                        trigger="ODS"
                                        >
                                            <div style={{marginTop:"2rem"}}>
                                                <AllODS />
                                            </div>
                                    </Collapsible>
                                </div>
                            </div>
                            <div>
                                <div style={{marginTop:'20px'}}>
                                    <span >3. Quais áreas do STEAM você pretende trabalhar em sala de aula?</span>
                                    <div style={{width:'80%', marginTop:'12px'}}>
                                        <FormControl style={{width:'100%'}}>
                                            <Select
                                                style={{width:'40%'}}
                                                multiple
                                                value={selectStream}
                                                onChange={handleChange}
                                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                      {selected.map((value) => (
                                                        <Chip key={value} label={value} />
                                                      ))}
                                                    </Box>
                                                  )}
                                                  MenuProps={MenuProps}
                                            >
                                                {stream.map((name) => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                        style={getStyles(name, selectStream, theme)}
                                                        >
                                                            {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{marginTop:'24px'}}>
                                    <span >4. Quais habilidades e competências do século 21 você deseja desenvolver?</span>
                                    <div style={{width:'80%',marginTop:'12px'}}>
                                        <FormControl style={{width:'100%'}}>
                                            <Select
                                                style={{width:'40%'}}
                                                multiple
                                                value={selectSkill}
                                                onChange={handleChange2}
                                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                      {selected.map((value) => (
                                                        <Chip key={value} label={value} />
                                                      ))}
                                                    </Box>
                                                  )}
                                                  MenuProps={MenuProps}
                                            >
                                                {habilidades.map((name) => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                        style={getStyles(name, selectSkill, theme)}
                                                        >
                                                            {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>

                                </div>
                            </div>
                            <div style={{marginTop:"2rem"}}>
                                <div style={{float:'right',marginRight:'20px'}}>
                                    <Button onClick={async () => {

                                        var trueODS = [];

                                        var allODS = document.getElementsByClassName("radio_check");
                                        for ( var i = 0 ; i < allODS.length ; i++ )
                                            if ( allODS[i].checked )
                                                trueODS.push(i+1);

                                        const obj = {
                                            "disciplinas":document.getElementById("Disciplinas").value,
                                            "ods": trueODS,
                                            "steam":selectStream,
                                            "skills":selectSkill
                                        };

                                        localStorage.setItem("escopo",JSON.stringify(obj));
                                        await alert("Salvo com sucesso");
                                        onChange(step+1);

                                    }}>Salvar</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </form>

        </>
    )
};
export default TelaEscopo;
