import { IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import * as FaIcons from "react-icons/fa";
import Typography from '@material-ui/core/Typography';

const CardUser = ({ usuario,id }) => {
   
    var userType;

    if ( usuario.user_type == 1)
        userType = "Professor"
    else
        userType = "Aluno"

    return (
        <>

            <Card id={id} style={{marginTop:"20px"}}>
                <CardContent>
                    <div style={{display:'flex'}}>
                        <div style={{flex:1, width:'60%'}}>
                            <Typography variant="h6" gutterBottom>
                                {usuario.first_name+" "+usuario.last_name}
                            </Typography>
                            
                            <Typography color="textSecondary">
                                {usuario.email+" - "+ userType}
                            </Typography>
                            
                        </div>
                        <div style={{float:'right'}}>
                            <IconButton aria-label="Delete person">
                                <FaIcons.FaTrash/>
                            </IconButton>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default CardUser;
