import { Link } from 'react-router-dom';
import ShimmerTags from '../components/ShimmerTags';
import useDocumentTitle from '../hooks/useDocumentTitle';

const skills = [
    'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Playwright', 'Git', 'Tailwind CSS', 'REST APIs', 'HTML & CSS']

const Home = () => {
    useDocumentTitle('Home');

    return (
        <div className='min-h-screen'>

            {/* Hero */}
            <section className='max-w-5xl mx-auto px-6 py-28 flex flex-col items-start gap-6'>
                <p className='text-moss-amber font-mono text-sm tracking-widest uppercase'>
                    Available for work
                </p>
                <h1 className='text-5xl sm:text-6xl font-bold text-moss-text-primary leading-tight'>
                    Michael Kaffel
                </h1>
                <h2 className='text-2xl sm:text-3xl font-semibold text-moss-green'>
                    Full-Stack Developer & QA Engineer
                </h2>
                <p className='text-lg text-moss-text-secondary max-w-xl leading-relaxed'>
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
            </section>

            {/* Skills Strip */}
            <section className='border-t border-b border-moss-border-subtle bg-moss-surface py-4 overflow-hidden'>
                <ShimmerTags 
                    items={skills}
                    wrapperClassName='flex gap-10 px-6 flex-wrap justify-center'
                    className='shimmer-tag text-moss-text-secondary text-sm font-mono tracking-wide whitespace-nowrap px-3 py-1 rounded-full border border-moss-border'
                    subtle
                />
            </section>
        </div>
    );
};

export default Home;