

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardUser = ({ usuario }) => {
   
    var userType;

    if ( usuario.user_type == 1)
        userType = "Professor"
    else
        userType = "Aluno"

    return (
        <>

            <Card style={{marginTop:"20px"}}>
                <CardContent>
                    <Typography variant="h7" gutterBottom>
                        {usuario.first_name+" "+usuario.last_name}
                    </Typography>
                    
                    <Typography color="textSecondary">
                        {usuario.email+" - "+ userType}
                    </Typography>
                    
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </>
    );
}
export default CardUser;
