import { Link } from 'react-router-dom';

const skills = [
    'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Playwright', 'Git', 'Tailwind CSS', 'REST APIs', 'HTML & CSS']

const Home = () => {
    return (
        <div className='bg-[#0d1a0e] min-h-screen text-slate-200'>

            {/* Hero */}
            <section className='max-w-5xl mx-auto px-6 py-28 flex flex-col items-start gap-6'>
                <p className='text-green-400 font-mono text-sm tracking-widest uppercase'>
                    Available for work
                </p>
                <h1 className='text-5xl sm:text-6xl font-bold text-white leading-tight'>
                    Michael Kaffel
                </h1>
                <h2 className='text-2xl sm:text-3xl font-semibold text-slate-300'>
                    Full-Stack Developer & QA Engineer
                </h2>
                <p className='text-lg text-slate-400 max-w-xl leading-relaxed'>
                    I build things and make sure they work. From full-stack web applications
                    to end-to-end test suites — I care about quality at every layer.
                </p>
                <div className='flex flex-wrap gap-4 pt-2'>
                    <Link
                        to='/projects'
                        className='bg-green-500 hover:bg-green-400 text-[#0d1a0e] font-semibold px-6 py-3 rounded-lg transition-colors duration-200'
                    >
                            View Projects →
                    </Link>
                    <a
                        href='/resume.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border border-green-600 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold px-6 py-3 rounded-lg transition-colors duration-200'
                    >
                        Download Resume →
                    </a>
                </div>
            </section>

            {/* Skills Strip */}
            <section className='border-t border-b border-green-900 bg-[#0a140b] py-4 overflow-hidden'>
                <div className='flex gap-10 px-6 flex-wrap justify-center'>
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className='text-slate-400 text-sm font-mono tracking-wide whitespace-nowrap'
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;