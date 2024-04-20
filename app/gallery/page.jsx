import Link from 'next/link';

export default function Gallery() {
    return (
        //Global Container
        <div className="felx items-center justify-center min-h-screen bg-cyan-50">
            {/* Gallery Container */}
            <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
                {/* Menu */}
                <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 
                md:mb-24 md:justify-end">
                    {/* Menu Item */}
                    <div className="group">
                        <Link href="#">Vector</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href="#">Illustrations</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href="#">Images</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href="#">Icons</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href="/">Back</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                </div>
                {/* Search */}
                <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                    {/* Input and SVG */}
                    <div className="flex justify-between border-b">
                        <input 
                        type="text" 
                        className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none" 
                        placeholder="Search"
                        />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-gray-300 duration-200 hover:scale-110">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                    {/* Upload button */}
                    <button className="py-3 px-14 text-lg font-normal text-white bg-black border-black rounded-md shadow-2xl 
                    duration-200 hover:bg-white hover:text-black">
                        Upload
                    </button>
                </div>
                {/* Gallery */}
                <div className="grid gap-4 md:grid-cols-3">
                    {/* Gallery Image */}
                    <div className="relative group">
                        <img src="/image1.jpg" alt="Space" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Adobe Stock</p>
                                    <p className="text-xs">25 Like 10 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gallery Image */}
                    <div className="relative group">
                        <img src="/Image2.jpg" alt="Space" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Adobe Stock</p>
                                    <p className="text-xs">25 Like 10 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gallery Image */}
                    <div className="relative group">
                        <img src="/image3.jpg" alt="Space" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Flickr</p>
                                    <p className="text-xs">25 Like 10 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gallery Image */}
                    <div className="relative group">
                        <img src="/image4.jpg" alt="Space" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Adobe Stock</p>
                                    <p className="text-xs">25 Like 10 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gallery Image */}
                    <div className="relative group">
                        <img src="/image5.jpg" alt="Space" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Flickr</p>
                                    <p className="text-xs">25 Like 10 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gallery Image */}
                    <div className="relative group">
                        <img src="/image6.jpg" alt="Space" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Flickr</p>
                                    <p className="text-xs">25 Like 10 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}