import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardUser = ({ usuario }) => {
   
    var userType;

    if ( usuario.data.user_type == 1)
        userType = "Professor"
    else
        userType = "Aluno"

    return (
        <>

            <Card style={{marginTop:"20px"}}>
                <CardContent>
                    <Typography variant="h7" gutterBottom>
                        {usuario.data.first_name+" "+usuario.data.last_name}
                    </Typography>
                    
                    <Typography color="textSecondary">
                        {usuario.data.email+" - "+ userType}
                    </Typography>
                    
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </>
    );
}

export default CardUser;
