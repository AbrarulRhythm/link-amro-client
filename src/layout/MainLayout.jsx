import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        // Mian Wrapper
        <div className="main-wrapper">
            {/* Header */}
            <header>This is Header</header>
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
