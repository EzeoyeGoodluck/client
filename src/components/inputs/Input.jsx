import {FieldError, FieldValues, UseFormRegister  } from 'react-hook-form';
import { BiDollar} from 'react-icons/bi';


const Input = ({
    id,
    label,
    type = 'text',
    disabled,
    register,
    required,
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
        placeholder=" " 
        type={type}
        className={`
        peer
        w-full
        p-4
        pt-6
        font-light
        rounded-md
        bg-white
        border-2
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        `}
       />
       <label
       className={`
       absolute
       text-md
       duration-150
       transform
       -translate-y-3
       top-5
       z-10
       origin-[0]
       ${formPrice ? 'left-9' : 'left-4'}
       peer-placeholder-shown:scale-100
       peer-placeholder-shown:translate-y-0
       peer-focus:scale-75
       peer-focus:-translate-y-4`}>
        {label}
        </label>
      
    </div>
  )
}

export default Input
