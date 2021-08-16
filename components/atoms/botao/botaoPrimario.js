import styled from "styled-components";

const BotaoPrimario = ({id, className, onClick, texto, name, type, width, height, margin, fontSize}) => {
    return(
        <Button 
            id = {id}
            className={className}
            onClick={onClick}
            name={name}
            type={type}

            width={width}
            height={height}
            margin={margin}
            fontSize={fontSize}
            >
            {texto}
        </Button>
    )
}
export default BotaoPrimario

const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};

    cursor: pointer;
    border: none;
    border-radius: 12px;

    padding: 12px;
    margin: ${props => props.margin || "0px"};
    color: #FFF;
    background-color: rgba(6, 26, 138);
    font-size: ${props => props.fontSize};
    text-transform: uppercase;

    :hover{
        background-color: rgba(24, 52, 214);
    }
`