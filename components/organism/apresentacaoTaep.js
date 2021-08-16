import styled from "styled-components";

import DivElementosCentralizados from "../atoms/div/divElementosCentralizados";
import Paragrafo from "../atoms/tipografia/paragrafo"
import Video from "../atoms/video/video";

const ApresentacaoTaep = ({src, titulo, texto}) => {
    return(
        <DivElementosCentralizados width="calc(100vw - 300px)">
            <DivElementosCentralizados
            >
                <DivElementosCentralizados
                    height="230px"
                    width="840px"
                    backgroundColor="rgba(6, 11, 38)"
                    borderRadius="12px"
                    boxShadow="10px 10px 5px 0px rgba(199,199,199,1)"
                    margin="0 0 36px 0"
                >
                    <Paragrafo color="#FFF" fontSize="36px" fontWeight="700">
                        {titulo}
                    </Paragrafo>
                    <Paragrafo color="#FFF" fontSize="28px">
                        {texto}
                    </Paragrafo>
                </DivElementosCentralizados>
            </DivElementosCentralizados>

            <DivElementosCentralizados>
                <Video
                    height="230px"
                    width="408px"
                />
            </DivElementosCentralizados>

        </DivElementosCentralizados>
    )
}
export default ApresentacaoTaep;

const Div1 = styled.div` 

`