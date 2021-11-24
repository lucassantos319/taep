import { IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as FaIcons from "react-icons/fa";


const CardUser = ({usuario,id,usuarioCreatorId,usuarioId}) => {

    var userType = "";

    if ( usuario.user_type == 1)
        userType = "Professor"
    else
        userType = "Aluno"

    return (
        <>
            <Card id={id} style={{marginTop:"20px"}}>
                <CardContent>
                    <div style={{display:"flex"}}>
                        <div style={{flex:1, width:'60%'}}>
                            <div>
                                <h6>{usuario.first_name+" "+usuario.last_name}</h6>
                            </div>
                            <div>
                                <div>
                                    <span>{usuario.email+" - "+userType}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{float:'right'}}>
                            {
                                usuarioCreatorId == usuarioId?    
                                    <IconButton aria-label="Delete person">
                                        <FaIcons.FaTrash/>
                                    </IconButton>:
                                    <div></div>
                            }
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default CardUser;
