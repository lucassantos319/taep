import styled from 'styled-components';
import React from 'react';


const LayoutWrapper = ({children,idMain}) => {


    return (
		<>
			{/* <Header categoria={categoria} estoque={estoque} isAmp={isAmp} isMobile={isMobile} resBusca={resBusca}>
			</Header> */}
	
			<Main id={idMain}>
				{children}
			</Main>
		</>
	)
}
export default LayoutWrapper


const Main = styled.main`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	background: #FFF;
	min-height:100%;
	z-index: 0; /*zindex erro */
`
