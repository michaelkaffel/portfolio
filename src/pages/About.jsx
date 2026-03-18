import headshot from '../assets/images/aboutme-headshot.jpg';
import useDocumentTitle from '../hooks/useDocumentTitle';

const skills = {
    'QA & Testing': [
        'Playwright', 'Manual Testing', 'Bug Documentation',
        'Regression Testing', 'Cross-browser Testing', 'Postman',
    ],
    'Frontend': [
        'React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS',
        'Redux Toolkit', 'Vite'
    ],
    'Backend & Tools': [
        'Node.js', 'Express', 'MongoDB', 'Mongoose',
        'Git', 'REST APIs'
    ]
};

const About = () => {

    useDocumentTitle('About');
    
    return (
        <div className='min-h-screen'>
            <div className='max-w-5xl mx-auto px-6 py-20'>

                {/* Photo + Intro */}
                <section className='flex flex-col md:flex-row gap-12 items-start mb-20'>
                        <img 
                            src={headshot}
                            alt='Michael Kaffel'
                            className='w-48 h-60 rounded-xl object-cover flex-shrink-0'
                        />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl font-bold text-moss-text-primary'>About Me</h1>
                        <p className='text-moss-text-primary text-lg leading-relaxed'>
                            I'm a full-stack developer and QA engineer with over six years of
                            real-world testing experience. At Nutritious Movement, I was part of
                            the web team responsible for QA — running pre- and post-release test
                            cycles, documenting bugs with full repro steps, validating across
                            browsers, and verifying regression fixes on a production site with a
                            global audience.
                        </p>
                        <p className='text-moss-text-secondary leading-relaxed'>
                            A bootcamp accelerated my path into full-stack development, but
                            quality has always been central to how I work. I now combine
                            hands-on development with the testing discipline I built in a
                            professional QA role.
                        </p>
                    </div>
                </section>

                {/* My Story */}
                <section className='mb-20'>
                    <h2 className='text-2xl font-bold text-moss-green mb-6'>My Journey</h2>
                    <div className='flex flex-col gap-4 text-moss-text-primary leading-relaxed max-w-2xl'>
                        <p>
                            My path into tech runs through an earlier career that had more in
                            common with software development than it might appear. Before joining
                            Nutritious Movement, I spent years as a certified practitioner and
                            teacher trainer for their Restorative Exercise Specialist program — a
                            biomechanics-based methodology grounded in physics, kinesiology, and
                            human physiology. From 2015 to 2018, I taught that curriculum and
                            helped certify new instructors, which meant breaking down complex
                            systems clearly and evaluating whether someone truly understood them.
                            That's a skill set that transfers directly into QA and technical
                            communication.
                        </p>
                        <p>
                            When I joined Nutritious Movement's web and content team, I gravitated
                            naturally toward the technical side — eventually taking on QA
                            responsibilities across both their WordPress platform and a subsequent
                            custom-built site. That meant coordinating test passes, documenting
                            defects with clear reproduction steps, validating across browsers, and
                            ensuring releases held up for a global audience through a full platform
                            migration.
                        </p>
                        <p>
                            That QA work made me want to understand the full stack better. It led
                            me to a bootcamp covering React, Node.js, Express, and MongoDB — and
                            then to self-directed study across the MERN stack. My anchor project,
                            Where Was That, is a full-stack app I built and deployed to production,
                            complete with a Playwright end-to-end test suite covering the full user
                            journey.
                        </p>
                        <p>
                            I'm now looking for roles where I can contribute across both development
                            and quality — whether that's QA engineering, full-stack development, or
                            somewhere in between.
                        </p>
                    </div>
                </section>

                {/* Skills Grid */}
                <section>
                    <h2 className='text-2xl font-bold text-moss-green mb-8'>Skills</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className='bg-moss-surface border border-moss-border rounded-xl p-6'>
                                <h3 className='text-moss-green font-semibold font-mono text-sm uppercase tracking-widest mb-4'>
                                    {category}
                                </h3>
                                <ul className='flex flex-col gap-2'>
                                    {items.map((skill) => (
                                        <li key={skill} className='text-moss-text-primary text-sm flex items-center gap-2'>
                                            <span className='text-moss-green'>▸</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div> 
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;