import { useCallback, useEffect, useState } from "react";
import Menu from "./Menu";
import NavItem from "./NavItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import Image from "next/image";
import defaultblue from "../public/images/defaultblue.png";
import { logo } from "../public";

const TOP_OFFSET = 66;

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const toggleMenu = useCallback(() => {
        setShowMenu((curr) => !curr);
    }, []);
    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((curr) => !curr);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
        <nav className="w-full fixed z-40">
            <div
                className={`px-4 md:px-14 py-4 lg:py-3 flex flex-row items-center transition duration-500 ${
                    showBackground ? "bg-neutral-900 bg-opacity-90" : ""
                }`}
            >
                <div className="h-6 lg:h-12">
                    <Image
                        src={logo}
                        alt="site-logo"
                        className="h-full w-full relative"
                        style={{ objectFit: "contain", position: "relative"} }
                        priority={true}
                    />
                </div>
                <div className="ml-8 flex-row gap-6 hidden lg:flex">
                    <NavItem name="Home" />
                    <NavItem name="Series" />
                    <NavItem name="Movies" />
                    <NavItem name="New & Popular" />
                    <NavItem name="Browse by language" />
                    <NavItem name="My List" />
                </div>
                <div
                    onClick={toggleMenu}
                    className={`lg:hidden flex flex-row items-center gap-2 ml-6 cursor-pointer relative `}
                >
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown
                        className={`text-white transition ${
                            showMenu ? "rotate-180" : "rotate-0"
                        }`}
                    />
                    <Menu visible={showMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-6 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div
                        onClick={toggleAccountMenu}
                        className="relative flex flex-row items-center gap-2 cursor-pointer"
                    >
                        <div className="h-6 w-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image src={defaultblue} alt="Profile-image" />
                        </div>
                        <BsChevronDown
                            className={`text-white transition ${
                                showAccountMenu ? "rotate-180" : "rotate-0"
                            }`}
                        />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
