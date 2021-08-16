import styled from "styled-components";
import Paragrafo from "../atoms/tipografia/paragrafo";
import FormShower from "./formShower";
const CardTexto = ({id, messagesData,className}) => {
    
    var messageData;
    if ( id != null ){
        messageData = messagesData.find( x => x.atividadeId == id);
    }
    
    
    return(
        <DivCardMessage className={className}>
            <Paragrafo inputMargin="0 0 12px 0" inputColor="RGB(59, 57, 57)" inputFontSize="16px" inputFontWeight="700" inputLineHeigth="17px">
                {messageData == undefined ? "":messageData.title}
            </Paragrafo>

            <Paragrafo inputMargin="0 0 6px 0" inputColor="RGB(113, 113, 113)" inputFontSize="14px" inputLineHeigth="15px">
                {messageData == undefined ? "":messageData.description}
            </Paragrafo>

            {messageData != undefined? messageData.data.length > 0 &&
                <div style={{marginTop:'20px'}}>
                    <FormShower messageData={messageData.data}/>
                </div>:""
            }
        
        </DivCardMessage>
    )
}
export default CardTexto

const DivCardMessage = styled.div`
    padding: 6px;
    width: 100%;
    height: 463px;
    background-color: #FFF;

    overflow-y: scroll;
    display: block;
`