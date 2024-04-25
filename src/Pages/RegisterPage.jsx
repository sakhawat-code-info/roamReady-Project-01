import { Link } from "react-router-dom";


const RegisterPage = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 pb-8">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <img className="h-20 w-20 rounded-full" src="https://r2.erweima.ai/imgcompressed/compressed_0256073c49c71077d0e96e412aa4d94d.webp" alt="" />
                    </div>
                    <div className="card shrink-0 w-[700px] shadow-2xl bg-base-100">

                        <form className="card-body">
                            <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">Register Now to our website today for free</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-[#0f6780] text-white font-extrabold">Register Now</button>
                            </div>
                        </form>
                        <p className="my-0 text-xs font-medium text-center text-gray-700 sm:my-5">
                            Already have an account?
                            <Link to={'/loginPage'} className="text-purple-700 hover:text-purple-900"> Login</Link>
                        </p>
                    </div>
                </div>
            </div>







        </>
    );
};

export default RegisterPage;