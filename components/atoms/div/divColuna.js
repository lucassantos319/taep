import styled from "styled-components";

const DivColuna = ({className, children, id, margin, width, height, border, textAlign, display, flexDirection, justifyContent}) => {
    return(
        <Div1 
            className={className}
            id={id}
            
            margin={margin}
            width={width}
            height={height}
            border={border}
            textAlign={textAlign}
            display={display}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
        >
            {children}
        </Div1>
    )
}
export default DivColuna;

const Div1 = styled.div` 
    margin: ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border};
    text-align: ${props => props.textAlign};

    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
`