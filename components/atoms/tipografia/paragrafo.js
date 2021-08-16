import styled from 'styled-components';

const Paragrafo = ({id, className, children, margin, color, fontSize, lineHeigth, fontWeight, textAlign}) => {
    return(
        <Parag 
            id={id} 
            className={className}
            margin={margin}
            color={color} 
            fontSize={fontSize} 
            lineHeigth={lineHeigth}
            fontWeight={fontWeight}
            textAlign={textAlign}
        >
            {children}
        </Parag>
    )
};
export default Paragrafo;

const Parag = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
    font-family: "Poppins", sans-serif;
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    color: ${props => props.color || "#000"};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeigth};
    font-weight: ${props => props.fontWeight || "600"};
    text-align: ${props => props.textAlign}
`