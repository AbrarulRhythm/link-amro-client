import { Outlet } from 'react-router';
import LinkPageHeader from '../pages/Shared/Header/LinkPageHeader';

const MainLayout = () => {
    return (
        // Mian Wrapper
        <div className="main-wrapper mt-21">
            {/* Header */}
            <header className="bg-white py-3.5 border-b border-dark-03 w-full fixed top-0">
                <LinkPageHeader></LinkPageHeader>
            </header>
            {/* Header End */}

            {/* ==================== Mian ==================== */}
            <main className="site-main">
                <Outlet></Outlet>
            </main>
            {/* ==================== Mian End ==================== */}

            {/* Footer */}
            <footer>This is Site Footer</footer>
            {/* Footer End */}
        </div>
        // Mian Wrapper End
    );
};

export default MainLayout;
