import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import UseAuth from "../AuthProvider/UseAuth";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { createUser, setUser } = UseAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        if (data.password.length < 6) {
            toast.error('Minimum 6 digits required');
            return;
        } else if (!/[A-Z]/.test(data.password)) {
            toast.error('Use Uppercase')
            return;
        } else if (!/[a-z]/.test(data.password)) {
            toast('Use Lowercase')
            return;
        }






        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Registration Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
                // ..
            });
    }




    return (
        <>
            <div className="hero min-h-screen bg-base-200 pb-8">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <img className="h-20 w-20 rounded-full" src="https://r2.erweima.ai/imgcompressed/compressed_0256073c49c71077d0e96e412aa4d94d.webp" alt="" />
                    </div>
                    <div className="card shrink-0 w-[700px] shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">Register Now to our website today for free</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-800 ml-2">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-800 ml-2">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photoUrl", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoUrl && <span className="text-red-800 ml-2">Photo URL is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-800 ml-2">Password is required</span>}
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
                <ToastContainer />
            </div>







        </>
    );
};

export default RegisterPage;