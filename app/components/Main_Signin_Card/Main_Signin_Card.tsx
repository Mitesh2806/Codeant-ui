'use client';
import Image from "next/image";
import AntMain from '@/public/SigninAnt-1.svg'

export default function Signin_Card_Main(){
    return(
        <>
        <div className="w-[42em] h-[37.64625em] bg-white  rounded-xl border-[1px] border-gray-300">
           <div className=" container mx-1 mb-7 mt-9">
            <div className="flex flex-row items-center justify-center">
                <div className="flex  items-center justify-center w-[201.38px] h-[40px] gap-[13.76px]">
                <Image 
                    src={AntMain}
                    alt="CodeAnt"
                    width={35.62}
                    height={40}
                   
                />
                <div style={{  fontFamily: 'Satoshi-Light, sans-serif' }}className="">CodeAnt AI</div>
                </div>
                
            </div>
            <div className="mt-9 w-[368px] h-[48px] mx-auto">
                <div className="text-center font-semibold leading-[48px] text-[32px]">Welcome to CodeAnt AI</div>
            </div>
           </div>

            
        </div>
        </>
    )
}