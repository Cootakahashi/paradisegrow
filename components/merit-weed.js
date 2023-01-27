import Link from 'next/link'
export function Merit(){
    return(
        <>
        <div className="grid merit">
            <div className="m-5 p-5 overflow-hidden">
                <h2 className="translate-y-80 title-anime text-center text-3xl font-serif	py-10">Empowering you with Cannabis</h2>
                <h3 className="text-center text-xl font-sans italic">You going to be find new you</h3>
            </div>
            <div className="p-20 grid gap-4  md:grid-cols-4 grid-cols-2 -translate-y-20 md:translate-y-0">
                <ul className="border text-center h-20 grid content-center border-gray-500">
                    
                    <Link href="#product"><li className="">ENERGY</li></Link>

                </ul>
                <ul className="border text-center h-20 grid content-center border-gray-500">
                    <Link href="#product"><li>ANSIETY</li></Link>
                </ul>
                <ul className="border items-center text-center h-20 grid content-center border-gray-500">
                    <Link href="#product"><li>SLEEP</li></Link>
                </ul>
                <ul className="border items-center text-center h-20 grid content-center border-gray-500">
                    
                    <Link href="#product"><li>AROUSAL</li></Link>
                </ul>

                <ul className="border items-center text-center h-20 grid content-center border-gray-500">
                    <Link href="#product"> <li>DEPRESSION</li></Link>
                </ul>
                <ul className="border items-center text-center h-20 grid content-center border-gray-500">
                    
                    <Link href="#product"><li>DIGESTION</li></Link>

                </ul>
                <ul className="border items-center text-center h-20 grid content-center border-gray-500">
                    
                    <Link href="#product"><li>BRAIN</li></Link>

                </ul>
                <ul className="border items-center text-center h-20 grid content-center border-gray-500">
                    
                    <Link href="#product"><li>MOOD</li></Link>

                </ul>

            </div>
            <div className="text-center mb-20 ">
                <span className="border- px-4">Mental health</span>
                <span className="border- px-4">Physical health</span>
            </div>

          
        </div>

        </>
    )
}