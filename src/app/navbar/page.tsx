import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo-blue.png";


const Navbar = () => {
  return (
    <div className="flex h-[92px] w-[1920px] absolute left-1px justify-between py-[16px] px-[220px] bg-[#043873] border-y-2 border-y-slate-800">
 
     <div className="flex w-[191px] h-[34px] justify-between">
      <div className="flex w-[191px] h-[34px]">
      <Image src={logo} alt="Logo" className="w-[150px] h-[40px] pt-3" />
     </div>
      </div>

<div className="flex w-[737.5px] h-[60px] gap-[60px]">
      <div className="w-[549px] h-[23px] gap-[32px]">
        <ul className="flex gap-[10px] " >
          <li className="w-[78px] h-[23px] gap-[10px]font-dm-sans font-medium text-base-lg leading-[55px] text-[#bbb6b6] hover:text-white cursor-pointer">Products</li>
          <li className="w-[79px] h-[23px] gap-[10px] font-dm-sans font-medium text-base-lg leading-[55px] text-[#bbb6b6] hover:text-white cursor-pointer">Solution</li>
          <li className="w-[89px] h-[23px] gap-[10px] font-dm-sans font-medium text-base-lg leading-[55px] text-[#bbb6b6] hover:text-white cursor-pointer">Resources</li>
          <li className="w-[58px] h-[23px] gap-[10px] font-dm-sans font-medium text-base-lg leading-[55px] text-[#bbb6b6] hover:text-white cursor-pointer">Pricing</li>
        </ul>
      </div>

      <div>
        <button className="w-[126px] h-[60px] rounded-lg py-[16px] px-[40px] gap-[10px] bg-[#FFE492]  hover:text-white hover:bg-yellow-500 cursor-pointer">Login</button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
