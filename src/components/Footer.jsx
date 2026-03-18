import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='bg-moss-surface border-t border-moss-border-subtle px-6 py-8'>
            <div className='max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
                <p className='text-moss-text-muted text-sm font-mono'>
                    © {new Date().getFullYear()} Michael Kaffel
                </p>

                <div className='flex items-center gap-6'>
                    <a
                        href='https://github.com/michaelkaffel'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-moss-text-secondary hover:text-moss-green transition-colors duration-200'
                        aria-label='GitHub'
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/michael-kaffel-0797173a2/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-moss-text-secondary hover:text-moss-green transition-colors duration-200'
                        aria-label='LinkedIn'
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href='mailto:michaeldkaffel@gmail.com'
                        className='text-moss-text-secondary hover:text-moss-green transition-colors duration-200'
                        aria-label='Email'
                    >
                        <MdEmail size={22} />
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;