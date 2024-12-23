'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import SideNav from "../components/SideNav/SideNav";
import { useState, useEffect } from "react";
import Repo_Card from "../components/Repo_Card/Repo_Card";

export default function Repository() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); 
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="h-screen ">
            {isMobile ? (
                <div className="flex flex-col">
                    <SideNav />
                    <div className="flex-grow">
                        <div className="p-4">Repository Content</div>
                    </div>
                </div>
            ) : (
                <ResizablePanelGroup direction="horizontal">
                    
                    <ResizablePanel 
                        defaultSize={19} 
                        minSize={8} 
                        style={{ width: "190px", maxWidth: "400px", minWidth: "190px" }}
                    >
                        <SideNav />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel>
                        <div className=" w-full h-screen bg-[#FAFAFA]">
                        <div className="p-4 ">Repository Content</div>
                        <Repo_Card/>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            )}
        </div>
    );
}
