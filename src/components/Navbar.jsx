import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { motion } from "framer-motion";
import Test from "../page/Testpage.jsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState("page1");
    const menuRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

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

    const handlePageChange = (page) => {
        setActivePage(page);
        setIsOpen(false);
    };

    return (
        <div>
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
                            <Button className="w-full" onClick={() => handlePageChange("Test")}>Page 1</Button>
                            <Button className="w-full" onClick={() => handlePageChange("page2")}>Page 2</Button>
                            <Button className="w-full" onClick={() => handlePageChange("page3")}>Page 3</Button>
                        </div>
                    </motion.div>
                )}
            </nav>

            <div className="p-4">
                {activePage === "Test" && <Test />}
                {activePage === "page2" && <Page2 />}
                {activePage === "page3" && <Page3 />}
            </div>
        </div>
    );
}
