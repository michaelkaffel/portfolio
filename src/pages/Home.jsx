import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import heroBg from '../assets/images/hero-bg.jpg';
import {
    SiReact, SiNodedotjs, SiExpress, SiMongodb,
    SiJavascript, SiGit, SiTailwindcss,
    SiHtml5,
} from 'react-icons/si'
import { VscBeaker } from 'react-icons/vsc';
import { FaCss3Alt } from 'react-icons/fa';

const skills = [
    { label: 'React', icon: SiReact },
    { label: 'Node.js', icon: SiNodedotjs },
    { label: 'Express', icon: SiExpress },
    { label: 'MongoDB', icon: SiMongodb },
    { label: 'JavaScript', icon: SiJavascript },
    { label: 'Playwright', icon: VscBeaker },
    { label: 'Git', icon: SiGit },
    { label: 'Tailwind CSS', icon: SiTailwindcss },
    { label: 'HTML', icon: SiHtml5 },
    { label: 'CSS', icon: FaCss3Alt },
];

const Home = () => {
    useDocumentTitle('Home');

    return (
        <div >

            {/* Hero */}
            <div
                className='relative bg-cover bg-center pb-20'
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                {/* Dark overlay — adjust opacity to taste */}
                <div className='absolute inset-0 bg-moss-deep/90' />

                <div className='relative max-w-5xl mx-auto px-6 py-28 flex flex-col items-start gap-6'>
                    <p className='text-moss-amber font-mono text-sm tracking-widest uppercase'>
                        Available for work
                    </p>
                    <h1 className='text-5xl sm:text-6xl font-bold text-moss-text-primary leading-tight'>
                        Michael Kaffel
                    </h1>
                    <h2 className='text-2xl sm:text-3xl font-semibold text-moss-green'>
                        Full-Stack Developer & QA Engineer
                    </h2>
                    <p className='text-lg text-moss-text-tertiary max-w-xl leading-relaxed'>
                        I build things and make sure they work. From full-stack web applications
                        to end-to-end test suites — I care about quality at every layer.
                    </p>
                    <div className='flex flex-wrap gap-4 pt-2'>
                        <Link
                            to='/projects'
                            className='bg-moss-amber hover:bg-moss-amber-bright text-moss-deep font-semibold px-6 py-3 rounded-lg transition-colors duration-200'
                        >
                            View Projects →
                        </Link>
                        <a
                            href='/resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='border border-moss-green hover:border-moss-green-bright text-moss-green hover:text-moss-green-bright font-semibold px-6 py-3 rounded-lg transition-colors duration-200'
                        >
                            Download Resume →
                        </a>
                    </div>
                </div>


                {/* Skills Strip */}
                <div className='relative border-t border-b border-moss-border-subtle bg-moss-surface py-5 overflow-hidden'>
                    <div className='ticker-track'>
                        {[...skills, ...skills].map(({ label, icon: Icon }, i) => (
                            <div key={`${label}-${i}`} className='flex items-center gap-2 text-moss-text-primary shrink-0 px-5'>
                                <Icon size={20} />
                                <span className='text-sm font-mono tracking-wide'>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;