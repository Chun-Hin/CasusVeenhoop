import axios from 'axios';
import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Schoolclass, setSchoolclass] = useState('');

    const register = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/auth/register', {
                username: Username,
                password: Password,
                schoolclass: Schoolclass,
            });
            console.log(response.data);

            toast.success('Registered in successfully', { position: "top-right", autoClose: 1000 });

            setTimeout(function () {
                window.location.href = '/';
            }, 1000);

        } catch (error) {
            console.error(error);
            toast.error('Username already in use', { position: "top-right", autoClose: 1000 });
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleClassChange = (e) => {
        setSchoolclass(e.target.value);
    };


    return (
        <>
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Create your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={register}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Username:
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="username"
                                        value={Username}
                                        onChange={handleUsernameChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        value={Password}
                                        onChange={handlePasswordChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Class:
                                    </label>
                                    <input
                                        name="schoolclass"
                                        id="schoolclass"
                                        placeholder="class"
                                        value={Schoolclass}
                                        onChange={handleClassChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-secondary-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Register
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account?
                                    <a href="/"
                                       className="font-medium text-primary-600 hover:underline ml-1">
                                        Log in
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default Register;
