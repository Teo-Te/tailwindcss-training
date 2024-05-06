import Link from 'next/link';
import ThemeSwitch from '@/components/ThemeSwitch';
import { Providers } from '@/app/providers';

export default function Fylo (){
    return (
        <Providers>
            <div className="font-opensans pt-10 min-h-screen dark:bg-darkBlue dark:text-white">
                {/* Header */}
                <header className="container mx-auto px-6 text-center h-40 md:h-20">
                {/* Logo */}
                    <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
                {/* Nav */}
                <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
                    <Link href="#features" className="hover:text-accentCyan duration-200">
                        Features
                    </Link>
                    <Link href="#testimonials" className="hover:text-accentCyan duration-200">
                        Testimonials
                    </Link>
                    <Link href="/" className="hover:text-accentCyan duration-200">
                        Back
                    </Link>
                    {/* Dark/Light toggle */}
                    <ThemeSwitch />
                </div>
                </header>
                {/* Hero */}
                <section id="hero" className='bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom'>
                    <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
                        <img src="/Fylo/illustration-intro.png" alt="illustration" className="mx-auto" />
                        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
                            All your files in one secure location, accessible anywhere.
                        </h1>
                        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
                            Fylo stores all your most important files in one secure location. Access them wherever you need, 
                            share and collaborate with friends family, and co-workers.
                        </p>
                        <button className="p-3 rounded-full font-semibold w-52 bg-accentCyan hover:scale-95 duration-200">
                            Get Started
                        </button>
                    </div>
                </section>
                {/* Features */}
                <section className="pt-12 bg-gray-50 dark:bg-darkBlue1" id="features">
                    <div className="container mx-auto px-6 pb-32">
                        {/* First row */}
                        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
                            {/* Item 1 */}
                            <div className="flex flex-col items-center space-y-2 md:w-1/2">
                                <div className="flex items-center justify-center h-24 mb-6">
                                    <img src="/Fylo/icon-access-anywhere.svg" alt="Access Anywhere" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Access your files, anywhere
                                </h3>
                                <p className="max-w-md">
                                    The ability to use a smartphone, tablet, or computer to access your account means your files 
                                    follow you everywhere.
                                </p>
                            </div>
                            {/* Item 2 */}
                            <div className="flex flex-col items-center space-y-2 md:w-1/2">
                                <div className="flex items-center justify-center h-24 mb-6">
                                    <img src="/Fylo/icon-security.svg" alt="Access Anywhere" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Security you can trust
                                </h3>
                                <p className="max-w-md">
                                    2-factor authentication and user-controlled encryption are just a couple of the security 
                                    features we allow to help secure your files.
                                </p>
                            </div>
                        </div>
                        {/* Second row */}
                        <div className="flex flex-col mt-28 space-y-24 text-center md:flex-row md:space-y-0">
                            {/* Item 3 */}
                            <div className="flex flex-col items-center space-y-2 md:w-1/2">
                                <div className="flex items-center justify-center h-24 mb-6">
                                    <img src="/Fylo/icon-collaboration.svg" alt="Access Anywhere" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Real-time collaboration
                                </h3>
                                <p className="max-w-md">
                                    Securely share files and folders with friends, family, and colleagues for live collaboration. 
                                    No email attachments required.
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-col items-center space-y-2 md:w-1/2">
                                <div className="flex items-center justify-center h-24 mb-6">
                                    <img src="/Fylo/icon-any-file.svg" alt="Access Anywhere" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Store any type of file
                                </h3>
                                <p className="max-w-md">
                                    Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                                    file types to be securely stored and shared.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Productive Section */}
                <section id="productive" className='bg-white dark:bg-darkBlue'>
                    <div className="container flex flex-col mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
                        {/* Image */}
                        <div className="md:w-1/2">
                            <img src="/Fylo/illustration-stay-productive.png" alt="Productive" className="mb-10" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-col items-start md:w-1/2">
                            <div className="flex flex-col space-y-5">
                                <h4 className="max-w-md text-xl font-bold md:text-4xl">
                                    Stay productive, wherever you are
                                </h4>
                                <p className="text-md md:text-lg">
                                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                                    storage needs.
                                </p>
                                <p className="text-md md:text-lg">
                                    Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                                    attachments required.
                                </p>
                            </div>
                            {/* Link */}
                            <div className="block mt-4">
                                <Link href="#" className='flex border-b border-accentCyan text-accentCyan'>
                                    See how Fylo works<img src="/Fylo/icon-arrow.svg" alt="Link" className="flex pl-1 mt-1 pb-2" /> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonials */}
                <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
                    <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
                        {/* Box Container */}
                        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
                            {/* Quotes */}
                            <img src="/Fylo/bg-quotes.png" alt="Quotes" className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20" />
                            {/* Testimonial 1 */}
                            <div className="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 dark:bg-darkBlue3">
                                <p className="text-sm leading-5 md:text-lg">
                                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                                    become a well-oiled collaboration machine.
                                </p>
                                {/* Customer Info */}
                                <div className="flex space-x-4">
                                    <img src="/Fylo/profile-1.jpg" alt="Profile 1" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h5 className="text-sm font-semibold">
                                            Satish Patel
                                        </h5>
                                        <p className="text-xs font-extralight">
                                            Founder & CEO, Huddle
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Testimonial 2 */}
                            <div className="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 dark:bg-darkBlue3">
                                <p className="text-sm leading-5 md:text-lg">
                                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                                    become a well-oiled collaboration machine.
                                </p>
                                {/* Customer Info */}
                                <div className="flex space-x-4">
                                    <img src="/Fylo/profile-2.jpg" alt="Profile 1" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h5 className="text-sm font-semibold">
                                            Bruce McKenzie
                                        </h5>
                                        <p className="text-xs font-extralight">
                                            Founder & CEO, Puddle
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Testimonial 3 */}
                            <div className="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 dark:bg-darkBlue3">
                                <p className="text-sm leading-5 md:text-lg">
                                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                                    become a well-oiled collaboration machine.
                                </p>
                                {/* Customer Info */}
                                <div className="flex space-x-4">
                                    <img src="/Fylo/profile-3.jpg" alt="Profile 1" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h5 className="text-sm font-semibold">
                                            Iva Boyd
                                        </h5>
                                        <p className="text-xs font-extralight">
                                            Founder & CEO, Cuddle
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Early Access */}
                <section id="early-access" className="relative px-6 dark:bg-darkBlue2 md:px-0">
                    {/* Box */}
                    <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 
                    dark:bg-darkBlue1 md:px-16">
                        <h5 className="text-2xl font-bold">
                            Get early access today
                        </h5>
                        <p className="text-sm">
                            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, 
                            our support team would be happy to help you.
                        </p>
                        {/* Input and Button */}
                        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                            <div className="w-full md:flex-1">
                                <input type="text" placeholder='email@example.com' className="w-full bg-white px-10 py-3 rounded-full focus:outline-none" />
                            </div>
                            <button className="w-full p-3 px-6 font-semibold rounded-full bg-accentCyan md:w-56 hover:scale-95 duration-200">
                                Get Started For Free
                            </button>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-darkBlue2 text-white">
                    <div className="container mx-auto pt-12 px-5 pb-10">
                        {/* Flex For All */}
                        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
                            {/* Email Phone */}
                            <div className="mt-10 space-y-6">
                                <div className="flex items-center space-x-3 md:-mt-10">
                                    <div className="w-6">
                                        <img src="/Fylo/icon-phone.svg" alt="Phone" className='scale-10' />
                                    </div>
                                    <p className="text-xs font-extralight">
                                        +1-543-123-4567
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6">
                                        <img src="/Fylo/icon-email.svg" alt="Email" className='scale-10' />
                                    </div>
                                    <p className="text-xs font-extralight">
                                        example@fylo.com
                                    </p>
                                </div>
                            </div>
                            {/* Menu */}
                            <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
                                <div className="flex flex-col space-y-3">
                                    {/* Items */}
                                    <Link href="#">About</Link>
                                    <Link href="#">Jobs</Link>
                                    <Link href="#">Press</Link>
                                    <Link href="/">Back</Link>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    {/* Items */}
                                    <Link href="#">Contact Us</Link>
                                    <Link href="#">Terms</Link>
                                    <Link href="#">Privacy</Link>
                                </div>
                            </div>
                            {/* Social */}
                            <div className="flex justify-center pb-10 space-x-3">
                                <div>
                                    <Link href="#">
                                        <img src="/Fylo/facebook.svg" alt="Facebook" className="p-2 bg-darkBlue rounded-full shortly-icon duration-200" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <img src="/Fylo/twitter.svg" alt="Twitter" className="p-2 bg-darkBlue rounded-full shortly-icon duration-200" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <img src="/Fylo/instagram.svg" alt="Instagram" className="p-2 bg-darkBlue rounded-full shortly-icon duration-200" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Providers>
      
    );
}