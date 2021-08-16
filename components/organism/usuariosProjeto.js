import styled from "styled-components";
import CardUser from "../molecules/cardUsuario";

const UsuariosProjetos = ({usuarios,onClick}) => {
    
    return(
        
        <div >
            <div>
                <button style={{width:"100%", padding:"14px"}} onClick={onClick}> Vincular usuario </button>
            </div>
            <div>
                {
                    usuarios.map((item) =>(
                        <CardUser usuario={item}/>
                    ))
                }
            </div>

        </div>
    )
}

export default UsuariosProjetos;

