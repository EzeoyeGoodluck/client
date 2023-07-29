import {FieldError, FieldValues, UseFormRegister  } from 'react-hook-form';
import { BiDollar} from 'react-icons/bi';

const Input = ({
    id,
    label,
    type = 'text',
    disabled,
    register,
    required,
    errors,
    formPrice
}) => {
  return (
    <div className='w-full relative'>
        {
            formPrice && (
                <BiDollar
                size={24} 
                className='text-neutral-700 absolute top-5 left-2'/>
            )
        }
        <input 
        id={id}
        disabled={disabled}
        {...register(id, {required})} 
       />
      
    </div>
  )
}

export default Input
