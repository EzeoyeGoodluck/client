import Modal from "./modals/Modal";
import { openModal } from "../slices/registerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const DropdownMenu = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.modal.value);
  return (
    <>
      <Modal
        isOpen={isOpen}
        title="Login or Signup"
        actionLabel="submit"
        showModal={true}
        secondaryActionLabel="another label"
      />
      <div
        className="flex flex-col z-10 shadow-md  border border-gray-200 py-2 absolute top-20 right-10  space-y-2 rounded-md bg-white w-[250px]
             
            "
      >
        <div></div>
        <p
          onClick={() => {
            dispatch(openModal());
          }}
          className="cursor-pointer px-4 py-2  hover:bg-gray-100 "
        >
          Sign up
        </p>
        <p className=" cursor-pointer py-2 hover:bg-gray-100 px-4">Login</p>
        <div className="w-100% border my-"></div>
        <p className=" cursor-pointer  py-2 hover:bg-gray-100 px-4">
          airbnb your home
        </p>
        <p className=" cursor-pointer  py-2 hover:bg-gray-100 px-4">help</p>
      </div>
    </>
  );
};

export default DropdownMenu;
