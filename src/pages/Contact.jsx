
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialForm = { from_name: '', from_email: '', subject: '', message: '' };

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            );
            setStatus('sent');
            setForm(initialForm);
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    };

    return (
        <div className='bg-[#0d1a0e] min-h-screen text-slate-200'>
            <div className='max-w-5xl mx-auto px-6 py-20'>

                {/* Heading */}
                <section className='mb-16'>
                    <h1 className='text-3xl font-bold text-white mb-4'>Let's Work Together</h1>
                    <p className='text-slate-400 max-w-xl leading-relaxed'>
                        Open to QA engineering and full-stack development opportunities.
                        Whether you have a role, a project, or just a question — feel free to reach out.
                    </p>
                </section>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>

                    {/* Form */}
                    <section>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-green-400 font-mono text-xs uppercase tracking-widest'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='from_name'
                                    value={form.from_name}
                                    onChange={handleChange}
                                    required
                                    placeholder='Your name'
                                    className='bg-[#0a140b] border border-green-900 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-green-500 transition-colors'
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label className='text-green-400 font-mono text-xs uppercase tracking-widest'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    name='from_email'
                                    value={form.from_email}
                                    onChange={handleChange}
                                    required
                                    placeholder='your@email.com'
                                    className='bg-[#0a140b] border border-green-900 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-green-500 transition-colors'
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label className='text-green-400 font-mono text-xs uppercase tracking-widest'>
                                    Subject
                                </label>
                                <input
                                    type='text'
                                    name='subject'
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder='What is this about?'
                                    className='bg-[#0a140b] border border-green-900 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-green-500 transition-colors'
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label className='text-green-400 font-mono text-xs uppercase tracking-widest'>
                                    Message
                                </label>
                                <textarea
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder='Your message...'
                                    className='bg-[#0a140b] border border-green-900 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-green-500 transition-colors resize-none'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={status === 'sending'}
                                className='bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-700 text-[#0d1a0e] font-semibold px-6 py-3 rounded-lg transition-colors duration-200'
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message →'}
                            </button>

                            {status === 'sent' && (
                                <p className='text-green-400 text-sm font-mono'>
                                    ✓ Message sent — I'll be in touch soon.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className='text-red-400 text-sm font-mono'>
                                    ✗ Something went wrong. Try emailing me directly.
                                </p>
                            )}
                        </form>
                    </section>

                    {/* Direct links */}
                    <section className='flex flex-col gap-8'>
                        <div>
                            <p className='text-green-400 font-mono text-xs uppercase tracking-widest mb-6'>
                                Direct Links
                            </p>
                            <ul className='flex flex-col gap-4'>
                                {[
                                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-kaffel-0797173a2/', display: 'linkedin.com/in/michaelkaffel' },
                                    { label: 'GitHub', href: 'https://github.com/michaelkaffel', display: 'github.com/michaelkaffel' },
                                    { label: 'Email', href: 'mailto:michaeldkaffel@gmail.com', display: 'michaeldkaffel@gmail.com' },
                                ].map(({ label, href, display }) => (
                                    <li key={label} className='flex flex-col gap-1'>
                                        <span className='text-green-400 font-mono text-xs uppercase tracking-widest'>
                                            {label}
                                        </span>
                                        <a
                                            href={href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-slate-300 hover:text-green-300 transition-colors duration-200 text-sm'
                                        >
                                            {display}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className='text-green-400 font-mono text-xs uppercase tracking-widest mb-4'>
                                Resume
                            </p>
                            <a
                                href='/resume.pdf'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='border border-green-700 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm inline-block'
                            >
                                Download Resume →
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;