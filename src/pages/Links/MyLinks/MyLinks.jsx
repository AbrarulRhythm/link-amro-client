const MyLinks = () => {
    const text = 'Personal Portfolio HTML Template & React template is also';

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
                        <div className="pt-4.5 px-4.5 pb-10.5 bg-white border border-dark-03 rounded-md hover:shadow-sm hover:cursor-pointer">
                            <h3 className="text-base font-medium text-dark-09 mb-4">
                                {text.length > 50 ? `${text.slice(0, 50)}...` : text}
                            </h3>

                            {/* Links */}
                            <div className="text-sm flex flex-col gap-2.5">
                                <a
                                    href="https://mountainclimbersstar.com/demo/html/agkn"
                                    target="_blank"
                                    className="hover:text-dark-09 duration-100 wrap-anywhere"
                                >
                                    https://mountainclimbersstar.com/demo/html/agkn
                                </a>
                                <a
                                    href="https://translate.google.com/?sl=en&tl=bn&op=translate"
                                    target="_blank"
                                    className="hover:text-dark-09 duration-100 active:text-primary"
                                >
                                    https://translate.google.com/?sl=en&tl=bn&op=translate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyLinks;
