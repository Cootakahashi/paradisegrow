export function Top({arg}){
    return(
        <>
      <video
        type="video/mp4"
        className="videoanim h-max	w-full md:block hidden anim relativ"
        src={`/video/top${arg}.mp4`}
        muted
        autoPlay
        playsInline
      >
      </video>
      <div>
      <video
        type="video/mp4"
        className="videoanim w-full sm:block md:hidden"
        src={`/video/topRes1.mp4`}
        muted
        autoPlay
        playsInline
      >
      </video>
      </div>
      </>
    )
}