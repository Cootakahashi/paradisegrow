import Link from 'next/link'
export function Merit(){
    return(
        <>
        <div className="grid merit">
            <div className="m-5 p-5 overflow-hidden col-span-full text-center">
                <h2 className="translate-y- title-anime text-center text-3xl font-serif	py-10">Empowering you with Cannabis</h2>
                <h3 className="sm:text-center md:text-none text-xl font-sans italic">You going to be find new you</h3>
            </div>
            <div className="p-20 grid gap-4  md:grid-cols-4 grid-cols-2 -translate-y-20 md:translate-y-0">
                <Link href="#product">
                    <ul className="border text-center h-20 grid content-center border-gray-500 hover:bg-lime-700 duration-300	">     
                        <li className="">ENERGY</li>
                    </ul>
                </Link>
                <Link href="#product">
                <ul className="border text-center h-20 grid content-center border-gray-500 hover:bg-lime-700 duration-300">
                    <li>ANSIETY</li>
                </ul></Link>
                <Link href="#product">
                <ul className="border items-center text-center h-20 grid content-center border-gray-500 hover:bg-lime-700 duration-300">
                    <li>SLEEP</li>
                </ul>
                </Link>
                <Link href="#product">
                <ul className="border items-center text-center h-20 grid content-center border-gray-500 hover:bg-lime-700 duration-300">
                    <li>AROUSAL</li>
                </ul>
                </Link>
                <Link href="#product"> 
                <ul className="border items-center text-center h-20 grid content-center border-gray-500 hover:bg-lime-700 duration-300">
                    <li>DEPRESSION</li>
                </ul>
                </Link>
                <Link href="#product">
                <ul className="border items-center text-center h-20 grid content-center border-gray-500 hover:bg-lime-700 duration-300">
                    <li>DIGESTION</li>
                </ul>
                </Link>
                <Link href="#product">
                <ul className="border items-center text-center h-20 grid content-center border-gray-500 hover:bg-lime-700 duration-300">
                    <li>BRAIN</li>
                </ul>
                </Link>
                <Link href="#product">
                <ul className="border items-center text-center h-20 grid content-center border-gray-500 hover:bg-lime-700 duration-300">
                    
                    <li>MOOD</li>

                </ul>
                </Link>

            </div>
            <div className="text-center mb-20 ">
                <span className="border- px-4">Mental health</span>
                <span className="border- px-4">Physical health</span>
            </div>

          
        </div>

        </>
    )
}