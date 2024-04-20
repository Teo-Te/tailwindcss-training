import Link from "next/link";

export default function Login(){
    return (
        //Global Container
        <div className="flex justify-center items-center min-h-screen bg-rose-50">
            {/* Login Card */}
            <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                {/* Left side */}
                <div className="p-6 md:p-20">
                    {/* Title */}
                    <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
                    <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                        Welcome back! Please login to your account.
                    </p>
                    <input 
                    type="text" 
                    className="w-full p-6 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" 
                    placeholder="Enter your email address" 
                    />
                    {/* Middle Content */}
                    <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                        <div className="font-thin text-cyan-700">Forgot Password</div>
                        <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans text-white 
                        rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg 
                        transition hover:-translate-y-0.5 duration-150">
                            <span>Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    {/* Border */}
                    <div className="border-b mt-12 border-b-gray-300"></div>
                    {/* Bottom Content */}
                    <p className="py-6 text-sm font-thin text-center text-gray-400">Or Log In With</p>
                    {/* Social Media Icons */}
                    <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                        <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm 
                        hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9" color="#000000" fill="none">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                                <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-thin">Facebook</span>
                        </button>
                        <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm 
                        hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9" color="#000000" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
                                <path d="M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-thin">Google</span>
                        </button>
                    </div>
                </div>
                {/* Right side */}
                <img src="/sea.jpg" alt="Sea" className="w-[430px] object-cover rounded-r-2xl hidden md:block" />
                {/* Close Button */}
                <Link href="/">
                    <div className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full
                    md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6 text-black group-hover:text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}