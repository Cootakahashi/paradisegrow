import Image from 'next/image'
import { Sidebar } from '../components/sidebar'
export default function Event(){

    return (
        <>
                <div className="md:grid md:grid-cols-7">

        <section className="text-gray-600 body-font col-span-5">

                    <div className='text-center mt-'>
                        <Image
                        className='m-auto'
                        src="/picture/event1.png"
                        height={580}
                        width={1000}
                        />
                    </div>
                    <h1 className="text-center text-bold text-4xl pt-20 font-serif">Event Infomation</h1>
                    <p className='p-20 px-40'>Networking Opportunities: Attending events can provide an opportunity to meet new people and build professional relationships. This can lead to new business opportunities, career growth, and personal connections.

                        Learning and Professional Development: Many events offer educational sessions and workshops that can help you stay up-to-date on industry trends and improve your skills.

                        Exposure to New Ideas and Technologies: Events often feature speakers and exhibitors who showcase the latest products and technologies. Attending events can give you a chance to learn about new advancements and innovative solutions.</p>

        <div className="container px-5 py-24 mx-auto ">
            <div className="flex flex-wrap -m-4 grid md:grid-cols-2">
            <div className="p-4 lg:w-full">
                <div className="border h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">January 31, 2023</h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Meet up in Paradise Grows</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                    </span>
                </div>
                </div>
            </div>
            <div className="p-4 lg:w-full">
                <div className="border h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">February 15, 2023</h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Determination of the strongest Kannabis</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <a className="text-indigo-500 inline-flex items-center">Join us
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                    </span>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
            <div className="hidden md:block md:col-span-2">
                <Sidebar/>
            </div>
        </div>
        </>
    )
}