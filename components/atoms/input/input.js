import styled from 'styled-components';

const Input = ({id, name,className,register,required, type,borderRadius, margin, color, fontSize, lineHeigth, fontWeight}) => {
    return(
        <InputD 
            id={id} 
            name={name}
            className={className}
            margin={margin}
            color={color} 
            fontSize={fontSize} 
            lineHeigth={lineHeigth}
            fontWeight={fontWeight}
            type={type}
            required={required}
            borderRadius={borderRadius}
            register={register}
        >
        </InputD>
    )
};
export default Input;

const InputD = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
    font-family: "Poppins", sans-serif;
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    color: ${props => props.color || "#000"};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeigth};
    font-weight: ${props => props.fontWeight};
    type: ${props => props.type};
    border-radius: ${props => props.borderRadius};

`