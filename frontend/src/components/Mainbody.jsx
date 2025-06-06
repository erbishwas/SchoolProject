import React from 'react'

const Main = () => {
  return (
    <section className="mt-[200px] md:mt-[10px] h-100 flex justify-center items-center" id="home">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-900" id="hero-title">Pashu<span className='text-green-700'>Grow</span>, a saviour for farmers</h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-700"> A digital marketplace empowering farmers to list, connect, sell and get recents updates about agriculture and agricultural products.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-3">
          <a href="" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
            See Products
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href="" className="inline-flex justify-center items-center py-3 px-5 text-base font-semibold text-center text-black rounded-lg bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 ">
            Recents
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>

  )
}

export default Main