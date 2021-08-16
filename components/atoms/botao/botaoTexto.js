import styled from "styled-components";

const BotaoTexto = ({id, className,float,margin,padding,onClick, texto, name, type, width, color, border,backgroundColorBotao, fontSize, textAlign, lineHeigth, fontWeight}) => {

    return(
        <Button 
            id = {id}
            className={className}
            onClick={onClick}
            name={name}
            type={type}

            width={width}
            color={color}
            backgroundColor={backgroundColorBotao}
            fontSize={fontSize}
            textAlign={textAlign}
            lineHeigth={lineHeigth}
            fontWeight={fontWeight}
            border={border}
            padding={padding}
            margin={margin}
            float={float}
            >

            {texto}
        </Button>
    )
}
export default BotaoTexto

const Button = styled.button`
    border: none;
    cursor: pointer;
    onclick: ${props => props.onClick};

    padding: ${props => props.padding || "0px"};
    margin: ${props => props.margin || "0px"};
    width: ${props => props.width};
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor || "#FFF"};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign};
    line-height: ${props => props.lineHeigth};
    font-weight: ${props => props.fontWeight};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    float: ${props=>props.float};
`