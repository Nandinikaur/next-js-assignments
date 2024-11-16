import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo-blue.png"

const Footer = () => {
  return (

    <div className="w-[1920px] h-[461px] absolute top-[5195px] left-[1px] pt-[140px] pb-8 px-[220px] gap-[200px] bg-[#043873] text-[#FFFF]">

    <div className="w-[1480px] h-[289px] gap-[100px]">
   
   <div className="flex justify-center w-[1480px] h-[169px] gap-[100px]">
  <div className="w-[295px] h-[169px] gap-[15px]"> 
    <div className="w-[191px] h-[34px]"><Image src={logo} alt="Logo" className="w-[191px] h-[34px]"/></div>
 <p className="w-[240px] h-[120px] font-inter size-[18px] font-normal leading-[30px] tracking-[-2%]">Web Planet created for <br/>the new ways we live and <br/> work. We make a better <br/>workspace around the world.</p>
</div>

<div className="w-[295px] h-[127px] gap-[15px]">
  <h1 className="w-[68px] h-[22px] font-inter text-[18px] font-bold leading-[21.78px] tracking-[-2%] hover:text-[#ff520d] cursor-pointer">Product</h1>
<ul>
  <li className="w-[70px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b] cursor-pointer">Overview</li>
  <li className="w-[50px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b] cursor-pointer">Pricing</li>
  <li className="w-[177px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b] cursor-pointer">Customer stories</li>
  </ul></div>
 
  <div className="w-[295px] h-[130px] gap-[16px]">
    <h1 className="w-[91px] h-[22px] font-inter text-[18px] font-bold leading-[21.78px] tracking-[-2%] hover:text-[#ff520d] cursor-pointer">Resources</h1>
    <ul>
      <li className="w-[33px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b] cursor-pointer">Blog</li>
      <li className="w-[128px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b] cursor-pointer">Guides & tutorials</li>
      <li className="w-[130px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b] cursor-pointer">Help center</li>
    </ul>
    </div>
  
  <div className="w-[295px] h-[130px] gap-[16px]">
    <h1 className="w-[83px] h-[22px] font-inter text-[18px] font-bold leading-[21.78px] tracking-[-2%] hover:text-[#ff520d] cursor-pointer">Company</h1>
    <ul>
      <li className="w-[66px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b]  cursor-pointer">About us</li>
      <li className="w-[62px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b]  cursor-pointer">Careers</li>
      <li className="w-[99px] h-[20px] font-inter text-[16px] font-normal leading-[20px] tracking-[-2%] hover:text-[#f8f24b]  cursor-pointer">Media kit</li>
      </ul>
    </div>
   </div>
   <br/>
   <br/><br/>
   <div className="w-[1480px] border-[1px] text-[1px] -rotate-0 border-[#2E4E73]" >
   </div>
    <div className="w-[1480px] h-[20px] justify-between">
      <p className="w-[169x] h-[20px] gap-[60px] text-center ">© 2023 Web Planet. All rights reserved.</p>
    </div>

    </div>
    </div>
  );
};

export default Footer;
