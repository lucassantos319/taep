import {React} from 'react'
import Image from 'next/image'
import img1 from '../../../public/img/ods/ods-1.png'
import img2 from '../../../public/img/ods/ods-2.png'
import img3 from '../../../public/img/ods/ods-3.png'
import img4 from '../../../public/img/ods/ods-4.png'
import img5 from '../../../public/img/ods/ods-5.png'
import img6 from '../../../public/img/ods/ods-6.png'

import img7 from '../../../public/img/ods/ods-7.png'
import img8 from '../../../public/img/ods/ods-8.png'
import img9 from '../../../public/img/ods/ods-9.png'
import img10 from '../../../public/img/ods/ods-10.png'
import img11 from '../../../public/img/ods/ods-11.png'
import img12 from '../../../public/img/ods/ods-12.png'


import img13 from '../../../public/img/ods/ods-13.png'
import img14 from '../../../public/img/ods/ods-14.png'
import img15 from '../../../public/img/ods/ods-15.png'
import img16 from '../../../public/img/ods/ods-16.png'
import img17 from '../../../public/img/ods/ods-17.png'


const   ODSPage = ({ods}) => {

    const odsMap = [];
    
    ods.forEach(element => {
        odsMap.push("img"+element.OdsId)
    });

    console.log(odsMap);

    return (
        <>

            <h5>Elementos ODS</h5>
            <div style={{marginTop:'20px',padding:'20px',border:'1px solid black', borderRadius:'20px'}}>
                <div style={{display:'flex'}}>
                        <div style={{visibility:odsMap.includes("img1")?"visible":"hidden"}}>
                        <Image src={img1} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img2")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img2} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img3")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img3} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img4")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img4} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img5")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img5} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img6")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img6} height={150} width={150}></Image>
                    </div>
                </div>
    
                <div style={{display:'flex', marginTop:'10px'}}>
                    <div style={{visibility:odsMap.includes("img7")?"visible":"hidden"}}>
                        <Image src={img7} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img8")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img8} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img9")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img9} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img10")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img10} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img11")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img11} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img12")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img12} height={150} width={150}></Image>
                    </div>
                </div>

                <div style={{display: 'flex', marginTop:'10px'}}>
                    <div style={{visibility:odsMap.includes("img13")?"visible":"hidden",}}>
                        <Image src={img13} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img14")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img14} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img15")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img15} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img16")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img16} height={150} width={150}></Image>
                    </div>
                    <div style={{visibility:odsMap.includes("img17")?"visible":"hidden",marginLeft:'20px'}}>
                        <Image src={img17} height={150} width={150}></Image>
                    </div>
                </div>
                </div>
        </>
    )
}

export {ODSPage}