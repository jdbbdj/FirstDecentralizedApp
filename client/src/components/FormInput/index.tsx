import React from 'react'

interface Props{
    placeholder:any;
    name:any;
    type:any;
    value:any;
    handleOnChange:any;
    identifier:any;
}

const FormInput:React.FC<Props> = ({placeholder,name,type,identifier,value,handleOnChange}):React.ReactElement => {
    return (
        <input placeholder={placeholder}
            type={type}
            name={name}
            step="0.0001"
            value={value}
            onChange={(e)=>handleOnChange(e,name)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"/>
    )
}

export default FormInput
