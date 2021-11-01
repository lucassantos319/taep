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


function getStyles(name, personName, theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

const TelaEscopo = ({escopo}) => {
    
    const {register,handleSubmit} = useForm();
    const [selectStream,setSelectStream] = useState([]);
    const [selectSkill,setSelectSkill] = useState([]);

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
        'Socioemotional',
        'Cognitive',
        'Organizational',
        'Behavioral',
        'Communicative'
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
                    trigger="O que é a definição de escopo ?"
                    >
                    <EscopoDescription/>
                </Collapsible>
            </div>
            <div style={{marginTop:'20px',paddingBottom:'20px',borderRadius:'10px',border:'1px solid black'}}>
                <div style={{marginTop:'24px',marginLeft:'20px'}}>
                    <div style={{fontSize:'20px',textAlign:'center'}}>
                        <h5>Documento de escopo</h5>
                    </div>
                    <div style={{}}>
                        <form>
                            <div style={{display:'flex',marginTop:'20px'}}>
                                <span style={{marginRight:'20px',marginTop:'5px'}}>1. Quais disciplinas serão trabalhadas ?</span>
                                <TextField
                                    style={{width:'50%'}}
                                    placeholder="Disciplina do projeto"
                                    multiple
                                    required
                                    {...register("disciplina")}/>
                            </div>
                            <div>
                                <div style={{display:'flex',marginTop:'20px'}}>
                                    <span style={{marginRight:'20px',marginTop:'5px'}}>2. Quais temas relacionados aos ODS você pode incluir em sua proposta de aula?</span>
                                </div>
                                <div style={{display:'inline-block',marginTop:'20px'}}>
                                    <AllODS />
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
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )   
};
export default TelaEscopo;
