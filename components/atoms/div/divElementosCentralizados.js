import styled from "styled-components";

const   DivElementosCentralizados = ({className, top,left,children, id, margin, padding, width, height, border, textAlign, borderRadius, backgroundColor, display, flexDirection, justifyContent, boxShadow}) => {
    return(
        <Div 
            className={className}
            id={id}
            
            margin={margin}
            padding={padding}
            width={width}
            height={height}
            border={border}
            textAlign={textAlign}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
            boxShadow={boxShadow}

            display={display}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            top={top}
            left={top}
        >
            {children}
        </Div>
    )
}
export default DivElementosCentralizados;

const Div = styled.div` 
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    box-shadow: ${props => props.boxShadow};
    text-align: ${props => props.textAlign || "center"};
    background-color: ${props => props.backgroundColor};
    top: ${ props => props.top};
    left: ${props => props.left}

    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "column"};
    justify-content: ${props => props.justifyContent || "center"};
`