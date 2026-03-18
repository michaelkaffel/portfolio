import { Link } from 'react-router-dom';
import ShimmerTags from '../components/ShimmerTags';
import wwtScreenshot from '../assets/images/wwt-screenshot.jpg'


const stack = ['React', 'Node.js', 'Express', 'MongoDB', 'Playwright', 'Google Cloud']

const Projects = () => {

    return (
        <div className='bg-[#0d1a0e] min-h-screen text-slate-200'>
            <div className='max-w-5xl mx-auto px-6 py-20'>
                <h1 className='text-4xl font-bold text-slate-200'>Projects</h1>
                <p className='text-slate-400 mb-16 max-w-xl'>
                    A look at what I've built — from full-stack applications to the test
                    suites that back them up.
                </p>

                {/* Featured Project */}
                <section className='mb-16'>
                    <p className='text-green-400 font-mono text-xs uppercase tracking-widest mb-4'>
                        Featured Project
                    </p>
                    <div className='bg-[#0a140b] border border-green-900 rounded-2xl overflow-hidden'>
                        <img
                            src={wwtScreenshot}
                            alt='Where Was That app screenshot'
                            className='w-full object-cover max-h-80'
                        />

                        {/* Content */}
                        <div className='p-8 flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-2xl font-bold text-white'>Where Was That</h2>
                                <p className='text-slate-400 leading-relaxed'>
                                    A full-stack MERN application for tracking personal outdoor locations
                                    — campsites, hikes, and overlooks — with photo uploads, notes, map
                                    pins, and favorites. Built and deployed to production with Google
                                    Cloud Functions, Firebase Hosting, and Google Cloud Storage.
                                </p>
                            </div>

                            {/* Challenges */}
                            <div className='flex flex-col gap-3'>
                                <h3 className='text-green-400 font-semibold text-sm uppercase tracking-widest font-mono'>
                                    Key Challenges Solved
                                </h3>
                                <ul className='flex flex-col gap-2'>
                                    {[
                                        'Adapted Express middleware for Google Cloud Functions\' HTTP pre-processing, including custom raw body restoration and query string parsing.',
                                        'Built a full Playwright E2E test suite covering auth flows, CRUD operations, and edge cases across the complete user journey.',
                                    ].map((item) => (
                                        <li key={item} className='text-slate-300 text-sm flex items-start gap-2'>
                                            <span className='text-green-600 mt-1 flex-shrink-0'>▸</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Stack tags */}
                            <ShimmerTags items={stack} />

                            {/* Buttons */}
                            <div className='flex flex-wrap gap-4 pt-2'>
                                <a
                                    href='https://where-was-that-place.web.app'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-green-500 hover:bg-green-400 text-[#0d1a0e] font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm'
                                >
                                    Live Demo →
                                </a>
                                <a
                                    href='https://github.com/michaelkaffel/where-was-that-fullstack'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='border border-green-700 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm'
                                >
                                    GitHub →
                                </a>
                                <Link
                                    to='/qa-testing'
                                    className='border border-green-700 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm'
                                >
                                    View Test Suite →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Secondary Projects */}
                <section>
                    <p className='text-green-400 font-mono text-xs uppercase tracking-widest mb-6'>
                        More Projects
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        {/* Placeholder */}
                        <div className='bg-[#0a140b] border border-green-900 border-dashed rounded-2xl p-8 flex flex-col gap-3 justify-center items-start'>
                            <span className='text-green-800 font-mono text-xs uppercase tracking-widest'>
                                Coming Soon
                            </span>
                            <h3 className='text-slate-400 font-semibold'>
                                Freelance / Volunteer Project
                            </h3>
                            <p className='text-slate-600 text-sm'>
                                Next project in progress.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;