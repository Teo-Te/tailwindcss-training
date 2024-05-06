'use client'
import Link from 'next/link';
import { useEffect } from 'react';

export default function Bookmark() {
    
    useEffect(() => {
        const tabs = document.querySelectorAll('.tabBookmark');
        const panels = document.querySelectorAll('.panelBookmark');

        // Add Event Listener to Tabs
        tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

        function onTabClick(e) {
            // Deactivate all tabs
            tabs.forEach((tab) => {
                tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0');
            })

            // Hide all panels
            panels.forEach((panel) => panel.classList.add('hidden'));

            // Activate clicked tab and panel based on the data-target attribute
            e.target.classList.add('border-softRed', 'border-b-4');
            const classString = e.target.getAttribute('data-target');
            document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden');
        };
    });
    
    const navToggle = () => {
        const menuBtn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        const logo = document.getElementById('logo');
        menuBtn.classList.toggle('open-bookmark');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');

        if (menu.classList.contains('flex')) {
            logo.setAttribute('src', '/Bookmark/logo-bookmark-footer.svg');
        } else {
            logo.setAttribute('src', '/Bookmark/logo-bookmark.svg');
        }
    }

    return (
      <div className="font-rubik overflow-x-hidden">
        <nav className="container relative mx-auto p-6">
            {/* Container for Nav Items */}
            <div className="flex items-center justify-between space-x-20 my-6">
                {/* Logo */}
                <div className="z-30">
                    <img src="/Bookmark/logo-bookmark.svg" alt="Logo" id="logo" />
                </div>
                {/* Menu Items */}
                <div className="hidden items-center space-x-10 uppercase text-grayishBlue1 md:flex">
                    <Link href="#features" className="tracking-widest hover:text-softRed">
                        Features
                    </Link>
                    <Link href="#download" className="tracking-widest hover:text-softRed">
                        Download
                    </Link>
                    <Link href="#faq" className="tracking-widest hover:text-softRed">
                        FAQ
                    </Link>
                    <Link href="#" className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md 
                    hover:text-softRed hover:bg-white">
                        Login
                    </Link>
                </div>
                {/* Hamburger Button */}
                <button id="menu-btn" onClick={navToggle} className="z-30 block md:hidden focus:outline-none hamburger-bookmark">
                    <span className="hamburger-bookmark-top"></span>
                    <span className="hamburger-bookmark-middle"></span>
                    <span className="hamburger-bookmark-bottom"></span>
                </button>
            </div>
            {/* Mobile Menu */}
            <div id="menu" className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full min-h-screen 
            px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue1">
                <div className="w-full py-3 text-center">
                    <Link href="#features" onClick={navToggle} className='block hover:text-softRed'>Features</Link>
                </div>
                <div className="w-full py-3 text-center">
                    <Link href="#download" onClick={navToggle} className='block hover:text-softRed'>Download</Link>
                </div>
                <div className="w-full py-3 text-center">
                    <Link href="#faq" onClick={navToggle} className='block hover:text-softRed'>FAQ</Link>
                </div>
                <div className="w-full py-3 text-center">
                    <Link href="#" className='block hover:text-softRed'>Login</Link>
                </div>
            </div>
        </nav>

        {/* Hero Section */}
        <section id="hero">
            {/* Container for Image and Text */}
            <div className="container flex flex-col-reverse p-6 mx-auto lg:flex-row lg:mb-0">
                {/* Content */}
                <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
                    <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
                        A Simple Bookmark Manager
                    </h1>
                    <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
                        A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    {/* Buttons Container */}
                    <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
                        <Link href="#" className='p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md 
                        border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue duration-200'>
                            Get it on Chrome
                        </Link>
                        <Link href="#" className='p-4 text-sm font-semibold text-white bg-orange-400 rounded shadow-md 
                        border-2 border-orange-400 md:text-base hover:bg-white hover:text-orange-400 duration-200'>
                            Get it on Firefox
                        </Link>
                    </div>
                </div>
                {/* Image */}
                <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
                    <div className="bgHeroBookmark"></div>
                    <img src="/Bookmark/illustration-hero.svg" alt="" className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible" />
                </div>
            </div>
        </section>
        {/* Features Heading */}
        <section id="features">
            <div className="container mx-auto mt-16 px-6 md:mx-0">
                <h2 className="mb-6 text-4xl font-semibold text-center">
                    Features
                </h2>
                <p className="max-w-md mx-auto text-center text-grayishBlue1">
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
        </section>
        {/* Features Tabs */}
        <section id="tabs">
            {/* Tabs Container */}
            <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
                <div className="bgTabsBookmark"></div>
                {/* Tabs/Panels */}
                <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
                    {/* Tab 1 */}
                    <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 
                    hover:text-softRed tabBookmark md:w-1/3" data-target="panel-1">
                        <div className="py-5 border-b-4 border-softRed" data-target="panel-1">
                            Simple Bookmarking
                        </div>
                    </div>
                    {/* Tab 2 */}
                    <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 
                    hover:text-softRed tabBookmark md:w-1/3" data-target="panel-2">
                        <div className="py-5 " data-target="panel-2">
                            Speedy Searching
                        </div>
                    </div>
                    {/* Tab 3 */}
                    <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 
                    hover:text-softRed tabBookmark md:w-1/3" data-target="panel-3">
                        <div className="py-5" data-target="panel-3">
                            Easy Sharing
                        </div>
                    </div>
                </div>

                {/* Tab Panels */}
                <section id="panels" className="container mx-auto">
                    {/* Panel 1 */}
                    <div className="flex flex-col py-5 md:flex-row md:space-x-7 panelBookmark panel-1">
                        {/* Panel Image */}
                        <div className="flex justify-center md:w-1/2">
                            <img src="/Bookmark/illustration-features-tab-1.svg" alt="Tab 1" className="relative z-10" />
                        </div>
                        {/* Panel Content */}
                        <div className="flex flex-col space-y-8 md:w-1/2">
                            <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                Bookmark in one click
                            </h3>
                            <p className="max-w-md text-center text-grayishBlue1 md:text-left">
                                Organize your bookmarks however you like. Our simple drag-and-drop interface 
                                gives you complete control over how you manage your favourite sites.
                            </p>
                            <div className='mx-auto md:mx-0'>
                                <Link href="#" className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg
                                md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 
                                duration-200'>
                                    More Info
                                </Link>
                            </div> 
                        </div>
                    </div>
                    {/* Panel 2 */}
                    <div className="flex flex-col py-5 md:flex-row md:space-x-7 panelBookmark panel-2 hidden">
                        {/* Panel Image */}
                        <div className="flex justify-center md:w-1/2">
                            <img src="/Bookmark/illustration-features-tab-2.svg" alt="Tab 2" className="relative z-10" />
                        </div>
                        {/* Panel Content */}
                        <div className="flex flex-col space-y-8 md:w-1/2">
                            <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                Intelligent search
                            </h3>
                            <p className="max-w-md text-center text-grayishBlue1 md:text-left">
                                Our powerful search feature will help you find saved sites in no time at all. 
                                No need to trawl through all of your bookmarks.
                            </p>
                            <div className='mx-auto md:mx-0'>
                                <Link href="#" className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg
                                md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 
                                duration-200'>
                                    More Info
                                </Link>
                            </div> 
                        </div>
                    </div>
                    {/* Panel 3 */}
                    <div className="flex flex-col py-5 md:flex-row md:space-x-7 panelBookmark panel-3 hidden">
                        {/* Panel Image */}
                        <div className="flex justify-center md:w-1/2">
                            <img src="/Bookmark/illustration-features-tab-3.svg" alt="Tab 3" className="relative z-10" />
                        </div>
                        {/* Panel Content */}
                        <div className="flex flex-col space-y-8 md:w-1/2">
                            <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                Share your bookmarks
                            </h3>
                            <p className="max-w-md text-center text-grayishBlue1 md:text-left">
                                Easily share your bookmarks and collections with others. Create a shareable 
                                link that you can send at the click of a button.
                            </p>
                            <div className='mx-auto md:mx-0'>
                                <Link href="#" className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg
                                md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 
                                duration-200'>
                                    More Info
                                </Link>
                            </div> 
                        </div>
                    </div>
                </section>
            </div>
        </section>
        {/* Download Section */}
        <section id="download">
            <div className="container mx-auto px-6">
                <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
                    Download the extension
                </h2>
                <p className="max-w-lg mx-auto text-center text-grayishBlue1">
                    We've got more browsers in the pipeline. 
                    Please do let us know if you've got a favourite you'd like us to prioritize.
                </p>
            </div>
        </section>
        {/* Download Boxes */}
        <section id="download-boxes" className="py-32">
            <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 
            md:space-x-7 md:flex-row">
                {/* Box 1 */}
                <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
                    <div className='flex justify-center'>
                        <img src="/Bookmark/logo-chrome.svg" alt="Chrome" />
                    </div>
                    {/* Text */}
                    <h5 className="pt-6 text-xl font-bold">
                        Add to Chrome
                    </h5>
                    <p className="text-gray-400">
                        Minimum version 62
                    </p>
                    {/* Dots */}
                    <div className="bg-[url('/Bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
                        <Link href="#" className='block w-full py-3 text-white bg-softBlue rounded-lg
                        border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue duration-200'>
                            Add & Install Extension
                        </Link>
                    </div>
                </div>
                {/* Box 2 */}
                <div className="w-full md:w-1/3">
                    <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
                        <div className='flex justify-center'>
                            <img src="/Bookmark/logo-firefox.svg" alt="Firefox" />
                        </div>
                        {/* Text */}
                        <h5 className="pt-6 text-xl font-bold">
                            Add to Firefox
                        </h5>
                        <p className="text-gray-400">
                            Minimum version 55
                        </p>
                        {/* Dots */}
                        <div className="bg-[url('/Bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
                            <Link href="#" className='block w-full py-3 text-white bg-orange-400 rounded-lg
                            border-2 border-orange-400 md:text-base hover:bg-white hover:text-orange-400 duration-200'>
                                Add & Install Extension
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Box 3 */}
                <div className="w-full md:w-1/3">
                    <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
                        <div className='flex justify-center'>
                            <img src="/Bookmark/logo-opera.svg" alt="Opera" />
                        </div>
                        {/* Text */}
                        <h5 className="pt-6 text-xl font-bold">
                            Add to Opera
                        </h5>
                        <p className="text-gray-400">
                            Minimum version 46
                        </p>
                        {/* Dots */}
                        <div className="bg-[url('/Bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
                            <Link href="#" className='block w-full py-3 text-white bg-softRed rounded-lg
                            border-2 border-softRed md:text-base hover:bg-white hover:text-softRed duration-200'>
                                Add & Install Extension
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* FAQ Section */}
        <section id="faq">
            <div className="container mx-auto">
                <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
                    Frequently Asked Questions
                </h2>
                <p className="max-w-lg px-6 mx-auto text-center text-grayishBlue1">
                    Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
                </p>
            </div>
        </section>
        {/* FAQ Accordion */}
        <section id="faq-accordion">
            <div className="container mx-auto px-6 mb-32">
                {/* Accordion */}
                <div className="max-w-2xl m-8 mx-auto overflow-hidden">
                    {/* Tab 1 */}
                    <div className="py-1 border-b outline-none group" tabIndex="1">
                        {/* Container */}
                        <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 
                        cursor-pointer group ease">
                            {/* Title */}
                            <div className="transition duration-500 ease group-hover:text-softRed">
                                What is Bookmark?
                            </div>
                            {/* Icon Arrow */}
                            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-softRed">
                                <svg xmlns='http://www.w3.org/2000/svg' width="18" height="12">
                                    <path fill='none' stroke='currentColor' strokeWidth='3' d='M1 1l8 8 8-8'/>
                                </svg>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p className="py-2 text-justify text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce tincidunt justo eget ultricies fringilla. Phasellus 
                                blandit ipsum quis quam ornare mattis.
                            </p>
                        </div>
                    </div>
                    {/* Tab 2 */}
                    <div className="py-1 border-b outline-none group" tabIndex="2">
                        {/* Container */}
                        <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 
                        cursor-pointer group ease">
                            {/* Title */}
                            <div className="transition duration-500 ease group-hover:text-softRed">
                                How can I request a new browser?
                            </div>
                            {/* Icon Arrow */}
                            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-softRed">
                                <svg xmlns='http://www.w3.org/2000/svg' width="18" height="12">
                                    <path fill='none' stroke='currentColor' strokeWidth='3' d='M1 1l8 8 8-8'/>
                                </svg>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p className="py-2 text-justify text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce tincidunt justo eget ultricies fringilla. Phasellus 
                                blandit ipsum quis quam ornare mattis.
                            </p>
                        </div>
                    </div>
                    {/* Tab 3 */}
                    <div className="py-1 border-b outline-none group" tabIndex="3">
                        {/* Container */}
                        <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 
                        cursor-pointer group ease">
                            {/* Title */}
                            <div className="transition duration-500 ease group-hover:text-softRed">
                                Is there a mobile app?
                            </div>
                            {/* Icon Arrow */}
                            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-softRed">
                                <svg xmlns='http://www.w3.org/2000/svg' width="18" height="12">
                                    <path fill='none' stroke='currentColor' strokeWidth='3' d='M1 1l8 8 8-8'/>
                                </svg>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p className="py-2 text-justify text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce tincidunt justo eget ultricies fringilla. Phasellus 
                                blandit ipsum quis quam ornare mattis.
                            </p>
                        </div>
                    </div>
                    {/* Tab 4 */}
                    <div className="py-1 border-b outline-none group" tabIndex="4">
                        {/* Container */}
                        <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 
                        cursor-pointer group ease">
                            {/* Title */}
                            <div className="transition duration-500 ease group-hover:text-softRed">
                                What about other Chromium browsers?
                            </div>
                            {/* Icon Arrow */}
                            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-softRed">
                                <svg xmlns='http://www.w3.org/2000/svg' width="18" height="12">
                                    <path fill='none' stroke='currentColor' strokeWidth='3' d='M1 1l8 8 8-8'/>
                                </svg>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p className="py-2 text-justify text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce tincidunt justo eget ultricies fringilla. Phasellus 
                                blandit ipsum quis quam ornare mattis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Newsletter */}
        <section id="newsletter" className='bg-softBlue'>
            <div className="max-w-lg mx-auto py-24">
                <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
                    35,000+ already joined
                </p>
                <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
                    Stay up-to-date with what we're doing
                </h2>
                {/* Form */}
                <form action="" className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 
                md:flex-row md:space-y-0 md:space-x-4 md:px-0">
                    {/* input and button */}
                    <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
                        <input 
                        type="text" 
                        className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0" 
                        placeholder='Enter your email address'
                        />
                        <input 
                        type="submit" 
                        className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg 
                        cursor-pointer focus:outline-none bg-softRed hover:opacity-90" 
                        value='Subscribe'
                        />
                    </div>
                </form>
            </div>
        </section>
        {/* Footer */}
        <footer className="py-16 bg-veryDarkBlue1">
            <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
                {/* Logo/Menu */}
                <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row 
                md:space-y-0 md:space-x-14 text-grayishBlue1">
                    <img src="/Bookmark/logo-bookmark-footer.svg" alt="Logo" className="mb-1" />
                    <Link href="#features" className="uppercase hover:text-softRed">
                        Features
                    </Link>
                    <Link href="#download" className="uppercase hover:text-softRed">
                        Download
                    </Link>
                    <Link href="#faq" className="uppercase hover:text-softRed">
                        FAQ
                    </Link>
                </div>

                {/* Social */}
                <div className="flex space-x-10">
                    <Link href="#">
                        <img src="/Bookmark/icon-facebook.svg" alt="Facebook" className='h-6 bookmark-icon' />
                    </Link>
                    <Link href="#">
                        <img src="/Bookmark/icon-twitter.svg" alt="Twitter" className='h-6 bookmark-icon' />
                    </Link>
                </div>
            </div>
        </footer>
      </div>
    );
}