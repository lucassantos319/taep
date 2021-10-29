import { TextField } from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import Collapsible from 'react-collapsible';
import EscopoDescription from '../../organism/planning/escopoDescription';
import Image from 'next/image';
import img from '../../../public/img/ods/ods-1.png'
import AllODS from '../../organism/planning/AllODS';

import { MenuProps, useStyles, options, options2 } from "./utils";


const TelaEscopo = ({escopo}) => {
    
    console.log(escopo)
    escopo={'teste':12}
    const {register,handleSubmit} = useForm();
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const isAllSelected =
      options.length > 0 && selected.length === options.length;
  
    const handleChange = (event) => {
      const value = event.target.value;
      if (value[value.length - 1] === "all") {
        setSelected(selected.length === options.length ? [] : options);
        return;
      }
      setSelected(value);
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
            <div style={{marginTop:'20px',paddingBottom:'20px',border:'1px solid black'}}>
                <div style={{marginTop:'24px',marginLeft:'20px'}}>
                    <div style={{fontSize:'20px'}}>
                        <span>Documento de escopo</span>
                    </div>
                    <div style={{}}>
                        <form>
                            <div style={{display:'flex',marginTop:'20px'}}>
                                <span style={{marginRight:'20px',marginTop:'5px'}}>1. Quais disciplinas serão trabalhadas ?</span>
                                <TextField
                                    style={{width:'50%'}}
                                    placeholder="Disciplina do projeto"
                                    required
                                    {...register("disciplina")}/>
                            </div>
                            <div>
                                <div style={{display:'flex',marginTop:'20px'}}>
                                    <span style={{marginRight:'20px',marginTop:'5px'}}>2. Quais temas relacionados aos ODS você pode incluir em sua proposta de aula?</span>
                                </div>
                                <div style={{display:'inline-block',marginTop:'30px',border:'1px solid black'}}>
                                    <AllODS />
                                </div>
                            </div>
                            <div>
                                <div style={{marginTop:'20px'}}>
                                    <span >3. Quais áreas do STEAM você pretende trabalhar em sala de aula?</span>
                                    <div style={{}}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="mutiple-select-label">STEAM</InputLabel>
                                            <Select
                                                labelId="mutiple-select-label"
                                                multiple
                                                value={selected}
                                                onChange={handleChange}
                                                renderValue={(selected) => selected.join(", ")}
                                                MenuProps={MenuProps}
                                            >
                                                <MenuItem
                                                value="all"
                                                classes={{
                                                    root: isAllSelected ? classes.selectedAll : ""
                                                }}
                                                >
                                                <ListItemIcon>
                                                    <Checkbox
                                                    classes={{ indeterminate: classes.indeterminateColor }}
                                                    checked={isAllSelected}
                                                    indeterminate={
                                                        selected.length > 0 && selected.length < options.length
                                                    }
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    classes={{ primary: classes.selectAllText }}
                                                    primary="Select All"
                                                />
                                                </MenuItem>
                                                {options.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    <ListItemIcon>
                                                    <Checkbox checked={selected.indexOf(option) > -1} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={option} />
                                                </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div style={{marginTop:'20px'}}>
                                    <span >4. Quais habilidades e competências do século 21 você deseja desenvolver?</span>
                                    <div style={{width:'80%'}}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="mutiple-select-label"></InputLabel>
                                            <Select
                                                labelId="mutiple-select-label"
                                                multiple
                                                value={selected}
                                                onChange={handleChange}
                                                renderValue={(selected) => selected.join(", ")}
                                                MenuProps={MenuProps}
                                            >
                                                <MenuItem
                                                value="all"
                                                classes={{
                                                    root: isAllSelected ? classes.selectedAll : ""
                                                }}
                                                >
                                                <ListItemIcon>
                                                    <Checkbox
                                                    classes={{ indeterminate: classes.indeterminateColor }}
                                                    checked={isAllSelected}
                                                    indeterminate={
                                                        selected.length > 0 && selected.length < options2.length
                                                    }
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    classes={{ primary: classes.selectAllText }}
                                                    primary="Select All"
                                                />
                                                </MenuItem>
                                                {options2.map((options2) => (
                                                <MenuItem key={options2} value={options2}>
                                                    <ListItemIcon>
                                                    <Checkbox checked={selected.indexOf(options2) > -1} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={options2} />
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
