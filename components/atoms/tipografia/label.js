import styled from 'styled-components';

const Label = ({id,htmlFor, className, texto, margin, color, fontSize, lineHeigth, fontWeight,border}) => {
    return(
        <Label1 
            id={id} 
            className={className}
            margin={margin}
            color={color} 
            fontSize={fontSize} 
            lineHeigth={lineHeigth}
            fontWeight={fontWeight}
            border={border}
            htmlFor={htmlFor}
           
        >
            {texto}
        </Label1>
    )
};
export default Label;

const Label1 = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
    font-family: "Poppins", sans-serif";
    margin: ${props => props.margin };
    padding: ${props => props.padding || "0"};
    color: ${props => props.color || "#000"};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeigth};
    font-weight: ${props => props.fontWeight || "600"};
    border:${props => props.border};
`