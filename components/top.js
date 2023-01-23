export function Top({arg}){
    return(
        <>
        <video
        type="video/mp4"
        className="videoanim h-max	w-full sm:hidde md:block md:hidde anim hidde relativ"
        src={`/video/top${arg}.mp4`}
        muted
        autoPlay
        playsInline
  
      ></video>
      </>
    )
}