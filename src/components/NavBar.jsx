import { useState, useEffect, useRef  } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/mk-logo-transparent-moss.svg';


const links = [
    { to: '/', label: 'Home'},
    { to: '/about', label: 'About'},
    { to: '/projects', label: 'Projects'},
    { to: '/qa-testing', label: 'QA & Testing'},
    { to: '/contact', label: 'Contact'},
];

const navLinkClass = ({ isActive }) => 
    isActive
        ? 'text-moss-green font-semibold'
        : 'text-moss-text-secondary hover:text-moss-green-bright transition-colors duration-200'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

    return (
        <nav ref={menuRef} className='sticky top-0 z-50 bg-moss-surface/90 backdrop-blur-sm border-b border-moss-border-subtle px-6 py-4'>
            <div className='max-w-5xl mx-auto flex items-center justify-between'>
                <NavLink to='/' className='flex items-center gap-2'>
                    <img src={Logo} alt="MK logo" className="h-8 w-8"/>
                    <span className='text-moss-green font-bold text-lg tracking-wide'>Michael Kaffel</span>
                </NavLink>

                {/* Desktop links */}
                <ul className='hidden md:flex gap-8 list-none'>
                    {links.map(({ to, label}) => (
                        <li key={to}>
                            <NavLink to={to} className={navLinkClass} end={to === '/'}>
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                    {/* Hamburger button - mobile only */}
                <button
                    className='md:hidden text-moss-text-primary hover:text-moss-green transition-colors'
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label='Toggle menu'
                >
                    {menuOpen ? (
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    ) : (
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <ul className='md:hidden mt-4 flex flex-col gap-4 px-2 list-none'>
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={navLinkClass}
                                end={ to === '/'}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
