import { useState, useEffect, useRef  } from 'react';
import { NavLink } from 'react-router-dom';





const links = [
    { to: '/', label: 'Home'},
    { to: '/about', label: 'About'},
    { to: '/projects', label: 'Projects'},
    { to: '/qa-testing', label: 'QA & Testing'},
    { to: '/contact', label: 'Contact'},
];

const navLinkClass = ({ isActive }) => 
    isActive
        ? 'text-green-400 font-semibold'
        : 'text-slate-300 hover:text-green-300 transition-colors duration-200'

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
        <nav ref={menuRef} className='sticky top-0 z-50 bg-[#0d1a0e]/90 backdrop-blur-sm border-b border-green-900 px-6 py-4'>
            <div className='max-w-5xl mx-auto flex items-center justify-between'>
                <NavLink to='/' className='text-green-400 font-bold text-lg tracking-wide'>
                    Michael Kaffel
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
                    className='md:hidden text-slate-300 hover:text-green-400 transition-colors'
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
