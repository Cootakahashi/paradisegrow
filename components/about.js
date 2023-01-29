import Image from 'next/image'
export default function Aboutus(){
  return (
    <div id="aboutus" className="md:mb-40 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className='col-start1 md:col-span-2 text-white font-serif overflow-hidden'>
          <h2 className='title-anime'>
            Welcome to PARADISE GROWS
          </h2>
        </div>


        <div className="flex flex-col justify-center mt-10">
          <div className="max-w-xl mb-6">
            <div className='-translate-y- md:translate-x- md:translate-0'>
              <p className="text-base text-gray-700 md:text-lg whitespace-pre-line -translate-x- opacity- op-anime">
              {`Paradise Grows is about bringing the highest quality of medicinal cannabis, grow products and a
              range of healthful products to the shores of Phuket and to the rest of the world \n
              Our master grower, Matt, has been perfecting techniques that allow the plants to express their
              richest flowers. We believe that the health of the plant is priority and that it is necessary to provide
              the right elements through the development of the grow\n
              Matt attributes his success to his passion for the process and his love of the plants. He has a
              pragmatic approach to the bulk of the work which allows him to truly explore his creative side with
              the plants, especially with his unique training techniques and fluid flowering protocols \n
              In a world moving towards efficiency and profitability we bring you a product which is patiently
              produced \n
              Looking forward to our future, we aim to become a standard in the medicinal cannabis and health
              industry worldwide`}
              </p>
            </div>
          </div>


          <div className="grid gap-5 row-gap-8 hidden md:grid grid-cols-2 mt-20 op-anime">
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
        className="rounded-xl mr-20 videoanime w-full sm:hidde md:block md:hidde anim hidde relativ rouded-2xl"
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