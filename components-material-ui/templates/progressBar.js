import React,{useState} from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MyProgressBar = ({progressValue}) => {
   
    return(
        <div style={{marginTop:'20px'}}>
            <ProgressBar stepPositions={[20,40,60,80,100]} width={'95%'} percent={progressValue}>
                <Step>
                    {({ accomplished, index }) => 
                    (
                        <>
                            <div >
                                {
                                    accomplished ? 
                                        <>
                                            <div style={{marginLeft:'25px',marginTop:'40px',marginBottom:'10px',height:'30px',width:'30px',backgroundColor:'blue',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'black',fontWeight:'', textAlign:'center'}}>Definir Escopo</span>
                                        </>:
                                        <>
                                            <div style={{marginLeft:'25px',marginTop:'40px',marginBottom:'10px',height:'20px',width:'20px',backgroundColor:'grey',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'grey', textAlign:'center'}}>Definir Escopo</span>
                                        </>
                                }
                            </div>
                        </>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => 
                    (
                        <>
                            <div >
                                {
                                    accomplished ? 
                                        <>
                                            <div style={{marginLeft:'25px',marginTop:'50px',marginBottom:'10px',height:'30px',width:'30px',backgroundColor:'blue',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'black',fontWeight:'', textAlign:'center'}}>Verificar recurso tecnológicos</span>
                                        </>:
                                        <>
                                            <div style={{marginLeft:'25px',marginTop:'50px',marginBottom:'10px',height:'20px',width:'20px',backgroundColor:'gray',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'grey', textAlign:'center'}}>Verificar recurso tecnológicos</span>
                                        </>
                                }
                            </div>
                        </>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => 
                    (
                        <>
                            <div >
                                {
                                    accomplished ? 
                                        <>
                                            <div style={{marginLeft:'20px',marginTop:'50px',marginBottom:'10px',height:'30px',width:'30px',backgroundColor:'blue',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'black',fontWeight:'', textAlign:'center'}}>Definir desafio problema</span>
                                        </>:
                                        <>
                                            <div style={{marginLeft:'20px',marginTop:'50px',marginBottom:'10px',height:'20px',width:'20px',backgroundColor:'grey',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'grey', textAlign:'center'}}>Definir desafio problema</span>
                                        </>
                                }
                            </div>
                        </>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => 
                    (
                        <>
                            <div >
                                {
                                    accomplished ? 
                                        <>
                                            <div style={{marginLeft:'25px',marginTop:'40px',marginBottom:'10px',height:'30px',width:'30px',backgroundColor:'blue',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'black',fontWeight:'', textAlign:'center'}}>Definir projeto</span>
                                        </>:
                                        <>
                                            <div style={{marginLeft:'25px',marginTop:'40px',marginBottom:'10px',height:'20px',width:'20px',backgroundColor:'grey',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'grey', textAlign:'center'}}>Definir projeto</span>
                                        </>
                                }
                            </div>
                        </>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => 
                    (
                        <>
                            <div >
                                {
                                    accomplished ? 
                                        <>
                                            <div style={{marginLeft:'25px',marginTop:'50px',marginBottom:'10px',height:'30px',width:'30px',backgroundColor:'blue',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'black',fontWeight:'', textAlign:'center'}}>Preparar materiais de apoio</span>
                                        </>:
                                        <>
                                            <div style={{marginLeft:'25px',marginTop:'50px',marginBottom:'10px',height:'20px',width:'20px',backgroundColor:'grey',borderRadius:'50%'}}>
                                            </div>
                                            <span style={{display:'block', width:'80px',color:'grey', textAlign:'center'}}>Preparar materiais de apoio</span>
                                        </>
                                }
                            </div>
                        </>
                    )}
                </Step>
                
                
            </ProgressBar>
        </div>
    )   
};
export default MyProgressBar;