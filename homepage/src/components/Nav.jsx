import React from "react";

const Nav = () => {
    
    return(
       
        <div className="w-full m-auto flex justify-between items-center text-white bg-zinc-700">
            <h1 className="pl-8 py-4 text-xl font-bold">Fintelogy</h1>
            <ul className="hidden md:flex items-center pr-10 text-base font-semibold ">
                <li className="hover:bg-gray-200 py-4 px-6">Home</li>
                <li className="hover:bg-gray-200 py-4 px-6">Articles</li>
                <li className="hover:bg-gray-200 py-4 px-6">Events</li>
                <li className="hover:bg-gray-200 py-4 px-6">About</li>
            </ul>
            <div className="flex justify-center w-auto">
            <button className="hidden justify-center md:flex items-center w-20 text-white border mt-2 hover:bg-zinc-400">login</button>
  <button className="hidden justify-center md:flex w-20 items-center text-white mr-10 border mt-2 hover:bg-zinc-400">sign up</button>
            </div>
           
            <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>
            <div className="absolute top-0 -right-full h-auto w-8/12 bg-zinc-700 border opacity-0
             group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
             <div className="flex justify-center ">
            <button className="items-center w-20 text-white  border mt-2 hover:bg-zinc-400">login</button>
  <button className="items-center w-20 text-white mr-10 border mt-2 hover:bg-zinc-400">sign up</button>
            </div>
                <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                    <li className="hover:bg-zinc-400 py-4 px-6 w-full">Home</li>
                    <li className="hover:bg-zinc-400 py-4 px-6 w-full">Articles</li>
                    <li className="hover:bg-zinc-400 py-4 px-6 w-full">Events</li>
                    <li className="hover:bg-zinc-400 py-4 px-6 w-full">About</li>
                </ul>
            </div>
            </button>
           
        </div>
      
    )
}

export default Nav;