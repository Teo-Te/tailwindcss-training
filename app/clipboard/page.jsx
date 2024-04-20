import Link from "next/link";

export default function ClipboardPage() {
  return (
    <div className="font-bai bg-[url('/clipboard/bg-header-mobile.png')] md:bg-[url('/clipboard/bg-header-desktop.png')] bg-no-repeat bg-contain">
        {/* Hero */}
        <section id="hero">
            <div className="clipboard-container mb-40 pt-16">
                <img src="/clipboard/logo.svg" alt="logo" className="mx-auto my-16" />
                <h3 className="clipboard-h3">A history of everything you copy</h3>
                <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
                    Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
                </p>
                {/* Button */}
                <div className="clipboard-button">
                    <Link href="#" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                        Download for iOS
                    </Link>
                    <Link href="#" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                        Download for Mac
                    </Link>
                </div>
            </div>
        </section>
        {/* Snippets */}
        <section id="snippets">
            <div className="clipboard-container my-20">
                <h3 className="clipboard-h3">Keep track of your snippets</h3>
                <p className="clipboard-p mb-24">
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets 
                    immediately on all your devices. 
                    Our Android and iOS apps will help you organize everything.
                </p>
            </div>
        </section>
        {/* Features */}
        <section id="features">
            <div className="clipboard-container my-20">
                <div className="relative flex flex-col md:flex-row md:space-x-32">
                    <div className="md:w-1/2">
                        <img src="/clipboard/image-computer.png" alt="computer" className="md:absolute top-0 right-[50%]" />
                    </div>
                    {/* Items */}
                    <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:w-1/2 md:pl-16">
                        {/* Item 1 */}
                        <div>
                            <h5 className="clipboard-h5">Quick Search</h5>
                            <p className="max-w-md text-grayishBlue">
                                Easily search your snippets by content, category, web address, application, and more.
                            </p>
                        </div>
                        {/* Item 2 */}
                        <div>
                            <h5 className="clipboard-h5">iCloud Sync</h5>
                            <p className="max-w-md text-grayishBlue">
                                iCloud sync allows you to access your snippets from all your devices.
                            </p>
                        </div>
                        {/* Item 3 */}
                        <div>
                            <h5 className="clipboard-h5">Completely History</h5>
                            <p className="max-w-md text-grayishBlue">
                                Retreive any snippets from the first moment you started using the app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Access Anywhere Section */}
        <section id="access">
            <div className="clipboard-container my-20">
                <h3 className="clipboard-h3">Access Clipboard anywhere</h3>
                <p className="clipboard-p mb-24">
                    Whether you're on the go, or at your computer, you can access all of your Clipboard snippets in a few simple clicks.
                </p>
                <img className="mx-auto" src="/clipboard/image-devices.png" alt="" />
            </div>
        </section>
        {/* Supercharge Section */}
        <section id="supercharge">
            <div className="clipboard-container my-20">
                <h3 className="clipboard-h3">Supercharge your workflow</h3>
                <p className="clipboard-p mb-16">
                    We've got the tools to boost your productivity.
                </p>
                {/* Items */}
                <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center space-y-5">
                        <img src="/clipboard/icon-blacklist.svg" alt="" className="mb-6" />
                        <h5 className="clipboard-h5">Create Blacklists</h5>
                        <p className="max-w-md text-grayishBlue">
                            Easily search your snippets by content, category, web address, application, and more.
                        </p>
                    </div>
                    {/* Item 2 */}
                    <div className="flex flex-col items-center space-y-5">
                        <img src="/clipboard/icon-text.svg" alt="" className="mb-6" />
                        <h5 className="clipboard-h5">Plain Text Snippets</h5>
                        <p className="max-w-md text-grayishBlue">
                            Remove unwanted formatting from copied text for a consistent look.
                        </p>
                    </div>
                    {/* Item 3 */}
                    <div className="flex flex-col items-center space-y-5">
                        <img src="/clipboard/icon-preview.svg" alt="" className="mb-6" />
                        <h5 className="clipboard-h5">Sneak Preview</h5>
                        <p className="max-w-md text-grayishBlue">
                            Quick preview of all snippets on your Clipboard for easy access.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* References Section */}
        <section id="references">
            <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row 
            md:space-y-0">
                <img src="/clipboard/logo-google.png" alt="google" />
                <img src="/clipboard/logo-ibm.png" alt="ibm" />
                <img src="/clipboard/logo-microsoft.png" alt="microsoft" />
                <img src="/clipboard/logo-hp.png" alt="hp" />
                <img src="/clipboard/logo-vector-graphics.png" alt="vector-graphics" />
            </div>
        </section>
        {/* Bottom Call to Action (CTA) Section */}
        <section id="cta">
            <div className="clipboard-container my-20">
                <h3 className="clipboard-h3">Clipboard for iOS and Mac OS</h3>
                <p className="clipboard-p mb-10">
                    Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.
                </p>
                {/* Buttons */}
                <div className="clipboard-button">
                    <Link href="#" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                        Download for iOS
                    </Link>
                    <Link href="#" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                        Download for Mac
                    </Link>
                </div>
            </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-50">
            <div className="clipboard-section">
                <div className="flex flex-col items-center justify-between md:flex-row md:mx-16">
                    {/* Image */}
                    <img src="/clipboard/logo.svg" alt="" className="scale-50" />
                    {/* Menu and Social */}
                    <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:space-y-0 
                    md:mb-0 text-grayishBlue">
                        {/* Menus */}
                        <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                            {/* Menu 1 */}
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                                <div>
                                    <Link href="#" className="hover:text-strongCyan">FAQs</Link>
                                </div>
                                <div>
                                    <Link href="#" className="hover:text-strongCyan">Contact Us</Link>
                                </div>
                            </div>
                            {/* Menu 2 */}
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                                <div>
                                    <Link href="#" className="hover:text-strongCyan">Privacy Policy</Link>
                                </div>
                                <div>
                                    <Link href="#" className="hover:text-strongCyan">Press Kit</Link>
                                </div>
                            </div>
                            {/* Menu 3 */}
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                                <div>
                                    <Link href="#" className="hover:text-strongCyan">Install Guide</Link>
                                </div>
                                <div>
                                    <Link href="/" className="hover:text-strongCyan">Back</Link>
                                </div>
                            </div>
                        </div>
                        {/* Social */}
                        <div className="flex justify-between w-32 py-1">
                            <Link href="#">
                                <img src="/clipboard/icon-facebook.svg" alt="facebook" className="duration-200 clipboard-icon" />
                            </Link>
                            <Link href="#">
                                <img src="/clipboard/icon-twitter.svg" alt="twitter" className="duration-200 clipboard-icon" />
                            </Link>
                            <Link href="#">
                                <img src="/clipboard/icon-instagram.svg" alt="instagram" className="duration-200 clipboard-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}