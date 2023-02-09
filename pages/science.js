import { Sidebar } from '../components/sidebar'
import Image from 'next/image'

export default function Science(){
    return(
        <>

        <div className="md:grid md:grid-cols-7">

<main className='text-center col-span-5'>
    <div className='bg-gray-100 col-span-4'>
        <div className='flex p-8 text-blue-300'>
        <p>Paradise Grows / </p>
        <p className='ml-auto'>Feb 2023</p>
        </div>
        <h1 className="text-5xl pb-8 ml-10 text-gray-900 text-left font-serif">It's a Science of Cannabis</h1>

    </div>
        <ol className="p-10 text-left">
            <li>Pain Relief: Cannabis has been shown to have pain-relieving properties, making it a potential alternative to traditional pain medications for those with chronic pain.</li>
            <li>Anxiety and Depression Management: Some studies have suggested that using cannabis can help to manage symptoms of anxiety and depression, although more research is needed in this area.</li>
            <li>Increased Appetite: Cannabis is known to increase appetite, which can be beneficial for people with conditions such as cancer or AIDS who struggle with loss of appetite.</li>
            <li>Sleep Aid: Cannabis has been shown to have a sedative effect and can help people with insomnia get a better night's sleep.</li>
            <li>Neurological Conditions: Cannabis has been used to help manage symptoms of neurological conditions such as epilepsy, multiple sclerosis, and Parkinson's disease. Although further research is needed, there is some evidence to suggest that it may be beneficial in these conditions.</li>
        </ol>

    <div className='md:grid md:grid-cols-2 text-left p-10 w-full z-20'>
        <Image
        className='ml-auto col-span-1 col-start-2 shadow-2x shadow-green-300 shadow-[40px_50px_50px_-15px_rgba(0,0,0,0.3)]'
        src="/picture/a.jpg"
        width={500}
        height={300}
        alt="content"
        />
        <h2 className='pt-20 text-3xl md:p-10 font-semibold col-start-1 row-start-1'>Merit of Cannabis</h2>
        <p className='md:p-10 whitespace-pre-line col-start-1 row-start-1 mt-8 md:mt-20'>{`Cannabis is a plant species that has been used for thousands of years for various purposes, including medicinal and recreational use. The primary active ingredient in cannabis is delta-9-tetrahydrocannabinol (THC), which is responsible for the plant's psychoactive effects.

        One of the most notable benefits of cannabis is its use as a natural form of pain relief. Studies have shown that cannabis can be effective in reducing chronic pain, neuropathic pain, and spasticity associated with conditions such as multiple sclerosis. In addition, some studies suggest that cannabis can be helpful in treating conditions such as anxiety, depression, and post-traumatic stress disorder (PTSD).

        Cannabis has a long and rich history, with evidence of its use dating back to ancient civilizations such as the Chinese and the Greeks. In ancient times, cannabis was used for a variety of purposes, including as a medicine and a spiritual aid. In the 19th and early 20th centuries, cannabis was widely used as a medicinal agent, particularly for conditions such as migraines, menstrual cramps, and insomnia.

        However, in the early 20th century, attitudes towards cannabis began to change, and many countries, including the United States, banned its use. Despite this, the use of cannabis for medicinal purposes continued, and in the late 20th and early 21st centuries, there has been a resurgence of interest in the therapeutic potential of cannabis. Today, many countries have legalized the use of cannabis for medicinal purposes, and some have even legalized its recreational use.

        In conclusion, cannabis is a versatile plant with a rich history of use for medicinal and recreational purposes. While its use remains controversial, many people find it to be a safe and effective way to manage a variety of health conditions.`}
        </p>

    </div>

</main>
<div className="hidden md:block md:col-span-2">
        <Sidebar/>
    </div>
</div>
        </>
    )
}