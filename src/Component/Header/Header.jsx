import './Header.css';
import Option from '../Option/Option';
import Logo from '../Logo/Logo';
import { useState, useRef, useEffect } from 'react';
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); 
    const menuRef = useRef(null);
    const sections = ['home', 'about', 'stack', 'project', 'contact'];
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    function handleClick(id) {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = document.getElementById("header")?.offsetHeight || 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 10;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setMenuOpen(false);
    }
    useEffect(() => {
        function onScroll() {
            const headerHeight = document.getElementById("header")?.offsetHeight || 80;
            const scrollPos = window.scrollY + headerHeight + 10;
            const windowBottom = window.scrollY + window.innerHeight;
            const pageBottom = document.body.scrollHeight;
            let foundSection = false;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    if (i === sections.length - 1) {
                        if (scrollPos >= sectionTop || windowBottom >= pageBottom - 5) {
                            setActiveSection(sections[i]);
                            foundSection = true;
                            break;
                        }
                    } else {
                        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                            setActiveSection(sections[i]);
                            foundSection = true;
                            break;
                        }
                    }
                }
            }
            if (!foundSection) setActiveSection(sections[0]);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <div id="header" ref={menuRef}>
            <header className='head'>
                <Logo>Venkatesh</Logo>
                <div className={`option ${menuOpen ? "active" : ""}`}>
                    {sections.map(sec => (
                        <Option
                            key={sec}
                            onClick={() => handleClick(sec)}
                            className={activeSection === sec ? "active" : ""}
                        >
                            {sec.charAt(0).toUpperCase() + sec.slice(1)}
                        </Option>
                    ))}
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>
        </div>
    );
}