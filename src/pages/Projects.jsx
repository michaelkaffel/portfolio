import { Link } from 'react-router-dom';
import ShimmerTags from '../components/ShimmerTags';
import wwtScreenshot from '../assets/images/wwt-screenshot.jpg';
import useDocumentTitle from '../hooks/useDocumentTitle';


const stack = ['React', 'Node.js', 'Express', 'MongoDB', 'Playwright', 'Google Cloud']

const Projects = () => {
    useDocumentTitle('Projects');

    return (
        <div className='min-h-screen'>
            <div className='max-w-5xl mx-auto px-6 py-20'>
                <h1 className='text-4xl font-bold text-moss-text-primary mb-4'>Projects</h1>
                <p className='text-moss-text-secondary mb-16 max-w-xl'>
                    A look at what I've built — from full-stack applications to the test
                    suites that back them up.
                </p>

                {/* Featured Project */}
                <section className='mb-16'>
                    <p className='text-moss-amber font-mono text-xs uppercase tracking-widest mb-4'>
                        Featured Project
                    </p>
                    <div className='bg-moss-surface border border-moss-border rounded-2xl overflow-hidden'>
                        <img
                            src={wwtScreenshot}
                            alt='Where Was That app screenshot'
                            className='w-full object-cover max-h-80'
                        />

                        {/* Content */}
                        <div className='p-8 flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-2xl font-bold text-moss-text-primary'>Where Was That</h2>
                                <p className='text-moss-text-secondary leading-relaxed'>
                                    A full-stack MERN application for tracking personal outdoor locations
                                    — campsites, hikes, and overlooks — with photo uploads, notes, map
                                    pins, and favorites. Built and deployed to production with Google
                                    Cloud Functions, Firebase Hosting, and Google Cloud Storage.
                                </p>
                            </div>

                            {/* Challenges */}
                            <div className='flex flex-col gap-3'>
                                <h3 className='text-moss-green font-semibold text-sm uppercase tracking-widest font-mono'>
                                    Key Challenges Solved
                                </h3>
                                <ul className='flex flex-col gap-2'>
                                    {[
                                        'Adapted Express middleware for Google Cloud Functions\' HTTP pre-processing, including custom raw body restoration and query string parsing.',
                                        'Built a full Playwright E2E test suite covering auth flows, CRUD operations, and edge cases across the complete user journey.',
                                    ].map((item) => (
                                        <li key={item} className='text-moss-text-primary text-sm flex items-start gap-2'>
                                            <span className='text-moss-green mt-1 flex-shrink-0'>▸</span>
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
                                    className='bg-moss-amber hover:bg-moss-amber-bright text-moss-deep font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm'
                                >
                                    Live Demo →
                                </a>
                                <a
                                    href='https://github.com/michaelkaffel/where-was-that-fullstack'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='border border-moss-green hover:border-moss-green-bright text-moss-green hover:text-moss-green-bright font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm'
                                >
                                    GitHub →
                                </a>
                                <Link
                                    to='/qa-testing'
                                    className='border border-moss-green hover:border-moss-green-bright text-moss-green hover:text-moss-green-bright font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm'
                                >
                                    View Test Suite →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Secondary Projects */}
                <section>
                    <p className='text-moss-green font-mono text-xs uppercase tracking-widest mb-6'>
                        More Projects
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        {/* Placeholder */}
                        <div className='bg-moss-surface border border-moss-border border-dashed rounded-2xl p-8 flex flex-col gap-3 justify-center items-start'>
                            <span className='text-moss-text-muted font-mono text-xs uppercase tracking-widest'>
                                Coming Soon
                            </span>
                            <h3 className='text-moss-text-secondary font-semibold'>
                                Freelance / Volunteer Project
                            </h3>
                            <p className='text-moss-text-muted text-sm'>
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