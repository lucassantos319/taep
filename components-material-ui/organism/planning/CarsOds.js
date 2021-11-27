import { Card } from "react-bootstrap";
import react from 'react';

import Image from 'next/image'

const loader = ({src,width,quality}) => {
    return src;
}

const CardOds = ({index}) => {

    var indexImg = "/public/img/ods/ods-"+(index+1)+".png";
    return (
        <>
            <div className>
                <Card style={{width:"18rem",padding:"20px"}}>
                    <Card.Body>
                        <Image loader={loader} width={200} height={200} src={indexImg}></Image>
                    </Card.Body>
                </Card>
            </div>
        </>
    )

}

export default CardOds;