'use client'
import Link from 'next/link';

export default function Shortly(){

    const handleErrors = (e) => {
        const input = document.getElementById('link-input');
        const errorMsg = document.getElementById('error-msg');
        e.preventDefault();

        function isUrlValid(str) {
            const pattern = new RegExp(
              '^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', // fragment locator
              'i'
            );
            return pattern.test(str);
           }
           
        if(input.value === ''){
            errorMsg.textContent = 'Please add a link';
            errorMsg.classList.add('text-red');
            input.classList.add('border-red');
        } else if (!isUrlValid(input.value)){
            errorMsg.textContent = 'Please add a valid link';
            errorMsg.classList.add('text-red');
            input.classList.add('border-red');
        } else {
            errorMsg.textContent = 'Success!';
            errorMsg.classList.remove('text-red');
            errorMsg.classList.add('text-green-500');
            input.classList.remove('border-red');
            input.classList.add('border-green-500');
        }
    }

    const navToggle = () => {
        const menuBtn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        menuBtn.classList.toggle('open');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }

    return (
        <div className="font-popins">
            {/* Nav Container */}
            <nav className="relative mx-auto container p-6">
                <div className="flex items-center justify-between">
                    {/* Flex container for the logo and the menu */}
                    <div className="flex items-center space-x-20">
                        <img src="/Shortly/logo.svg" alt="logo" />
                         {/* Left menu */}
                         <div className="hidden lg:flex space-x-8 font-bold">
                            <Link href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Features</Link>
                            <Link href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</Link>
                            <Link href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Rescourses</Link>
                            <Link href="/" className='text-grayishViolet hover:text-veryDarkViolet'>Back</Link>
                         </div>
                    </div>
                    {/* Right menu */}
                    <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
                        <div className="hover:text-veryDarkViolet">Log in</div>
                        <Link href="#" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
                            Sign Up
                        </Link>
                    </div>
                    {/* TODO: Hamburger menu */}
                    <button id="menu-btn" onClick={navToggle} type="button" className="z-40 block hamburger md:hidden focus:outline-none">
                        <span className="hamburger-top bg-black"></span>
                        <span className="hamburger-middle bg-black"></span>
                        <span className="hamburger-bottom bg-black"></span>
                    </button>
                </div>
                {/* TODO: Mobile menu */}
                <div id="menu" className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
                    <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
                        <Link href="#" className='w-full text-center'>Features</Link>
                        <Link href="#" className='w-full text-center'>Pricing</Link>
                        <Link href="#" className='w-full text-center'>Rescourses</Link>
                        <Link href="/" className='w-full text-center'>Back</Link>
                        <div className="w-full pt-6 border-t border-gray-400 text-center">Log in</div>
                        <Link href="#" className="w-full py-3 text-center rounded-full bg-cyan">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
            {/* Hero Section */}
            <section id="hero">
                {/* Hero Container */}
                <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
                    {/* Content */}
                    <div className="flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2">
                        <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                            More than just shorter links
                        </h1>
                        <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                            Build your brand's recognition and get detailed insights on how your links are performing.
                        </p>
                        <div className="mx-auto lg:mx-0">
                            <Link href="#" className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0">
                        <img src="/Shortly/illustration-working.svg" alt="illustration" />
                    </div>
                </div>
            </section>
            <section id="shorten" className='relative bg-gray-100'>
                <div className="max-w-4xl mx-auto p-6 space-y-6">
                    {/* Form */}
                    <form onSubmit={handleErrors} id="link-form" className="relative flex flex-col w-full p-10 -mt-20 space-y-4 
                    bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
                        <input id='link-input' type="text" placeholder='Shorten Link Here' className="flex-1 p-3 border-2 
                        rounded-lg placeholder-yellow-500 focus:outline-none" />
                        <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline none md:py-2">
                            Shorten It!
                        </button>
                        {/* Error messages */}
                        <div id='error-msg' className="absolute left-7 bottom-3 text-red text-sm italic">
                            
                        </div>
                    </form>
                    {/* Link 1 */}
                    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
                        <p className="font-bold text-center text-veryDarkViolet md:text-left">
                            https://arteofejzo.al
                        </p>
                        <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                            <div className="font-bold text-cyan">
                                https://short.al/af1828fe
                            </div>
                            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                                Copy
                            </button>
                        </div>
                    </div>
                    {/* Link 2 */}
                    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
                        <p className="font-bold text-center text-veryDarkViolet md:text-left">
                            https://arteofejzo.al/punet
                        </p>
                        <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                            <div className="font-bold text-cyan">
                                https://short.al/af1998fe
                            </div>
                            <button className="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
                                Copy
                            </button>
                        </div>
                    </div>
                    {/* Link 3 */}
                    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
                        <p className="font-bold text-center text-veryDarkViolet md:text-left">
                            https://arteofejzo.al/punet/puna1
                        </p>
                        <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                            <div className="font-bold text-cyan">
                                https://short.al/aq0098fe
                            </div>
                            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Stats Section */}
            <section id="stats" className="py-24 bg-gray-100">
                <div className="container mx-auto px-3">
                    <h2 className="text-4xl mb-6 font-bold text-center">
                        Advanced Statistics
                    </h2>
                    <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </p>
                </div>
            </section>
            {/* Feature Box Section */}
            <section id="feature" className="pb-32 bg-gray-100">
                <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
                    {/* Horizontal Line */}
                    <div className="hidden absolute top-24 left-16 h-3 bg-cyan md:block w-10/12"></div>
                    {/* Vertical Line */}
                    <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
                    {/* Box 1 */}
                    <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
                        {/* Image Positioning */}
                        <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                            {/* Image Container for Background & Center */}
                            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                                <img src="/Shortly/icon-brand-recognition.svg" alt="brand" />
                            </div>
                        </div>
                        <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                            Brand Recognition
                        </h5>
                        <p className="text-center text-gray-400 md:text-left">
                            Boost your brand recognition with each click. Generic links don't mean a thing. 
                            Branded links help instil confidence in your content.
                        </p>
                    </div>
                    {/* Box 2 */}
                    <div className="relative flex flex-col p-6 space-y-6 mt-24 bg-white rounded-lg md:w-1/3 md:mt-8">
                        {/* Image Positioning */}
                        <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                            {/* Image Container for Background & Center */}
                            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                                <img src="/Shortly/icon-detailed-records.svg" alt="records" />
                            </div>
                        </div>
                        <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                            Detailed Records
                        </h5>
                        <p className="text-center text-gray-400 md:text-left">
                            Gain insights into who is clicking your links. 
                            Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </div>
                    {/* Box 3 */}
                    <div className="relative flex flex-col p-6 space-y-6 mt-24 bg-white rounded-lg md:w-1/3 md:mt-16">
                        {/* Image Positioning */}
                        <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                            {/* Image Container for Background & Center */}
                            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                                <img src="/Shortly/icon-fully-customizable.svg" alt="records" />
                            </div>
                        </div>
                        <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                            Fully Customizable
                        </h5>
                        <p className="text-center text-gray-400 md:text-left">
                            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                        </p>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section id="cta" className="py-24 bg-darkViolet bg-[url('/Shortly/bg-boost-desktop.svg')] bg-no-repeat bg-cover">
                <div className="flex flex-col p-2 space-y-6">
                    <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
                        Boost your links today
                    </h5>
                    <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight 
                    md:text-base md:py-3 focus:outline-none">
                        Get Started
                    </button>
                </div>
            </section>
            {/* Footer Section */}
            <footer className="py-16 bg-veryDarkViolet">
                <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start px-10">
                    {/* Logo */}
                    <img src="/Shortly/logo.svg" alt="logo" />
                    {/* Menu container */}
                    <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
                        {/* Menu 1 */}
                        <div className="flex flex-col items-center w-full md:items-start">
                            <div className="mb-5 font-bold text-white capitalize">Features</div>
                            <div className="flex flex-col items-center space-y-3 md:items-start">
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Link Shortening</Link>
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Branded Links</Link>
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Analytics</Link>
                            </div>
                        </div>
                        {/* Menu 2 */}
                        <div className="flex flex-col items-center w-full md:items-start">
                            <div className="mb-5 font-bold text-white capitalize">Rescourses</div>
                            <div className="flex flex-col items-center space-y-3 md:items-start">
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Blog</Link>
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Developers</Link>
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Support</Link>
                            </div>
                        </div>
                        {/* Menu 3 */}
                        <div className="flex flex-col items-center w-full md:items-start">
                            <div className="mb-5 font-bold text-white capitalize">Company</div>
                            <div className="flex flex-col items-center space-y-3 md:items-start">
                                <Link href="#" className="text-grayishViolet hover:text-cyan">About</Link>
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Our Team</Link>
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Careers</Link>
                                <Link href="#" className="text-grayishViolet hover:text-cyan">Contact</Link>
                            </div>
                        </div>
                    </div>
                    {/* Social Media */}
                    <div className="flex space-x-6">
                        <img src="/Shortly/icon-facebook.svg" alt="facebook" className='shortly-icon' />
                        <img src="/Shortly/icon-twitter.svg" alt="twitter" className='shortly-icon' />
                        <img src="/Shortly/icon-pinterest.svg" alt="pinterest" className='shortly-icon' />
                        <img src="/Shortly/icon-instagram.svg" alt="instagram" className='shortly-icon' />
                    </div>
                </div>
            </footer>
        </div>
    )
}