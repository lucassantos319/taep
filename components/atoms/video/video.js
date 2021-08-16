import styled from 'styled-components';

const Video = ({className, src, width, height}) => {
    return(
        <Div
            width={width}
            height={height}
        >
            <video className={className} controls>
                <source src={src} type="video/mp4"></source>
            </video>

        </Div>
    )
};
export default Video;

const Div = styled.div`
    video{
        width: ${props => props.width};
        height: ${props => props.height};
    }
`