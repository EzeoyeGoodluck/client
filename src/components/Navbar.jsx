import Modal from "../components/modals/Modal";
import { openModal } from "../slices/registerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import RegisterModal from "./modals/RegisterModal";

const Navbar = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.modal.value);
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      {/* <Modal
        isOpen={isOpen}
        title="Login or Signup"
        actionLabel="submit"
        showModal={true}
        secondaryActionLabel="another label"
      /> */}
      <RegisterModal />

      <nav className="container mx-auto py-5 flex justify-between ">
        <a href="" className="flex items-center space-x-2  text-primary">
          <span className="-rotate-90 font-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </span>
          <span className="text-3xl font-bold">airbnb</span>
        </a>

        <div className="flex items-center rounded-full  shadow-md py-2 px-2 border space-x-6 cursor-pointer ml-20 hover:shadow-xl">
          <h1 className=" text-md pl-2"> Anywhere</h1>
          <div className="border  border-l border-gray-300 h-8   mx-4 "></div>
          <h1 className="text-md"> Any week</h1>
          <div className="border  border-l border-gray-300 h-8   mx-4 "></div>
          <div className=" text-md flex   items-center justify-center">
            Add guests
            <span className="ml-3 p-2 bg-primary rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div
          onClick={() => setDropdown(!Dropdown)}
          className="flex items-center space-x-1"
        >
          <h1 className="  rounded-full hover:bg-gray-100  transition cursor-pointer   p-5   font-bold">
            {" "}
            Airbnb your Home
          </h1>
          <span className="cursor-pointer p-4 hover:bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </span>

          <div className="cursor-pointer flex items-center  rounded-full border border-gray-400 p-1 px-3  hover:shadow-xl">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
            <span className="p-2 rounded-full bg-gray-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
          {Dropdown && (
            <div
              className={`flex flex-col z-10 shadow-md  border border-gray-200 py-2 absolute top-20 right-10  space-y-2 rounded-md bg-white w-[250px]
                translate
                duration-300
    
            `}
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
              <p className=" cursor-pointer py-2 hover:bg-gray-100 px-4">
                Login
              </p>
              <div className="w-100% border my-"></div>
              <p className=" cursor-pointer  py-2 hover:bg-gray-100 px-4">
                airbnb your home
              </p>
              <p className=" cursor-pointer  py-2 hover:bg-gray-100 px-4">
                help
              </p>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
