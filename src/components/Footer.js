import React from "react";

const Footer = () => {
    return(
        <div className="flex justify-around w-full h-40 bg-black">
        <h3 className="font-bold text-white text-2xl">Fintelogy</h3>
        <div>
            <h4 className="text-white font-bold">xyzhsasfds</h4>
            <ul className="justify-start text-white">
                <li className="text-white my-1">abcdfdsdfsa</li>
                <li className="text-white my-1">lfkdgldf</li>
                <li className="text-white my-1">lfdkmgld</li>
                <li className="text-white">lkfgmdls</li>
            </ul>
        </div>
        <div>
        <ul className="justify-start">
                
                <li className="text-white my-1 mt-6">abcdfdsdfsa</li>
                <li className="text-white my-1">lfkdgldf</li>
                <li className="text-white ">lfdkmgld</li>
            </ul>
        </div>
        <div>
        <ul className="justify-start">
        
                <li className="text-white my-1 mt-6">abcdfdsdfsa</li>
                <li className="text-white my-1">lfkdgldf</li>
                <li className="text-white">lfdkmgld</li>
            </ul>
        </div>
        <div className="justify-start">
        <h6 className="text-white font-bold">blabla</h6>
        <input type={String} placeholder="recommended qwerd" className="w-32 bg-gray-300 border"></input>
        </div>
        </div>
    )
}

export default Footer;