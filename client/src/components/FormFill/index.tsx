import React,{useState,useEffect} from 'react';
import moment from 'moment';
import {useFormik} from 'formik'
import { FormInput,Loader } from '..';
import INITIAL_VALUES from './model/cryptoFormModel';
import formValidator from './validator/cryptoValidator';


const FormFill = () => {
    const [initialValues,setInitialValues] = useState<any>(INITIAL_VALUES);
    const isLoading = false;
    
    const handleOnChange=(event?:React.ChangeEvent<HTMLInputElement>|null,name?:any)=>{
        
    }

    const handleSubmit = () =>{
        
    }

    

    const formik = useFormik({
        initialValues,
        validateOnChange:true,
        validationSchema:formValidator,
        onSubmit:handleSubmit
    });

    const {handleChange,setFieldValue,resetForm,values}=formik;
    useEffect(()=>{
        console.log(values);
    },[values])
    return (
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <FormInput placeholder="Address To" name="addressTo" identifier="addressTo" value={values.addressTo} type="text" handleOnChange={handleOnChange}/>
            <FormInput placeholder="Amount (ETH)" name="amount" identifier="amount" value={values.amount} type="number" handleOnChange={handleOnChange}/>
            <FormInput placeholder="Keyword (Gif)" name="keyword" identifier="keyword" value={values.keyword} type="text" handleOnChange={handleOnChange}/>
            <FormInput placeholder="Enter Message" name="message" identifier="message" value={values.message} type="text" handleOnChange={handleOnChange}/>

            <div className="h-[1px] w-full bg-gray-400 my-2"/>

            {isLoading?(
                <Loader/>
            ):(<button type="button" className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer" onClick={handleSubmit}>Send Now</button>)}
        </div>
    )
}

export default FormFill
