import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SteamPage = ({steam}) => {
    return (
        <>
            <h5>Elementos do Steam</h5>
            <hr/>
            <div style={{display:'flex',marginBottom:'20px'}}>
                {
                    steam.map(element => (
                        <div style={{marginLeft:'20px'}}>
                            <Card style={{marginBotton:'20px'}} sx={{ maxWidth:180, minWidth: 140 }}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {element.steam}
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

export {SteamPage}