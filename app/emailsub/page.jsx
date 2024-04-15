import Link from 'next/link';

export default function Email() {
  return (
    <div className='bg-zinc-700 h-screen'>
      <div className="flex items-center justify-center py-4 bg-zinc-700">
        <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
          <div className="flex flex-col md:flex-row rounded-l-xl">
            <img
            src='/forEmail.jpg'
            alt='example'
            className='object-fit rounded-xl h-80 md:rounded-l-xl md:h-64
            md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200'
            />
            <div className="p-6 md:p-12">
              <h2 className="font-serif text-xl font-medium text-center text-white 
              md:text-left">
                Subsicribe for more amazing coding content
              </h2>
              <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center 
              text-white md:text-left">
                Come one please subsicribe to  newsletter to get the latest 
                updates on our products and services.
              </p>
              <div className="flex flex-col mt-5 space-y-4 md:space-x-3 
              md:flex-row md:space-y-0">
                <input 
                  type="text"
                  placeholder="Enter your email"
                  className='p-2 px-4 text-center text-white bg-zinc-800 border
                  border-zinc-600 placeholder:text-xs placeholder:text-center
                  md:text-left placeholder:md:text-left focus:outline-none' 
                />

                <button className="px-5 py-3 text-xs rounded-md text-zinc-800 
                bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                  Subscribe to Arteo
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-4 bg-zinc-700 justify-center">
      <Link href="/">
        <button className="px-5 py-3 text-xs rounded-md text-zinc-800 
        bg-slate-50 hover:bg-zinc-800 hover:text-white hover:border hover:border-white duration-500">
          Back
        </button>
      </Link>
      </div>
    </div>
  );
}