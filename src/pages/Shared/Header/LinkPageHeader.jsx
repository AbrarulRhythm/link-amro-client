import Logo from '../../../components/Logo/Logo';
import defaultProfilePic from '../../../assets/images/default-profile.png';

const LinkPageHeader = () => {
    return (
        <div className="container">
            <div className="flex flex-wrap -mx-3 items-center">
                {/* Logo */}
                <div className="w-6/12 px-3">
                    <Logo></Logo>
                </div>

                {/* Profile */}
                <div className="w-6/12 px-3 flex justify-end">
                    <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden">
                        <img src={defaultProfilePic} alt="Profile Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkPageHeader;
