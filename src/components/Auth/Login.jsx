import React, { useContext } from 'react';


import Swal from 'sweetalert2';

import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    title: "User Logged In Successfully",
                    icon: "success",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: `Error logging in, ${error.code}`,
                    icon: "warning",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            });
    };

    const HandleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                Swal.fire({
                    title: "User Logged In Successfully",
                    icon: "success",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: `Error logging in, ${error.code}`,
                    icon: "warning",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <Helmet>
                <title>Woman's products | LogIn</title>
            </Helmet>

            <h2 className="text-3xl sm:text-4xl text-center font-bold text-sky-800 py-10">Login Now!</h2>

            <div className="w-full max-w-md px-4">
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            // src={cover}
                            className="w-full h-40 sm:h-60 object-cover rounded-t-lg"
                            alt="productses!"
                        />
                    </figure>
                    <form onSubmit={handleLogIn} className="card-body space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <button
                                type="button"
                                onClick={HandleGoogleSignIn}
                                className="btn text-white bg-red-600 w-full"
                            >
                                Google Login
                            </button>
                        </div>
                    </form>

                    <p className="text-center py-4">
                        New Here? Please{' '}
                        <Link to='/signup'>
                            <button className="btn btn-link">Register</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;