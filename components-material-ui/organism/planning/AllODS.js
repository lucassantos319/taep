import React from 'react';
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
import { Radio } from '@material-ui/core';


const AllODS = ({}) => {

    return (
        <>
        
            <div style={{display:'flex'}}>
                <div>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img1} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img2} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img3} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img4} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img5} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img6} height={150} width={150}></Image>
                </div>
            </div>
       

            <div style={{display:'flex', marginTop:'10px'}}>
                <div>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img7} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img8} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img9} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img10} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img11} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img12} height={150} width={150}></Image>
                </div>
            </div>

            <div style={{display: 'flex', marginTop:'10px'}}>
                <div>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img13} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img14} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img15} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img16} height={150} width={150}></Image>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <input class="radio_check" type="radio" /> 
                    <Image src={img17} height={150} width={150}></Image>
                </div>
            </div>
        </>
    )
}

export default AllODS;
