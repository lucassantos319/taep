import Input from "../../atoms/input/input";
import Label from "../../atoms/tipografia/label";
import Div from '../../atoms/div/div';

const InputText = ({id,children,label,margin,type,borderRadius}) => {

    return (
        <Div margin={margin} width="40%" >
            <Div margin="0 0 10px 0" textAlign="left">
                <Label borderRadius={borderRadius} fontSize="17px" fontWeight="bold" texto={label} ></Label>
            </Div>
            {children}
        </Div>
    )

}

export default InputText;