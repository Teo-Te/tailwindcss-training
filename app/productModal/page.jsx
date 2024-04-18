import Link from "next/link";

export default function ProductModal() {
    return (
        //Global Container
        <div className="bg-slate-100 min-h-screen">
            <div className="flex items-center justify-center pt-10 bg-slate-100">
                {/* Product card container */}
                <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl 
                md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
                    {/* Product Image */}
                    <div className="">
                        <img src="/product.png" alt="Produkti" className="mx-auto duration-200 w-72 hover:scale-105"/>
                    </div>
                    {/* Product Info */}
                    <div className="flex flex-col space-y-6">
                        {/* Product Label, title and description */}
                        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                            <div>
                                <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                                    Free Shipping
                                </div>
                            </div>
                            {/* Product Title */}
                            <div className="max-w-sm text-2xl font-medium">
                                Iphone 15 Pro Max
                            </div>
                            {/* Product Price */}
                            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                                <p className="line-through">$1200</p>
                                <p className="text-5xl font-bold">$1000</p>
                                <p className="text-sm font-light text-gray-400">Offer Valid till Next Year</p>
                            </div>
                            {/* Buttons */}
                            <div className="group">
                                <button className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 
                                border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 
                                group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                                    <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">Buy Now</div>
                                </button>
                            </div>
                            {/* Product Stock */}
                            <div className="flex items-center space-x-3 group">
                                <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                                <div className="text-sm">Stock is full of it</div>
                            </div>
                            {/* Bottom Buttons */}
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                                <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300
                                rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                                    </svg>
                                    <span>Add to Cart</span>
                                </button>
                                <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300
                                rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    <span>Add to Wishlist</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 bg-slate-100">
                <Link href="/">
                    <button className="px-5 py-3 md:mt-6 font-medium text-xs rounded-md text-gray-800 bg-gray-300 hover:bg-gray-500 hover:text-white duration-500">
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )
}