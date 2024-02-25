"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import SideBar from "./SideBar";
import { useState } from "react";

function Header({ CartItems }: { CartItems: string[] }) {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <header
            className="text-dark text-xl font-bold flex items-center justify-between py-4 px-10 
            border-b-4 border-b-gray-200"
        >
            <Link href={"/"}>
                <h1 className="text-2xl">Shoppeet</h1>
            </Link>

            <ul className="flex space-x-10 hidden md:block">
                <Link
                    href={"/"}
                    className="hover:border-b-4 hover:border-b-black hover:duration-200"
                >
                    Home
                </Link>
                <Link
                    href={"/products"}
                    className="hover:border-b-4 hover:border-b-black hover:duration-200"
                >
                    Products
                </Link>
                <Link
                    href={"/categories"}
                    className="hover:border-b-4 hover:border-b-black hover:duration-200"
                >
                    Categories
                </Link>
            </ul>

            <Link
                className="flex items-center space-x-1 hover:border-4 hover:border-black cursor-pointer 
                p-2 hover:rounded-lg hover:duration-1000  hidden md:flex"
                href={"/cart"}
            >
                <FaShoppingCart />
                <span>{CartItems.length}</span>
            </Link>

            <div className="md:hidden">
                <CiMenuFries
                    className="cursor-pointer"
                    onClick={() => setShowSideBar(!showSideBar)}
                />
                <SideBar displaySideBar={showSideBar} />
            </div>
        </header>
    );
}

export default Header;
