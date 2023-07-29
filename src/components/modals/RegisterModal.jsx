import { AiFillGithub } from "react-icons/ai";
// import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Heading from "../Heading";






const RegisterModal = () => {

const [isLoading, setIsLoading] = useState(false)

const { isOpen } = useSelector((state) => state.modal.value);

const bodyContent = (
  <div className="flex flex-col gap-4">
    <Heading
    title='welcome to Airbnb'
    subtitle='Create an account!' />
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
      />
  )
}

export default RegisterModal
