import './App.css'

function App() {

  return (
    <>
      <nav className="absolute w-full top-0 z-50 bg-transparent backdrop-blur-md shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center max-w-7xl">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 23l-3-3H5q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.587 1.413T19 20h-4zm0-7q2.15 0 3.575-1.5T17 11V6h-5Q9.975 6 8.488 7.425T7 11q0 .75.213 1.425t.587 1.25l-.4.4q-.3.3-.3.7t.3.7t.688.288t.712-.288l.375-.35q.6.425 1.313.65T12 16m1.25-6.375q.3.3.3.713t-.3.712l-1.875 1.875q-.3.3-.712.3t-.713-.3q-.275-.3-.275-.712t.275-.688l1.9-1.9q.3-.3.7-.3t.7.3"/></svg>
            <span className="font-bold text-base sm:text-lg text-white">Apex Bank</span>
          </div>
          {/* Center: Nav Items */}
          <ul className="hidden md:flex justify-center gap-4 lg:gap-8 font-medium w-max text-white text-xs sm:text-sm">
            <li><a href="#invest" className="hover:text-blue-400 transition">Invest</a></li>
            <li><a href="#how" className="hover:text-blue-400 transition">How it works</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a></li>
            <li><a href="#faqs" className="hover:text-blue-400 transition">FAQs</a></li>
            <li><a href="#blogs" className="hover:text-blue-400 transition">Blogs</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></li>
          </ul>
          {/* Mobile Nav Toggle (optional) */}
          <div className="md:hidden flex justify-center">
            {/* You can add a hamburger menu here for mobile navigation */}
          </div>
          {/* Right: Auth Buttons */}
          <div className="flex justify-end gap-2 sm:gap-4">
            <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-white text-white text-xs sm:text-sm hover:bg-blue-50 transition">Login</button>
            <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white text-black text-xs sm:text-sm hover:bg-blue-800 hover:text-white transition">Get Started</button>
          </div>
        </div>
      </nav>

      <main className='space-y-10 sm:space-y-16 md:space-y-20'>
        <section className='relative h-[60vh] min-h-[400px] w-full flex items-center justify-center'>
          <img src="./heroimg.jpg" alt="people analyzing financial documents" className='absolute left-0 h-full object-cover top-0 w-full' />
          <div className='w-full h-full absolute bg-black/40 top-0 left-0' />
          <div className='relative space-y-6 text-white'>
            <div className='flex gap-3 mx-auto items-center border w-max rounded-full pr-4'>
              <div className='size-8 bg-orange-400 rounded-full flex justify-center items-center'><svg className='size-5  text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
              </div><h2 className='text-sm'>ABOUT US</h2>
            </div>
            <div className='text-center px-8 space-y-2 mx-auto max-w-5xl'>
              <h1 className='text-4xl md:text-6xl font-semibold'>About Apex Investment Bank</h1>
              <p className='max-w-2xl text-xs md:text-base text-center mx-auto'>Empowering individuals and businesses to achieve financial growth through innovative investment banking solutions and expert financial advisory.</p>
            </div>
          </div>
        </section>

        <section className='px-4 sm:px-8 md:px-[5rem] space-y-8 md:space-y-10'>
          <div>
            <div className='flex gap-3 mb-2 items-center border border-black/20 w-max rounded-full pr-4'>
              <div className='size-8 bg-green-400 rounded-full flex justify-center items-center'><svg className='size-5 text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
              </div><h2 className='text-xs'>ABOUT US</h2>
            </div>

            <div className='flex flex-col md:flex-row justify-between gap-6'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl w-full md:w-1/2 font-medium'>Transforming Investment Banking<br className='hidden md:block' /> For Everyone</h2>
              <p className='text-xs sm:text-sm md:text-base w-full md:w-1/3 text-black/60'>At <b>APEX INVESTMENT BANK</b>, we believe that investment banking should be accessible, transparent, and profitable. Our mission is to democratize access to financial markets, combining decades of expertise with advanced technology to deliver exceptional investment experiences.</p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
            <div className='space-y-2 border border-black/20 p-5 rounded-2xl'>
              <div className='size-10 bg-orange-400 rounded-full flex justify-center items-center'><svg className='size-8  text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg></div>
              <h3 className='font-semibold text-lg'>Driving growth through strategic financial solutions.</h3>
              <p className='text-sm text-black/60'>We help clients achieve their financial goals with tailored investment strategies and expert advice.</p>
              <ul className='text-sm list-disc pl-4'>
                <li>Over $10 Billion in transactions facilitated</li>
                <li>Established in 2000</li>
              </ul>
            </div>
            <div className='space-y-2 border border-black/20 p-5 rounded-2xl'>
              <div className='size-10 bg-orange-400 rounded-full flex justify-center items-center'><svg className='size-8  text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg></div>
              <h3 className='font-semibold text-lg'>Innovative investment products for all clients.</h3>
              <p className='text-sm text-black/60'>From IPOs to mergers and acquisitions, we offer a full suite of investment banking services.</p>
              <ul className='text-sm list-disc pl-4'>
                <li>Global reach with local expertise</li>
                <li>Trusted by thousands of clients</li>
              </ul>
            </div>
            <div className='space-y-2 border border-black/20 p-5 rounded-2xl'>
              <div className='size-10 bg-orange-400 rounded-full flex justify-center items-center'><svg className='size-8  text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg></div>
              <h3 className='font-semibold text-lg'>Commitment to integrity and excellence.</h3>
              <p className='text-sm text-black/60'>Our team is dedicated to upholding the highest standards in every transaction and client relationship.</p>
              <ul className='text-sm list-disc pl-4'>
                <li>Consistent industry recognition</li>
                <li>Client-focused approach</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='px-4 sm:px-8 md:px-[5rem] space-y-8 md:space-y-10'>
          <div>
            <div className='flex gap-3 mb-2 items-center mx-auto border border-black/20 w-max rounded-full pr-4'>
              <div className='size-8 bg-green-400 rounded-full flex justify-center items-center'><svg className='size-5 text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
              </div><h2 className='text-xs'>OUR ACHIEVEMENTS</h2>
            </div>

            <div className='space-y-1 text-center max-w-2xl mx-auto'>
              <h2 className='text-4xl font-medium'>Our Milestones Of Success</h2>
              <p className='text-sm text-black/60'>These milestones reflect our dedication to creating long-term value, building trust, and consistently exceeding the expectations of our clients.</p>
            </div>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
            <div className='bg-gray-100 rounded-lg p-5 space-y-4'>
              <p className='text-xs text-black/60'>Each deal is backed by thorough analysis, strategic planning, and robust financial support.</p>
              <p className='text-3xl font-semibold'>1000+</p>
            </div>
            <div className='bg-gray-100 rounded-lg p-5 space-y-4'>
              <p className='text-xs text-black/60'>We have successfully managed numerous IPOs and mergers worldwide.</p>
              <p className='text-3xl font-semibold'>500+</p>
            </div>
            <div className='bg-gray-100 rounded-lg p-5 space-y-4'>
              <p className='text-xs text-black/60'>Our advisory services have helped clients maximize value and minimize risk.</p>
              <p className='text-3xl font-semibold'>300+</p>
            </div>
            <div className='bg-gray-100 rounded-lg p-5 space-y-4'>
              <p className='text-xs text-black/60'>Trusted by leading corporations and individual investors alike.</p>
              <p className='text-3xl font-semibold'>200+</p>
            </div>
          </div>
        </section>

        <section className='px-4 sm:px-8 md:px-[5rem] space-y-8 md:space-y-10'>
          <div>
            <div className='flex gap-3 mb-2 items-center border border-black/20 w-max rounded-full pr-4'>
              <div className='size-8 bg-orange-400 rounded-full flex justify-center items-center'><svg className='size-5 text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.008 2.987C19.34 2.225 21 3.187 21 4.723v12.554c0 1.535-1.659 2.498-2.992 1.736L14 16.723V5.277zM12 6H7a5 5 0 0 0-1 9.9v3.6a2.5 2.5 0 0 0 5 0V16h1z" clip-rule="evenodd"/></svg>
              </div><h2 className='text-xs'>NEWS</h2>
            </div>

            <div className='space-y-1 flex flex-col md:flex-row md:justify-between gap-4 md:items-center w-full'>
              <h2 className='text-4xl font-medium'>Track Financial Market Trends.</h2>
              <button className='text-sm p-3 text-white px-4 bg-blue-950 rounded-full'>Show more</button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
            <div className='space-y-3'>
              <div className='relative w-full overflow-clip h-[15rem] rounded-xl bg-gray-100'><img src="./newsimg1.jpg" alt="people analyzing financial documents" className='absolute left-0 h-full object-cover top-0 w-full' /></div>
              <div className='text-xs rounded-full border border-black/20 text-black/70 font-light p-2 w-max'>Jan 04, 2025 - 12mins reading</div>
              <h4 className='text-xl'>Investment Banking Outlook: What To Expect In 2025</h4>
              <p className='text-black/70 text-sm'>Explore the latest trends and insights shaping the future of investment banking and global finance.</p>
              <button className='underline text-sm'>Read more</button>
            </div>
            <div className='space-y-3'>
              <div className='relative w-full overflow-clip h-[15rem] rounded-xl bg-gray-100'><img src="./newsimg2.jpg" alt="people analyzing financial documents" className='absolute left-0 h-full object-cover top-0 w-full' /></div>
              <div className='text-xs rounded-full border border-black/20 text-black/70 font-light p-2 w-max'>Jan 04, 2025 - 12mins reading</div>
              <h4 className='text-xl'>Global M&A Activity: Key Drivers and Opportunities</h4>
              <p className='text-black/70 text-sm'>Discover the forces driving mergers and acquisitions in today's dynamic financial markets.</p>
              <button className='underline text-sm'>Read more</button>
            </div>
            <div className='space-y-3'>
              <div className='relative w-full overflow-clip h-[15rem] rounded-xl bg-gray-100'><img src="./newsimg3.jpg" alt="people analyzing financial documents" className='absolute left-0 h-full object-cover top-0 w-full' /></div>
              <div className='text-xs rounded-full border border-black/20 text-black/70 font-light p-2 w-max'>Jan 04, 2025 - 12mins reading</div>
              <h4 className='text-xl'>Capital Markets: Innovations and Challenges</h4>
              <p className='text-black/70 text-sm'>Stay informed about the latest innovations and challenges in capital markets and investment banking.</p>
              <button className='underline text-sm'>Read more</button>
            </div>
          </div>
        </section>

        <section className='relative h-[40vh] sm:h-[50vh] w-full text-white flex justify-center items-center'>
          <img src="./hero2img.jpg" alt="people analyzing financial documents" className='absolute left-0 h-full object-cover top-0 w-full' />
          <div className='w-full h-full absolute bg-black/60 top-0 left-0' />
          <div className='mx-auto relative text-center max-w-xl sm:max-w-2xl md:max-w-3xl px-8 md:px-0 space-y-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Ready to start your investment journey?</h2>
            <p className='text-center text-xs sm:text-base max-w-xl mx-auto'>Partner with us to access world-class investment banking services, diversify your portfolio, and achieve your financial goals.</p>
            <div className='space-x-4 sm:space-x-8'><button className='text-xs sm:text-sm p-2 sm:p-3 text-black px-4 bg-white rounded-full'>Get started now</button><button className='text-xs sm:text-sm p-2 sm:p-3 text-white px-4 bg-transparent border border-white rounded-full'>Learn More</button></div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-blue-950 text-white">
        <div className="md:max-w-7xl mx-auto px-4 sm:px-8 py-12 flex flex-col md:flex-row justify-between gap-8">
          {/* Column 1: About/Brand */}
          <div className='md:w-1/3'>
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 23l-3-3H5q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.587 1.413T19 20h-4zm0-7q2.15 0 3.575-1.5T17 11V6h-5Q9.975 6 8.488 7.425T7 11q0 .75.213 1.425t.587 1.25l-.4.4q-.3.3-.3.7t.3.7t.688.288t.712-.288l.375-.35q.6.425 1.313.65T12 16m1.25-6.375q.3.3.3.713t-.3.712l-1.875 1.875q-.3.3-.712.3t-.713-.3q-.275-.3-.275-.712t.275-.688l1.9-1.9q.3-.3.7-.3t.7.3"/></svg>
              <span className="font-bold text-lg">Apex Bank</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">Apex Bank empowers individuals and businesses to achieve financial growth through innovative investment banking solutions and expert financial advisory. Your trusted partner in navigating global markets.</p>
            <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Apex Bank. All rights reserved.</p>
          </div>

          <div className='flex justify-between md:w-1/3'>
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#invest" className="hover:text-white transition">Invest</a></li>
                <li><a href="#how" className="hover:text-white transition">How it works</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#faqs" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#blogs" className="hover:text-white transition">Blogs</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            {/* Column 3: Contact & Socials */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
              <p className="text-sm text-gray-300 mb-2">123 Finance Avenue, Suite 100<br/>New York, NY 10001</p>
              <p className="text-sm text-gray-300 mb-2">Email: <a href="mailto:info@apexbank.com" className="underline hover:text-white">info@apexbank.com</a></p>
              <p className="text-sm text-gray-300 mb-4">Phone: (123) 456-7890</p>
              <div className="flex gap-4 mt-2">
                <a href="#" aria-label="Twitter" className="hover:text-blue-400"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37a8.59 8.59 0 0 1-2.72 1.04a4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.71a4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19a4.3 4.3 0 0 1-1.93.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2c0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/></svg></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76c0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07c-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54c3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg></a>
                <a href="#" aria-label="Facebook" className="hover:text-blue-400"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
