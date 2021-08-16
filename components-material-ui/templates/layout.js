import styled from 'styled-components';
import React from 'react';

import Navbar from '../organism/navbar'

const Layout = ({tipo, children}) => {


    return (
		<>
			{/* <Header >
			</Header> */}
	
			<Main>
                <Navbar tipo={tipo}>
				    {children}
                </Navbar>
			</Main>
		</>
	)
}
export default Layout


const Main = styled.main`

`
