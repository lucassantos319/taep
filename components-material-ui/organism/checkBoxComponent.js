import { useState } from "react";

const CheckBoxComponent = () => {

    const [inputCheck,setInputCheck] = useState(false);
   
    return (
        <>
            <input 
                class="radio_check_tec"
                type="checkbox" 
                checked={inputCheck} 
                onClick={() => setInputCheck(!inputCheck)}
            />
        </>
    )
}

export default CheckBoxComponent;