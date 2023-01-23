import Image from 'next/image'
export default function Aboutus(){
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="title-color font-serif flex items-center -translate-y-20 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <div className='overflow-hidden'>
              <Image
                src="/logo/fortitle/2.png"
                alt="logo"
                width={150}
                height={150}
                className="mx-2" 
                /></div>
                <div className='title-anim whitespace-pre-line leading-10 m-4	w-full'>{'Welcome to \n The best weed shop '}
              </div>
              <br className="hidden md:block" />
              {' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Cannabis can be found in various forms, and the health benefits of cannabis is ever growing, here Tara Leo of CaliExtractions gives us an insight regarding the diverse benefits of the plant.</p>
            <p className="text-base text-gray-700 md:text-lg">
            Alcoholism and drug addiction:
Another comprehensive review of evidence, published last year in the journal Clinical Psychology Review, revealed that using cannabis may help people with alcohol or opioid dependencies to fight their addictions.</p>
          </div>


          <div className="grid gap-5 row-gap-8 sm:grid-cols-2 mt-20">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                Depression, post-traumatic stress disorder, and social anxiety
                </h6>
                <p className="text-sm text-gray-900">
                The review published in Clinical Psychology Review assessed all published scientific literature 
                </p>
              </div>
            </div>
            <div className="bg-black border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="text-white h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                Improves lung capacity
                </h6>
                <p className="text-sm text-white">
                Unlike smoking cigarettes, when smoking cannabis in the form of cannabis your lungs aren’t harmed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='rounded-xl'>
        <video
        type="video/mp4"
        className="rounded-xl ml-10 videoanim h-max	w-full sm:hidde md:block md:hidde anim hidde relativ rouded-2xl"
        src={`/video/about.mp4`}
        muted
        autoPlay
        playsInline
  
      ></video>
          {/* <Image
            className="object-cover w-full h-full rounded shadow-lg sm:h-full ml-20 mt-2"
            src="/canva/about.png"
            alt="content"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </div>
  );
};