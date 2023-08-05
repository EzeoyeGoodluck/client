import "swiper/css";
import Slider from "../components/Slider";
import Switch from "../components/Switch";
import Navbar from "../components/Navbar";
import { useGetListingQuery } from "../slices/listingApiSlice";



const Home = () => {
  const {data: listing, isLoading, isError } = useGetListingQuery();
  return (
    <div>
      <header>
        <Navbar />
        <div className="border border-gary-300 w-100%"></div>
        {/* icons */}
        <div className="container flex mx-auto text-center p-5">
          {/* <div>
            <p className="text-xl font-bold cursor-pointer p-2 px-4 border border-gray-300 rounded-full text-center">
              {" "}
              &lt;{" "}
            </p>
          </div> */}
          <Slider />

          <div className="flex space-x-3 items-center">
            {/* <div>
              <p
              onClick={() => swiper.slideNext()}
               className="text-xl font-bold cursor-pointer p-2 px-4 border border-gray-300 rounded-full text-center">
                >
              </p>
            </div> */}

            <div className="flex border border-gray-300 rounded-md p-4 ">
              <span className="cursor-pointer">
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
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </span>
              <p>filter</p>
            </div>
          </div>
        </div>
        {/* icons end */}
      </header>
      <main className="container mx-auto">
        <div className="text-center mx-auto flex  items-center justify-center  p-5 ">
          <div className="flex items-center  rounded-md    p-3 border space-x-6 border border-gray-300 cursor-pointer mr-10">
            <h1 className=" font-bold"> Display total price</h1>
            <div className="border  border-l border-gray-300 h-8   mx-4 "></div>
            <div className=" text-xl flex   items-center justify-center">
              <p className="mr-20">Include all fees, before taxes</p>
              <Switch />
            </div>
          </div>
        </div>
        {/* CARD COMPONENTS */}
        <div>
      <div className=" mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {listing &&  listing.map(place => (
            <div className="flex flex-col">
         {/* <Link > */}
          <div className="bg-gray-500 mb-2 rounded-2xl flex"> 
         <img src={place.main_image} alt=""  className="bg-gray-500  rounded-2xl flex     object-cover "/>

          </div>
          <h2 className="font-bold">{place.name}</h2>
          <h3 className="text-sm text-gray-500">{place.open_time}</h3>
          <div className="mt-1">
            <a className="font-bold">$3,000 
total before taxes</a>
          </div>
          </div>
       
          // </Link>  
       ))} 
    </div>

        
        </div>
      </main>
    </div>
  );
};

export default Home;
