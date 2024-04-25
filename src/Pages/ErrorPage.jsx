import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="relative h-screen overflow-hidden bg-indigo-900">
                <img src="https://www.tailwind-kit.com/images/landscape/8.svg" className="absolute object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                    <div className="relative z-10 flex flex-col items-center w-full font-mono">
                        <p className="font-extrabold text-white text-8xl animate-bounce">
                            404
                        </p>
                        <h1 className="mb-20 text-5xl font-extrabold leading-tight text-center text-white">
                            You&#x27;re alone here
                        </h1>

                        <div className="flex gap-48">
                            <Link to={'/'} className="w-full mb-2 btn btn-lg btn-light sm:w-auto sm:mb-0">Go to Back</Link>
                            <a href="#" className="w-full mb-2 btn btn-lg btn-white sm:w-auto sm:mb-0">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;