import LinkBox from '../../Shared/LinkBox/LinkBox';

const MyLinks = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-center">
                    <button className="w-full md:w-[80%] lg:w-[50%] border border-dark-03 rounded-md mt-8 py-3 px-6 text-start cursor-text">
                        Add your links...
                    </button>
                </div>

                {/* Link Box Wrapper */}
                <div className="mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <LinkBox></LinkBox>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyLinks;
