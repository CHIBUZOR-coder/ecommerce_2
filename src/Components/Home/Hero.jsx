const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url("/images/hero1.jpg")` }}
      className="h-[75vh]  bg-center bg-cover relative"
    >
      <div className="cover absolute top-0 left-0 w-full h-full bg-white/40 flex justify-center items-center flex-col gap-4 px-2 lg:px-0">
        <p className="text-[35px] font-bold text-center w-full lg:w-[38%] leading-10">
          Take Your Adventure To The Next Level
        </p>

        <p className="lg:w-[40%] w-full text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eligendi
         
          Excepturi, ipsam.
        </p>
      </div>
    </div>
  );
};

export default Hero;
