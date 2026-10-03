import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFound = () => {
    useDocumentTitle('Page Not Found');

    return (
        <div className='min-h-screen'>
            <div className='max-w-5xl mx-auto px-6 py-20'>
                <section className='mb-16'>
                    <p className='text-moss-green font-mono text-xs uppercase tracking-widest mb-4'>404</p>
                    <h1 className='text-3xl font-bold text-moss-text-primary mb-4'>Page Not Found</h1>
                    <p className='text-moss-text-secondary max-w-xl leading-relaxed mb-8'>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to='/'
                        className='inline-block border border-moss-green text-moss-green px-6 py-3 rounded-lg hover:bg-moss-green hover:text-moss-deep transition-colors'
                    >
                        Back to Home
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default NotFound;
