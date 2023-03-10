import Image from 'next/image'

export default function Feature(){
    return(
<section id="science"className="text-gray-600 body-font ">
  <div className="container px-5 p24 mx-auto">
    <div className="text-center mb-20 overflow-hidden">
      <div className='overflow-hidden mt-20'>
        <h1 className="sm:text-3xl translate-y-40 title-anime md:text-4xl font-medium title-font text-gray-900 mb-4 font-serif whitespace-nowrap">Science of Cannabis</h1>
      </div>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 whitespace-nowrap">There are many benefits with medical care</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 op-anime">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center md:translate-y-64 mb-20">
        <div className="w-64 h-64 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image
            className="object-cover w-full h-full rounded  sm:h-full ml-20 mt-2"
            src="/canva/sleep.png"
            alt="content"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Quality sleep</h2>
          <p className="leading-relaxed text-base text-left px-2 mt-4">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>


      <div className="p-4 md:w-1/3 flex flex-col text-center items-center md:translate-y-32 op-anime">
        <div className="w-64 h-64 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image
            className="object-cover w-full h-full rounded  sm:h-full ml-20 mt-2"
            src="/canva/relax.png"
            alt="content"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Anxiety reduction, relaxation </h2>
          <p className="leading-relaxed text-base text-left px-2 mt-4">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>


      <div className="p-4 md:w-1/3 flex flex-col text-center items-center op-anime">
        <div className="w-64 h-64 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image
            className="object-cover w-full h-full rounded  sm:h-full ml-20 mt-2"
            src="/canva/creative.png"
            alt="content"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Creativity and Concentration</h2>
          <p className="leading-relaxed text-base text-left px-2 mt-4">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}