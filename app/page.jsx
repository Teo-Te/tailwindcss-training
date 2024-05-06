import Link from 'next/link';
import { Providers } from "@/app/providers";
import ThemeSwitch from '@/components/ThemeSwitch2';

export default function Home() {

  return (
    <Providers>
      <ThemeSwitch />
      <div className='font-popins bg-darkBlue3 min-h-screen'>
        {/* Logo */}
        <div className='flex container mx-auto justify-center items-center pt-8'>
            <img src='/tailwindcss-logotype-white.svg' alt='Tailwind logo' className=' max-w-xs'  />
            <h1 className='text-gray-200 sm:text-4xl text-4xl pl-2 font-opensans font-semibold'>Training</h1>
        </div>
        <div className='flex flex-col space-y-6 pt-24'>
          <div className='container mx-auto px-16 md:px-32 flex flex-col items-center'>
            <h2 className='text-gray-200 text-2xl font-raleway font-bold'>What is Tailwind CSS?</h2>
            <p className='text-gray-300 text-lg font-raleway font-normal text-center'>Tailwind CSS is a utility-first 
            CSS framework for rapidly building custom designs. This webapp was build using Next.js and here you can find
            a list of front-end projects that were made during the training</p>
          </div>
        </div>
        {/* Projects Container */}
        <div className='flex flex-col space-y-6 md:mx-14 pt-14'>
          <div className='container mx-auto flex flex-col space-y-12 md:space-x-24 md:space-y-0 md:flex-row items-center'>
            {/* Mini Projects */}
            <div className='flex flex-col w-1/2'>
              <h2 className='text-gray-200 text-2xl text-center font-raleway font-bold'>Mini Projects</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-8'>
                <Link href='/login'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Login</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Simple Login Modal</p>
                  </div>
                </Link>
                <Link href='/priceGrids'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Price Grids</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Pricing Options Modal</p>
                  </div>
                </Link>
                <Link href='/gallery'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Gallery</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Gallery Modal</p>
                  </div>
                </Link>
                <Link href='/emailSub'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Email Sub</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Email Subsicription Modal</p>
                  </div>
                </Link>
              </div>
              <div className='mx-auto md:mx-32 pt-8'>
                <Link href='/productModal'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Product</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Product Modal</p>
                  </div>
                </Link>
              </div>
            </div>
            {/* Projects */}
            <div className='flex flex-col w-1/2'>
              <h2 className='text-gray-200 text-2xl text-center font-raleway font-bold'>Projects</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-8'>
                <Link href='/bookmark'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Bookmark</h3>
                    <p className='text-md font-raleway font-normal pt-2'>Bookmark extension page</p>
                  </div>
                </Link>
                <Link href='/clipboard'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Clipboard</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Clipboard app page</p>
                  </div>
                </Link>
                <Link href='/fylo'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Fylo</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Flie hosting page</p>
                  </div>
                </Link>
                <Link href='/loopStudios'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>LoopStudios</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Virtual projects page</p>
                  </div>
                </Link>
                <Link href='/shortly'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Shortly</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>URL Shortner page</p>
                  </div>
                </Link>
                <Link href='/testimonial-grid'>
                  <div className='bg-cyan1 rounded-lg p-4 hover:bg-red hover:text-gray-200 transition-all duration-200'>
                    <h3 className='text-2xl font-raleway font-bold'>Testimonials</h3>
                    <p className='text-lg font-raleway font-normal pt-2'>Testimonials grid page</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <footer className=' bg-darkBlue2 mt-10 pb-12'>
          <div className='container mx-auto flex flex-col items-center pt-24'>
            <p className='text-gray-200 text-lg font-raleway font-normal'>Made with Tailwind CSS and Next.js</p>
            <p className='text-gray-200 text-lg font-raleway font-normal'>by Arteo Fejzo</p>
         </div>
        </footer>
      </div>
    </Providers>
  );
}
