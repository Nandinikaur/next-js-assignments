import React from "react";
import Image from "next/image";
import image1 from "@/app/assets/apple-logo.jpg";
import image2 from "@/app/assets/microsoft-Logo.jpg";
import image3 from "@/app/assets/slack-Logo.png";
import image4 from "@/app/assets/google-logo.png";
import image5 from "@/app/assets/images.jpeg";
import image6 from "@/app/assets/development.webp";
import image7 from "@/app/assets/work.jpg";
import image8 from "@/app/assets/image-team.jpg";
import image9 from "@/app/assets/Work Together Image.png";
import  { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
  return (
    <div>
     *main div 

        *div 1
        <div className="flex w-[1920px] h-[829px] absolute top-[92px] left-[1px] px-[220px] py-[140px] pl-[231px] gap-[98px] bg-[#043873]">
         <div className="w-[656px] h-[361px] gap-[60px]">
           <div className="w-[656px] h-[1238px] gap-[24px]">
           <div className="w-[656px] h-[154px] font-inter font-bold text-[64px] leading-[77.45px] tracking-[-2%] text-[#FFFFFF]">
             <h1>Get More Done with whitepace</h1>
           </div>
           <div className="w-[656px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#FFFFFF]">
             <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
           </div>
           </div>
           <div className="flex absolute top-[450px]">
         <button className="w-[220px] h-[63px] rounded-[8px] p-2 bg-[#4F9CF9] hover:bg-[#1857aa] cursor-pointer border-[1px]">
      <div className=" flex w-[200px] h-[25px] justify-between font-inter font-medium text-[20px] leading-[23px] gap-[5px] tracking-[-2%] text-[#FFFFFF]"> Try Whitepace free <FontAwesomeIcon icon={faArrowRight}/>
   </div></button>
  </div>
</div>
<div className="w-[714px] h-[535px] bg-[#C4DEFD] border-[6px] border-[#061a3c]"> 
<Image src={image7} alt="get more" className=" w-[714px] h-[524px]"/>
 </div>
   </div>
*div 1 end



  *div 2
      <div className="flex flex-col w-[1920px] h-[1588px] absolute top-[921px] left-[1px] px-[220px] py-[140px] pl-[220px] gap-[140px]">
        <div className="flex w-[1480px] h-[547px] gap-[60px]">
          <div className="w-[672px] h-[411px] gap-[60px]">
             <div className="flex flex-col w-[672px] h-[288px] gap-[30px]">
              <div className="w-[672px] h-[174px] font-inter text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-[#212529]">
                <h1>Project Management</h1>
              </div>
              <div className="w-[672px] h-[90px] font-inter text-[18px] font-normal leading-[30px] tracking-[-2%] text-[#212529]">
                <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                </div>
             </div>
             <div className="flex absolute top-[550px]">
       <button className="flex w-[180px] h-[63px] rounded-[8px] px-[20px] py-[20px] pl-[30px] gap-[10px] bg-[#4F9CF9] hover:bg-[#1857aa] cursor-pointer border-[1px]">
    <div className=" flex w-[130px] h-[23px] justify-between font-inter font-medium text-[18px] leading-[23px] gap-[5px] tracking-[-2%] text-[#FFFFFF]">Get Started <FontAwesomeIcon icon={faArrowRight}/>
 </div></button>
             </div>
        </div>
        <div className="w-[748px] h-[547px] bg-[#C4DEFD]"> 
<Image src={image8} alt="project management" className=" w-[748px] h-[547px] border-[6px] border-[#e85c2e]"/>
 </div>
    </div>



    <div className="flex w-[1480px] h-[661px] gap-[100px]">
      <div className="w-[710px] h-[661px] pr-[100px]"> 
        <Image src={image9} alt="team work" className="w-[710px] h-[661px]"/>
      </div>

      <div className="flex w-[670px] h-[294px] gap-[60px]">
        <div className="flex flex-col w-[670px] h-[171px] gap-[24px]">
          <div className="w-[670px] h-[87px] absolute top-[900px] font-inter text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-[#212529]">
            <h1>Work together</h1>
          </div>
          <div className="w-[670px] h-[60px] absolute top-[1020px] font-inter text-[18px] font-normal leading-[30px] tracking-[-2%] text-[#212529]">
            <p>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
          </div>
        </div>
        <div className="flex absolute top-[1120px]">
          <button className="flex w-[200px] h-[63px] rounded-[8px] px-[30px] py-[20px] bg-[#4F9CF9] hover:bg-[#1857aa] cursor-pointer border-[1px]"> 
          <div className="flex w-[140px] h-[23px] font-inter font-medium text-[20px] leading-[22px] gap-[20px] tracking-[-2%] text-[#FFFFFF]">Try it now <FontAwesomeIcon icon={faArrowRight}/>
          </div>
          </button>
        </div>
      </div>
    </div>

    
        </div>
       *div 2 end 

        *div 3
        <div className="flex w-[1920] h-[795px] absolute top-[2509px] px-[220px] py-[140px] pl-[185px] gap-[98px] bg-[#043873]">
         <div className="w-[697px] h-[294px] gap-[60px]">
           <div className="w-[697px] h-[171px] gap-[24px]">
           <div className="w-[697px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#FFFFFF]">
             <h1>Use as Extension</h1>
           </div>
           <div className="w-[697px] h-[60px] font-inter font-normal text-[20px] absolute top-[250px] leading-[30px] tracking-[-2%] text-[#FFFFFF]">
             <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
           </div>
           </div>
           <div className="absolute top-[400px]">
         <button className="w-[195px] h-[63px] rounded-[8px] px-[30px] py[15px] gap-[10px] bg-[#4F9CF9] hover:bg-[#1857aa] cursor-pointer border-[1px]">
      <div className=" flex w-[160px] h-[20px] font-inter font-semibold text-[24px] gap-[10px] leading-[10px] tracking-[-2%] text-[#FFFFFF]"> Let's Go <FontAwesomeIcon icon={faArrowRight}/>
   </div></button>
  </div>
</div>
<div className="w-[714px] h-[532.09px] bg-[#C4DEFD] border-[6px] border-[#12adc5]"> 
   <Image src={image6} alt="use extensions" className=" w-[714px] h-[532.09px]"/>
 </div>
   </div>
*div 3 end

        *div 4
        <div className="flex w-[1920] h-[810px] absolute top-[3300px] px-[220px] py-[140px] pl-[213px] gap-[98px]">


          <div className="w-[714px] h-[532.09px] bg-[#C4DEFD] border-[1px]"> 
            <Image src={image5} alt="customize your work" className=" w-[714px] h-[532.09px] border-[6px] border-[#C4DEFD]"/>
          </div>
          <div className="w-[669px] h-[441px] gap-[60px]">
            <div className="w-[669px] h-[288px] gap-[24px]">
            <div className="w-[669px] h-[174px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">
              <h1>Customize it to your needs</h1>
            </div>
            <div className="w-[669px] h-[90px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#212529]">
              <p>Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
            </div>
            </div>
            <div>
          <button className="w-[195px] h-[63px] rounded-[8px] px-[30px] py[15px] gap-[10px] bg-[#4F9CF9] hover:bg-[#1857aa] cursor-pointer border-[1px]">
       <div className=" flex w-[160px] h-[20px] font-inter font-semibold text-[24px] gap-[10px] leading-[10px] tracking-[-2%] text-[#FFFFFF]"> Let's Go <FontAwesomeIcon icon={faArrowRight}/>
    </div></button>
   </div>
 </div>
</div>
*div 4 end
   *div 5
        <div className="w-[1920px] h-[574px] absolute top-[4080px] left-[1px] px-[220px] py-[140px] bg-[#043873]">

          <div className="flex flex-col justify-center items-center text-center w-[1481px] h-[294px] gap-[60px]">
            <div className="w-[1064px] h-[171px] gap-[24px]">
          <div className="w-[1064px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#FFFFFF]">
            <h1>Your work, everywhere you are</h1>
            </div>
          <div className="w-[1064px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#FFFFFF]">
            <p>Access your notes from your computer, phone or tablet by synchronizing with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
          </div>
          </div>
          <div>
            <button className="w-[195px] h-[63px] rounded-[8px] px-[30px] py[15px] gap-[10px] bg-[#4F9CF9] hover:bg-[#1857aa] cursor-pointer border-[1px]">
              <div className=" flex w-[160px] h-[20px] font-inter font-semibold text-[24px] gap-[10px] leading-[10px] tracking-[-2%] text-[#FFFFFF]"> Try Taskey <FontAwesomeIcon icon={faArrowRight}/>
              </div></button>
          </div>
        </div>
         </div>
*div 5end
 *div 6
        <div  className="w-[1920px] h-[538] absolute top-[4654px] px-[220px] py-[188px] gap-[100px]">
            <div className="w-[1482px] h-[87px] font-inter text-[72px] font-bold text-center leading-[87.14px] tracking-[-2%] text-[#212529]">
              <h1 className="absolute top-[70px] left-[40%]">Our sponsors</h1>
              </div>

            <div className="flex w-[1482] h-[71px] justify-between justify-items-center">
              <div className="w-[55px] h-[68px] gap-[4px]"> <Image src={image1} alt="apple logo"/></div>
              <div  className="w-[280px] h-[68px] gap-[4px]"> <Image src={image2} alt="microsoft logo"/></div>
              <div className="w-[200px] h-[68px] gap-[4px]"> <Image src={image3} alt="slack logo"/></div>
              <div className="w-[160px] h-[68px] gap-[4px]"> <Image src={image4} alt="google logo"/></div>
            </div>
        </div>
*div 6 end
*main div end
    </div>
  );
};

export default Content;