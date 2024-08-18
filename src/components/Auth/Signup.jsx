import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
;


import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';
import { Helmet } from 'react-helmet-async';

const Signup = () => {
    const { createUser } = useContext(AuthContext) || {};
    const navigate = useNavigate();

    const handleregister = e => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = { email, password, displayName };
        console.log(data);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
                Swal.fire({
                    title: "User Successfully Registered",
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
            })
            .catch(error => {
                Swal.fire({
                    title: `Error registering, ${error.code}`,
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
                console.error(error);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <Helmet>
                <title>Basic Store | Registration</title>
            </Helmet>

          
            <h2 className="text-3xl sm:text-4xl text-center font-bold text-sky-800 py-10">Register Now!</h2>

            <div className="w-full max-w-md px-4">
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            // src={cover}
                            className="w-full h-40 sm:h-60 object-cover rounded-t-lg"
                            alt="productses!"
                        />
                    </figure>
                    <form onSubmit={handleregister} className="card-body space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
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
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary w-full">Submit</button>
                        </div>
                        <p className="text-center">
                            Already have an account?{' '}
                            <Link to='/login'>
                                <button className="btn btn-link">Log In</button>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;