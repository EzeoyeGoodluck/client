import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";

const RegisterModal = () => {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const submitHandler = (e) =>{
  //   e.preventDefault();
  //   console.log('login Succesfull')

  // }

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();


  const onSubmit = (formvalues) =>{
    console.log(formvalues)
  }



const [isLoading, setIsLoading] = useState(false)

const { isOpen } = useSelector((state) => state.modal.value);

const bodyContent = (
  <div 
  // onSubmit={handleSubmit(handleSave)}
  className="flex flex-col gap-4 ">
    <Heading
    title='welcome to Airbnb'
    subtitle='Create an account!' />
    <Input
      id="email"
      label="Email"
      register={register}
      disabled={isLoading}
      errors={errors}
      required />
       <Input
      id="name"
      label="Name"
      register={register}
      disabled={isLoading}
      errors={errors}
      required />
       <Input
      id="password"
      label="password"
      register={register}
      disabled={isLoading}
      errors={errors}
      required />
  </div>
)



  return (
     <Modal
        disabled={isLoading}
        isOpen={isOpen}
        title="Register"
        actionLabel="Continue"
        showModal={true}
        secondaryActionLabel="another label"
        body={bodyContent}
        // onsubmit={handleSave}
        onSubmit={handleSubmit(onSubmit)}
      />
  )
}

export default RegisterModal
