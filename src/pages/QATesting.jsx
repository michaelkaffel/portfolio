import { useState, useEffect } from 'react';

const tools = [
    'Playwright', 'Manual Testing', 'Bug Reporting',
    'Regression Testing', 'Cross-browser Testing', 'Postman',
];

const QATesting = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % tools.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className='bg-[#0d1a0e] min-h-screen text-slate-200'>
            <div className='max-w-5xl mx-auto px-6 py-20'>
                <h1 className='text-4xl font-bold text-white mb-4'>QA & Testing</h1>
                <p className='text-slate-400 mb-16 max-w-xl leading-relaxed'>
                    I approach quality as a discipline, not an afterthought. Whether writing
                    automated test suites or validating releases manually, I care about
                    catching issues before users do.
                </p>

                {/* Playwright Suite */}
                <section className='mb-16'>
                    <p className='text-green-400 font-mono text-xs uppercase tracking-widest mb-4'>
                        Automated Testing
                    </p>
                    <div className='bg-[#0a140b] border border-green-900 rounded-2xl p-8 flex flex-col gap-6'>
                        <div>
                            <h2 className='text-2xl font-bold text-white mb-2'>
                                Playwright E2E Suite — Where Was That
                            </h2>
                            <p className='text-slate-400 leading-relaxed'>
                                A full end-to-end test suite covering the complete user journey
                                of Where Was That. Written in Playwright with a shared browser
                                context across hooks for realistic session simulation.
                            </p>
                        </div>

                        {/* Coverage */}
                        <div>
                            <h3 className='text-green-400 font-semibold text-sm uppercase tracking-widest font-mono mb-4'>
                                Coverage
                            </h3>
                            <ul className='flex flex-col gap-2'>
                                {[
                                    'User registration and login (local auth)',
                                    'Google OAuth flow',
                                    'Place creation with image upload',
                                    'Place deletion with GCS cleanup verification',
                                    'Account deletion and session teardown',
                                    'Edge cases: duplicate registration, invalid login',
                                ].map((item) => (
                                    <li key={item} className='text-slate-300 text-sm flex items-start gap-2'>
                                        <span className='text-green-600 mt-1 flex-shrink-0'>▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Code snippet */}
                        <div>
                            <h3 className='text-green-400 font-semibold text-sm uppercase tracking-widest font-mono mb-4'>
                                Sample — Auth Flow
                            </h3>
                            <pre className='bg-[#060f07] border border-green-950 rounded-xl p-6 text-sm text-green-50 font-mono overflow-x-auto leading-relaxed'>
                                {`test('should register a new user', async ({ page }) => {
  await page.goto('/');
  await openNav(page);
  await page.getByRole('link', { name: 'Register' }).click();

  await page.getByLabel('Username').fill(testUser.username);
  await page.getByLabel('Email').fill(testUser.email);
  await page.getByLabel('Password').fill(testUser.password);
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('Registration successful')).toBeVisible();
});`}
                            </pre>
                        </div>

                        <div className='flex gap-4'>
                            <a
                                href='https://github.com/michaelkaffel/where-was-that-fullstack/tree/main/e2e'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='border border-green-700 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm'
                            >
                                View on GitHub →
                            </a>

                        </div>
                    </div>
                </section>

                {/* Manual QA */}
                <section className='mb-16'>
                    <p className='text-green-400 font-mono text-xs uppercase tracking-widest mb-4'>
                        Manual QA Experience
                    </p>
                    <div className='bg-[#0a140b] border border-green-900 rounded-2xl p-8 flex flex-col gap-4'>
                        <h2 className='text-2xl font-bold text-white'>Nutritious Movement</h2>
                        <p className='text-slate-400 leading-relaxed'>
                            Part of a small web team responsible for QA across both a WordPress
                            platform and a subsequent custom-built site — through a full platform
                            migration serving a global audience.
                        </p>
                        <ul className='flex flex-col gap-2'>
                            {[
                                'Pre- and post-release test cycles across browsers and devices',
                                'Bug documentation with full reproduction steps and environment details',
                                'Regression verification after developer fixes',
                                'Cross-browser validation (Chrome, Firefox, Safari)',
                                'Coordinated testing during full platform migration',
                            ].map((item) => (
                                <li key={item} className='text-slate-300 text-sm flex items-start gap-2'>
                                    <span className='text-green-600 mt-1 flex-shrink-0'>▸</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Tools */}
                <section>
                    <p className='text-green-400 font-mono text-xs uppercase tracking-widest mb-6'>
                        Tools & Methodologies
                    </p>
                    <div className='flex flex-wrap gap-3'>
                        {tools.map((tool, i) => {
                            const distance = Math.abs(i - activeIndex);
                            const brightness = distance === 0 ? 1.2
                                : distance === 1 ? 1.05
                                    : distance === 2 ? 0.85
                                        : distance === 3 ? 0.65
                                            : 0.5;

                            return (
                                <span
                                    key={tool}
                                    style={{ filter: `brightness(${brightness})` }}
                                    className="shimmer-tag text-green-300 text-xs font-mono px-3 py-1 rounded-full border border-green-800"
                                >
                                    {tool}
                                </span>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default QATesting;