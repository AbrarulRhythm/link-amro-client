import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className="text-2xl font-semibold text-dark-09 hover:opacity-80 duration-100" title="Link Amro">
            Link <span className="text-primary">Amro</span>
        </Link>
    );
};

export default Logo;
