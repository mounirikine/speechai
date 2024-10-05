'use client';

import { 
  BookA, 
  CircleUserIcon, 
  FileAudio, 
  FileImage, 
  FileVideo, 
  PanelsTopLeft, 
  ShieldPlus, 
  Webhook 
} from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // For tracking the current route

const SideNav = () => {
    const currentPath = usePathname(); // Get the current path dynamically
    const [activeTab, setActiveTab] = useState(currentPath); // Set the initial active tab based on current path

    useEffect(() => {
        setActiveTab(currentPath); // Update activeTab when the path changes
    }, [currentPath]);

    const MenuOptions = [
        {
            id: 1,
            name: "Dashboard",
            path: "/dashboard",
            icon: PanelsTopLeft,
        },
        {
            id: 2,
            name: "Text To Image",
            path: "/dashboard/text-to-image",
            icon: FileImage,
        },
        {
            id: 3,
            name: "Text To Audio",
            path: "/dashboard/text-to-audio",
            icon: FileAudio,
        },
        {
            id: 4,
            name: "Text To Video",
            path: "/dashboard/text-to-video",
            icon: FileVideo,
        },
        {
            id: 5,
            name: "Generate Story",
            path: "/dashboard/text-to-story",
            icon: BookA,
        },
        {
            id: 6,
            name: "Upgrade",
            path: "/upgrade",
            icon: ShieldPlus,
        },
        {
            id: 7,
            name: "Generate Api",
            path: "/dashboard/api",
            icon: Webhook,
        },
        {
            id: 8,
            name: "Account",
            path: "/account",
            icon: CircleUserIcon,
        },
    ];

    return (
        <div className='w-full shadow-md bg-gray-950 py-10  h-full sticky'>
            <div className="grid gap-3 pt-10 px-5">
                {MenuOptions.map((item) => (
                    <Link
                        key={item.id}
                        href={item.path}
                        className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors duration-300 
                          ${activeTab === item.path 
                            ? 'bg-purple-600 text-white' 
                            : 'hover:bg-primary hover:text-white'
                          }`
                        }
                    >
                        <item.icon />
                        <h2>{item.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
