import styled from "styled-components";

const CardAviso = ({id, messagesData,className}) => {
    
    var messageData;
    if ( id != null ){
        messageData = messagesData.find( x => x.id == id);
    }
    
    
    return(
        <DivCardMessage className={className}>
            <div style={{marginLeft:"20px"}}>

                <div style={{marginTop:"20px"}}>
                    <h3> {messageData == undefined ? "":messageData.titulo} </h3>
                </div>

                <div style={{marginTop:"35px"}}>
                    <h5>  {messageData == undefined ? "":messageData.descricao}</h5>
                </div>
            </div>

        </DivCardMessage>
    )
}
export default CardAviso

const DivCardMessage = styled.div`
    padding: 6px;
    width: 100%;
    height: 463px;
    background-color: #FFF;

    overflow-y: scroll;
    display: block;
`