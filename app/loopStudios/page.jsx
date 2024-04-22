'use client'
import Link from "next/link";

export default function LoopStudios() {

    const navToggle = () => {
        const menuBtn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        menuBtn.classList.toggle('open');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }

  return (
    <div className="font-josefin">
        {/* Hero section */}
        <section id="hero" className="md:bg-[url('/loopStudios/desktop/image-hero.jpg')] bg-no-repeat bg-cover 
        bg-[url('/loopStudios/mobile/image-hero.jpg')] bg-center">
            {/* Hero container */}
            <div className="container max-w-6xl mx-auto px-6 py-12">
                {/* Menu and logo conatiner */}
                <nav className="flex items-center justify-between font-bold text-white">
                    <img src="/loopStudios/logo.svg" alt="logo" />
                    {/* Menu items */}
                    <div className="hidden h-10 font-alata md:flex md:space-x-8">
                        <div className="group">
                            <Link href="#">About</Link>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <div className="group">
                            <Link href="#">Careers</Link>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <div className="group">
                            <Link href="#">Events</Link>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <div className="group">
                            <Link href="#">Products</Link>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <div className="group">
                            <Link href="#">Support</Link>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <div className="group">
                            <Link href="/">Back</Link>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                    </div>
                    {/* TODO: Hamburger menu */}
                    <div className="md:hidden">
                        <button id="menu-btn" onClick={navToggle} type="button" className="z-40 block hamburger md:hidden focus:outline-none">
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </nav>
                {/* TODO: Mobile menu */}
                <div id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 
                pl-12 space-y-3 text-lg text-white uppercase bg-black">
                    <Link href="#" className="hover:text-pink-500">Home</Link>
                    <Link href="#" className="hover:text-pink-500">Careers</Link>
                    <Link href="#" className="hover:text-pink-500">Events</Link>
                    <Link href="#" className="hover:text-pink-500">Products</Link>
                    <Link href="#" className="hover:text-pink-500">Support</Link>
                    <Link href="/" className="hover:text-pink-500">Back</Link>
                </div>

                <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 
                md:m-32 md:mx-0 md:text-6xl">
                    Immersive experiences that deliver
                </div>
            </div>
        </section>
        {/* Feature section */}
        <section id="feature">
            {/* Feature container */}
            <div className="relative container flex flex-col max-w-6xl mx-auto my-32 p-6 text-gray-900 md:flex-row md:px-0">
                {/* Image */}
                <img src="/loopStudios/desktop/image-interactive.jpg" alt="" />
                {/* Text */}
                <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
                    <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                        The leader in interactive VR
                    </h2>
                    <p className="max-w-md text-center md:text-left">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the 
                        best companies around the globe. Our award-winning creations have transformed businesses through digital 
                        experiences that bind to their brand.
                    </p>
                </div>
            </div>
        </section>
        {/* Creation section */}
        <section id="creations">
            {/* Creation container */}
            <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
                {/* Header */}
                <div className="flex justify-center mb-20 md:justify-between">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                        Our creations
                    </h2>
                    <button className="hidden loopStudios-btn md:block">
                        See all
                    </button>
                </div>
                {/* Items Container */}
                <div className="loopStudios-container">
                    {/* Item 1 */}
                    <div className="group loopStudios-item">
                        {/* Desktop Image */}
                        <img src="/loopStudios/desktop/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 
                        md:block group-hover:scale-110" />
                        {/* Mobile Image */}
                        <img src="/loopStudios/mobile/image-deep-earth.jpg" alt="" className="w-full md:hidden" />
                        {/* Item-Gradient */}
                        <div className="loopStudios-gradient"></div>
                        {/* Text */}
                        <h5 className="loopStudios-h5">
                            Deep earth
                        </h5>
                    </div>
                    {/* Item 2 */}
                    <div className="group loopStudios-item">
                        {/* Desktop Image */}
                        <img src="/loopStudios/desktop/image-grid.jpg" alt="" className="hidden w-full duration-200 
                        md:block group-hover:scale-110" />
                        {/* Mobile Image */}
                        <img src="/loopStudios/mobile/image-grid.jpg" alt="" className="w-full md:hidden" />
                        {/* Item-Gradient */}
                        <div className="loopStudios-gradient"></div>
                        {/* Text */}
                        <h5 className="loopStudios-h5">
                            The grid
                        </h5>
                    </div>
                    {/* Item 3 */}
                    <div className="group loopStudios-item">
                        {/* Desktop Image */}
                        <img src="/loopStudios/desktop/image-soccer-team.jpg" alt="" className="hidden w-full duration-200 
                        md:block group-hover:scale-110" />
                        {/* Mobile Image */}
                        <img src="/loopStudios/mobile/image-soccer-team.jpg" alt="" className="w-full md:hidden" />
                        {/* Item-Gradient */}
                        <div className="loopStudios-gradient"></div>
                        {/* Text */}
                        <h5 className="loopStudios-h5">
                            Soccer team VR
                        </h5>
                    </div>
                    {/* Item 4 */}
                    <div className="group loopStudios-item">
                        {/* Desktop Image */}
                        <img src="/loopStudios/desktop/image-night-arcade.jpg" alt="" className="hidden w-full duration-200 
                        md:block group-hover:scale-110" />
                        {/* Mobile Image */}
                        <img src="/loopStudios/mobile/image-night-arcade.jpg" alt="" className="w-full md:hidden" />
                        {/* Item-Gradient */}
                        <div className="loopStudios-gradient"></div>
                        {/* Text */}
                        <h5 className="loopStudios-h5">
                            Night arcade
                        </h5>
                    </div>
                </div>

                {/* Items Container 2 */}
                <div className="loopStudios-container mt-10">
                    {/* Item 1 */}
                    <div className="group loopStudios-item">
                        {/* Desktop Image */}
                        <img src="/loopStudios/desktop/image-from-above.jpg" alt="" className="hidden w-full duration-200 
                        md:block group-hover:scale-110" />
                        {/* Mobile Image */}
                        <img src="/loopStudios/mobile/image-from-above.jpg" alt="" className="w-full md:hidden" />
                        {/* Item-Gradient */}
                        <div className="loopStudios-gradient"></div>
                        {/* Text */}
                        <h5 className="loopStudios-h5">
                            From up above VR
                        </h5>
                    </div>
                    {/* Item 2 */}
                    <div className="group loopStudios-item">
                        {/* Desktop Image */}
                        <img src="/loopStudios/desktop/image-pocket-borealis.jpg" alt="" className="hidden w-full duration-200 
                        md:block group-hover:scale-110" />
                        {/* Mobile Image */}
                        <img src="/loopStudios/mobile/image-pocket-borealis.jpg" alt="" className="w-full md:hidden" />
                        {/* Item-Gradient */}
                        <div className="loopStudios-gradient"></div>
                        {/* Text */}
                        <h5 className="loopStudios-h5">
                            Pocket borealis
                        </h5>
                    </div>
                    {/* Item 3 */}
                    <div className="group loopStudios-item">
                        {/* Desktop Image */}
                        <img src="/loopStudios/desktop/image-curiosity.jpg" alt="" className="hidden w-full duration-200 
                        md:block group-hover:scale-110" />
                        {/* Mobile Image */}
                        <img src="/loopStudios/mobile/image-curiosity.jpg" alt="" className="w-full md:hidden" />
                        {/* Item-Gradient */}
                        <div className="loopStudios-gradient"></div>
                        {/* Text */}
                        <h5 className="loopStudios-h5">
                            The curiosity
                        </h5>
                    </div>
                    {/* Item 4 */}
                    <div className="group loopStudios-item">
                        {/* Desktop Image */}
                        <img src="/loopStudios/desktop/image-fisheye.jpg" alt="" className="hidden w-full duration-200 
                        md:block group-hover:scale-110" />
                        {/* Mobile Image */}
                        <img src="/loopStudios/mobile/image-fisheye.jpg" alt="" className="w-full md:hidden" />
                        {/* Item-Gradient */}
                        <div className="loopStudios-gradient"></div>
                        {/* Text */}
                        <h5 className="loopStudios-h5">
                            Make it fisheye
                        </h5>
                    </div>
                </div>
                {/* Button */}
                <div className="flex justify-center mt-10 md:hidden">
                    <button className="loopStudios-btn w-full md:hidden">
                        See all
                    </button>
                </div>
            </div>
        </section>
        <footer className="bg-black">
            <div className="container max-w-6xl py-10 mx-auto">
                {/* Footer flex container */}
                <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                    {/* Menu and Logo */}
                    <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                        <div className="h-8">
                            <img src="/loopStudios/logo.svg" alt="logo" className="w-44 md:ml-3" />
                        </div>
                        {/* Menu items */}
                        <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                            {/* Menu item 1 */}
                            <div className="h-10 group">
                                <Link href="#">About</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                             {/* Menu item 2 */}
                             <div className="h-10 group">
                                <Link href="#">Careers</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                             {/* Menu item 3 */}
                             <div className="h-10 group">
                                <Link href="#">Events</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                             {/* Menu item 4 */}
                             <div className="h-10 group">
                                <Link href="#">Products</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                             {/* Menu item 5 */}
                             <div className="h-10 group">
                                <Link href="#">Support</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                            <div className="h-10 group">
                                <Link href="/">Back</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                        </div>
                    </div>
                    {/* Social media icons */}
                    <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                        {/* Social media icons container */}
                        <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                            {/* Icon 1 */}
                            <div className="h-8 group">
                                <Link href="#">
                                    <img src="/loopStudios/icon-facebook.svg" alt="facebook" className="h-6 duration-200 group-hover:scale-110"/>
                                </Link>
                            </div>
                            {/* Icon 2 */}
                            <div className="h-8 group">
                                <Link href="#">
                                    <img src="/loopStudios/icon-twitter.svg" alt="twitter" className="h-6 duration-200 group-hover:scale-110"/>
                                </Link>
                            </div>
                            {/* Icon 3 */}
                            <div className="h-8 group">
                                <Link href="#">
                                    <img src="/loopStudios/icon-instagram.svg" alt="instagram" className="h-6 duration-200 group-hover:scale-110"/>
                                </Link>
                            </div>
                            {/* Icon 4 */}
                            <div className="h-8 group">
                                <Link href="#">
                                    <img src="/loopStudios/icon-pinterest.svg" alt="pinterest" className="h-6 duration-200 group-hover:scale-110"/>
                                </Link>
                            </div>
                        </div>
                        {/* Copy right */}
                        <div className="font-bold">
                            &copy; 2024 Loopstudios. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}