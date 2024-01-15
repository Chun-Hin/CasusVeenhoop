import axios from 'axios';
import {useEffect, useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/auth/login', {
                username: Username,
                password: Password,
            });

            const decodedToken = parseJwt(response.data.accessToken);
            const role = decodedToken.role;

            localStorage.setItem('LoggedInUser', Username);
            localStorage.setItem('Token', response.data.accessToken);
            localStorage.setItem('Role', role);

            toast.success('Logged in successfully', {position: 'top-right', autoClose: 1000});
            setTimeout(() => {
                window.location.href = '/home';
            }, 1000);
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Invalid Username or Password.', {position: 'top-right', autoClose: 1000});
        }
    };

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Log in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={login}>
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Username:
                                    </label>
                                    <input
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="username"
                                        required=""
                                        value={Username}
                                        onChange={handleUsernameChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 ">
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        value={Password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-secondary-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Log in
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?
                                    <a href="/register"
                                       className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-1">
                                        Sign up
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer/>
        </>
    );
}
