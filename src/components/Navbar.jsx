import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Toggle menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Close the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav>
            <div>
                <Button onClick={toggleMenu} variant="ghost" size="icon">
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    ref={menuRef}
                >
                    <div>
                        <Link to="/page1">
                            <Button className="w-full">Page 1</Button>
                        </Link>
                        <Link to="/page2">
                            <Button className="w-full">Page 2</Button>
                        </Link>
                        <Link to="/page3">
                            <Button className="w-full">Page 3</Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
