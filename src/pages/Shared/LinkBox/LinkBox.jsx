const text = 'Personal Portfolio HTML Template & React template is also';

const LinkBox = () => {
    return (
        <div className="pt-4.5 px-4.5 pb-10.5 bg-white border border-dark-03 rounded-md hover:shadow-sm hover:cursor-pointer">
            <h3 className="text-base font-medium text-dark-09 mb-4">{text.length > 50 ? `${text.slice(0, 50)}...` : text}</h3>

            {/* Links */}
            <div className="text-sm flex flex-col gap-2.5">
                <a
                    href="https://mountainclimbersstar.com/demo/html/agkn"
                    target="_blank"
                    className="wrap-anywhere hover:text-dark-09 duration-100 active:text-primary"
                >
                    https://mountainclimbersstar.com/demo/html/agkn
                </a>
            </div>
        </div>
    );
};

export default LinkBox;
