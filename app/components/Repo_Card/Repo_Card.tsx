'use client';

import Image from "next/image";

export default function Repo_Card(){
    return(
        <>
        <div className=" flex items-center w-[full] h-[6em] border-[1px] border-gray-300 ">
            <div className=" flex flex-col">
                <div className="flex flex-row">
                    <div className=" font-medium">Repo</div>
                    <div className="">Badge</div>
                </div>
                <div className="flex flex-row gap-3">
                    <div className=" ">react</div>
                    <div className=" ">react</div>
                    <div className=" ">react</div>
                </div>
            </div>
        </div>
        </>
    )
}