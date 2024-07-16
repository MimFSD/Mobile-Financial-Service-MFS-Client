import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <section className="bg-blue-600 ">
                <div className=" mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8 ">
                    <div className=" sm:py-16 lg:py-24 2xl:pl-24 lg:mt-0 md:mt-10 mt-24">
                        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                            <div>
                                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Use Mobile Financial Service(MFS) for better performance</h2>
                                <p className="mt-4 text-base text-gray-50">Transactions are most secure with ReadyPay. A 40 TK bonus is available only after user registration. Agents can receive a bonus of up to 10,000 TK upon registration.</p>
                                <p className="text-sm text-right hover:text-yellow-300 lg:p-0 p-4">শর্ত প্রযোজ্য</p>

                                <div className=" items-center mt-8 ">
                                    <Link to="register"><button className="btn btn-warning">Registation</button></Link>
                                </div>
                            </div>

                            <div className="relative px-12">
                                <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]" fill="currentColor" viewBox="0 0 8 8">
                                    <circle cx="4" cy="4" r="3" />
                                </svg>
                                <img className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;