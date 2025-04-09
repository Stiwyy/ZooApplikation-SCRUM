// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar({ onPageChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState("Home");
    const menuRef = useRef(null);

    const toggleMenu = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handlePageChange = (page) => {
        setActivePage(page);
        setIsOpen(false);
        if (onPageChange) onPageChange(page);
    };

    return (
        <div>
            <nav className="relative">
                <Button onClick={toggleMenu} variant="ghost" size="icon">
                    {isOpen ? <X /> : <Menu />}
                </Button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            ref={menuRef}
                            className="absolute top-full left-0 bg-transparent shadow-md rounded-md mt-2 z-10"
                        >
                            <div className="flex flex-col space-y-2">
                                <Link to="/Home">
                                    <Button className="w-full" onClick={() => handlePageChange("Home")}>Home</Button>
                                </Link>
                                <Link to="/QrCode">
                                    <Button className="w-full" onClick={() => handlePageChange("Qrcode")}>Qrcode</Button>
                                </Link>
                                <Link to="/Datenschutzerklaerung">
                                    <Button className="w-full" onClick={() => handlePageChange("Datenschutzerklaerung")}>Datenschutzerklärung</Button>
                                </Link>
                                <Link to="/Impressum">
                                    <Button className="w-full" onClick={() => handlePageChange("Impressum")}>Impressum</Button>
                                </Link>
                            </div>
                        </motion.div>

                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
