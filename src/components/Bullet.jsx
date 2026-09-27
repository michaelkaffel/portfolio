// h-5 matches text-sm line-height, so the triangle centers on the first line of text
const Bullet = () => (
    <span className='flex h-5 items-center flex-shrink-0 text-moss-green' aria-hidden='true'>
        <svg width='8' height='8' viewBox='0 0 8 8' fill='currentColor'>
            <path d='M1 0.5 L7 4 L1 7.5 Z' />
        </svg>
    </span>
);

export default Bullet;
