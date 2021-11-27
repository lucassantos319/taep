import CardUser from "../molecules/cardUsuario";

const UsuariosProjetos = ({projectInfo,usuarios,type,onClick,userId}) => {
    var i = 0;
    return(
        
        <div>
           { type == 1 && projectInfo.userCreator.id==userId?
                <div>
                <button style={{width:"100%", padding:"14px"}} onClick={onClick}> Incluir participante </button>
                </div>:<div></div>
            } 
            <div>
                {
                    usuarios.map((item) => {
                            <CardUser usuario={item} id={i} usuarioCreatorId={projectInfo.userCreator.id} usuarioId={userId}/>
                            i++;
                        }
                    )
                }
            </div>

        </div>
    )
}

export default UsuariosProjetos;

