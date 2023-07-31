import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { openModal } from "../../slices/registerSlice";
import Button from "../Button";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";

const RegisterModal = () => {
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



///////////////////////////////////////////////////

const footerContent = (
  <div className="flex flex-col gap-4 mt-3">
    <hr />
    <Button 
      outline 
      label="Continue with Google"
      icon={FcGoogle}
      // onClick={() => signIn('google')} 
    />
    <Button 
      outline 
      label="Continue with Github"
      icon={AiFillGithub}
      // onClick={() => signIn('github')}
    />
    <div 
      className="
        text-neutral-500 
        text-center 
        mt-4 
        font-light
      "
    >
      <p>Already have an account?
        <span 
          // onClick={onToggle} 
          className="
            text-neutral-800
            cursor-pointer 
            hover:underline
          "
          > Log in</span>
      </p>
    </div>
  </div>
)




///////////////////////////////////////////////////////////////////////////


  return (
     <Modal
        disabled={isLoading}
        isOpen={isOpen}
        title="Register"
        actionLabel="Continue"
        showModal={true}
        secondaryActionLabel="another label"
        body={bodyContent}
        footer={footerContent}
        onSubmit={handleSubmit(onSubmit)}
      />
  )
}

export default RegisterModal
