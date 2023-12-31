import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../slices/registerSlice";

const Modal = ({ 
    isOpen,
    onclose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    secondaryAction,
    secondaryActionLabel
 }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      dispatch(openModal())
    }, 300);
  }, [disabled, onclose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onsubmit]);

    const handleSecondaryAction = useCallback (()=>{
      if ( disabled || !secondaryAction) {
          return;
        }

        secondaryAction();

    }, [])

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 ">
        <div className=" relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-fulll lg:h-auto md:h-auto ">
            {/* CONTENT */}
            <div className={`
                translate
                duration-300
                h-full ${showModal ? 'translate-y-0' : 'translate-y-full'}
                ${showModal ? 'opacity-100' : 'opacity-0'}
               `
            }>
                <div className="translate
                h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
                ">
                    {/* HEADER */}
                    <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                        <button 
                         onClick={handleClose}
                        className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                        <IoMdClose size={18} />
                        </button>
                        <div className="text-lg font-semibolde">
                            {title}
                        </div>
                    </div>
                    {/* BODY */}
                    <div className="relative p-6 flex-auto">
                        {body}
                    </div>
                    {/* FOOTER */}
                    <div className="flex flex-col gap-2 p-6">
                        <div className="flex flex-row items-center gap-4 w-full ">
                            {handleSecondaryAction && secondaryAction && (
                                   <Button 
                                   outline
                                   label={secondaryActionLabel} 
                                   disabled={disabled}
                                   onClick={secondaryAction}
                                 />
                            ) }
                            <Button 
                             label={actionLabel} 
                             disabled={disabled}
                             onClick={handleSubmit}
                           />                 
                        </div>
                        {footer}      
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
