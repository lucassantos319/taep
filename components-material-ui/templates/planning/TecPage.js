import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TecPage = ({tec}) => {

    return (
        <>
            <h5>Tecnologias disponiveis</h5>
            <div style={{display:'flex',marginTop:'30px'}}>
                {
                    tec.map((element) => (
                        <div style={{marginLeft:'20px'}}>
                            <Card onClick={() => {document.location.href=element.Links}} style={{ onHover:'cursor:pointer',marginBotton:'20px'}} sx={{ maxWidth:180, minWidth: 180 }}>
                                <CardContent>
                                    <Typography variant="" component="div">
                                        {element.tecnologia}
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

export {TecPage}