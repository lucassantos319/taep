import styled from 'styled-components';

const Head1 = ({id, className, children, margin, color, fontSize, lineHeigth, fontWeight}) => {
    return(
        <Head 
            id={id} 
            className={className}
            margin={margin}
            color={color} 
            fontSize={fontSize} 
            lineHeigth={lineHeigth}
            fontWeight={fontWeight}
        >
            {children}
        </Head>
    )
};
export default Head1;

const Head = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
    font-family: "Poppins", sans-serif;
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    color: ${props => props.color || "#000"};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeigth};
    font-weight: ${props => props.fontWeight};
`