import Link from 'next/link';

export default function PriceGrids() {
    return (
            //Global Container
        <div className='bg-slate-800 min-h-screen pt-16'>
            <div className="flex items-center justify-center bg-slate-800">
                {/*Inner Container*/} 
                <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:my-0 md:flex-row md:space-x-8">
                    {/*Card 1, 1st column*/}
                    <div className="bg-slate-700 rounded-xl text-white">
                        {/*Card will be seperated into three containers*/}
                        <div className="p-8 mx-3 mt-3 bg-slate-800 rounded-t-xl">
                            <div className="text-center uppercase">basic</div>
                            <h2 className="mt-10 text-5xl font-serif text-center">100GB</h2>
                            <h3 className="mt-2 text-center">$3.77/Week</h3>
                            <div className="flex justify-center">
                                <Link href='#' className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg 
                                duration-200 hover:bg-violet-800 hover:border-violet-800">
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                        {/*Border*/}
                        <div className="border-t border-slate-700"></div>
                        {/*Lower Container*/}
                        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                            {/*List*/}
                            <div className="flex flex-col space-y-2">
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Lluks i nivelit 1</span>
                                </div>
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Lluks i lire</span>
                                </div>
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Blije se ka lezet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Card 2, 2nd column*/}
                    <div className="bg-violet-600 scale-105 md:scale-110 rounded-xl text-white">
                        {/*Card will be seperated into three containers*/}
                        <div className="p-8 mx-3 mt-3 bg-slate-800 rounded-t-xl">
                            <div className="text-center uppercase">Pro</div>
                            <h2 className="mt-10 text-5xl font-serif text-center">500GB</h2>
                            <h3 className="mt-2 text-center">$6.77/Week</h3>
                            <div className="flex justify-center">
                                <Link href='#' className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg 
                                bg-violet-600 duration-200 hover:bg-violet-800 hover:border-violet-800">
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                        {/*Border*/}
                        <div className="border-t border-slate-700"></div>
                        {/*Lower Container*/}
                        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                            {/*List*/}
                            <div className="flex flex-col space-y-2">
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Lluks i nivelit 2</span>
                                </div>
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Lluks mesatar</span>
                                </div>
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Blije se ka lezet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Card 3, 3rd column*/}
                    <div className="bg-slate-700 rounded-xl text-white">
                        {/*Card will be seperated into three containers*/}
                        <div className="p-8 mx-3 mt-3 bg-slate-800 rounded-t-xl">
                            <div className="text-center uppercase">Premium</div>
                            <h2 className="mt-10 text-5xl font-serif text-center">2TB</h2>
                            <h3 className="mt-2 text-center">$10.77/Week</h3>
                            <div className="flex justify-center">
                                <Link href='#' className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg 
                                duration-200 hover:bg-violet-800 hover:border-violet-800">
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                        {/*Border*/}
                        <div className="border-t border-slate-700"></div>
                        {/*Lower Container*/}
                        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                            {/*List*/}
                            <div className="flex flex-col space-y-2">
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Lluks i nivelit 3</span>
                                </div>
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Lluks i shtrenjte</span>
                                </div>
                                {/*List Item*/}
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-sm ml-1">Blije se ka lezet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/" className='flex justify-center pt-6'>
                <button className="px-10 py-3 my-6 text-center border text-white border-violet-600 rounded-lg 
                                duration-200 hover:bg-violet-800 hover:border-violet-800">
                    Back
                </button>
            </Link>
       </div>
    );
}