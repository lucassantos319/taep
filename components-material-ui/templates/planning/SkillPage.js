import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SkillPage = ({skills}) => {

    return (
        <>
            <h5>Elementos de skills</h5>
            <hr/>
            <div style={{display:'flex',marginBottom:'20px'}}>
                {
                    skills.map(element => (
                        <div style={{marginLeft:'20px'}}>
                            <Card onClick={()=>{}} style={{marginBotton:'20px'}} sx={{ maxWidth:180, minWidth: 140 }}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {element.skill}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export {SkillPage}