import notFound from '../../assets/images/no-links.png';

const LinksNotFound = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen space-y-6">
            <img src={notFound} className="w-[60%] md:w-[40%] lg:w-[30%] 2xl:w-[20%]" alt="No links found" />
            <div className="text-center">
                <h4 className="text-2xl text-dark-08 font-semibold mb-1">You've finished!</h4>
                <p>Nothing in Primary</p>
            </div>
        </div>
    );
};

export default LinksNotFound;
