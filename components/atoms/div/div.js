import styled from "styled-components";

const Div = ({className, children, id, flex, padding, border, borderRadius, margin, width, height, textAlign, display, flexDirection, justifyContent, position}) => {
    return(
        <Div1 
            className={className}
            id={id}
            padding={padding}
            margin={margin}
            width={width}
            height={height}
            border={border}
            borderRadius={borderRadius}
            position={position}
            textAlign={textAlign}
            display={display}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            flex={flex}
        >
            {children}
        </Div1>
    )
}
export default Div;

const Div1 = styled.div` 
    padding: ${props => props.padding || "12px"};
    margin: ${props => props.margin};
    width: ${props => props.width };
    height: ${props => props.height};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    text-align: ${props => props.textAlign};
    position:${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
    float: ${props => props.float};

    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
`