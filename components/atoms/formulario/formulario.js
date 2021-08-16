import styled from 'styled-components';

const Formulario = ({id, className,height,border,width,children, margin, color, fontSize, lineHeigth, fontWeight}) => {
    return(
        <Forms 
            id={id} 
            className={className}
            margin={margin}
            color={color} 
            fontSize={fontSize} 
            lineHeigth={lineHeigth}
            fontWeight={fontWeight}
            width={width}
            height={height}
            border={border}
            noValidate={true}
        >
            {children}
        </Forms>
    )
};

export default Formulario;

const Forms = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
    font-family: "Poppins", sans-serif;
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    color: ${props => props.color || "#000"};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeigth};
    font-weight: ${props => props.fontWeight};
    width: ${props => props.width} ;
    border: ${props => props.border};
    height: ${props => props.height};
`