

const Hero = () => {
  return (
    <div className="hero  hero-contentmin-h- bg-base-200 flex flex-col ">
      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box mt-9 mb-11">
        <div className="carousel-item">
          <img src="./images/thali.png" height={100} width={700} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src="./images/chinese-1.jpg"height={100} width={700}  className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src="./images/chinese-2.jpg"height={100} width={700}  className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src="./images/snacks-1.jpg"height={100} width={700}  className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src="./images/dinner-4.jpeg" height={100} width={700} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src="./images/dinner-13jpg.jpeg"height={100} width={700}  className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src="./images/dinner-1.jpg"height={100} width={700}  className="rounded-box" />
        </div>
      </div>
      <h1 className="hero-content text-9xl min-[520px]:text-8xl font-bold tracking-wide mb-8 ">
        Deliciuos Food Awaits !
      </h1>
          </div>
    
  );
};

export default Hero;
