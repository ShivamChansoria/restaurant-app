import { useNavigate } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import { Toaster } from "react-hot-toast";

const Success = () => {

    const navigate = useNavigate();
    const handleClick= (e) => {
        e.preventDefault();
        navigate("/");
    };

  return (
    <>
      <div><Toaster/></div>
      <Navbar />
      <div className="hero min-h-96 bg-base-200">
        <div className="hero-content flex-col lg:flex-row my-30">
        <svg xmlns="http://www.w3.org/2000/svg" width={520} viewBox="0 0 48 48">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z"></path>
            <path d="m17 24l5 5l10-10"></path></g></svg>
          <div>
            <h1 className="text-7xl font-bold">
              Your RESERVATION is Successfully Made !!
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              obcaecati quo placeat doloribus libero numquam illum. Laborum
              optio esse repellat eius rerum, quas, suscipit voluptatibus ut
              beatae unde fugit dolore officiis aspernatur mollitia, quod
              provident quaerat vero eaque. Dolores, vitae. Amet quibusdam autem
              tempore exercitationem? Soluta itaque rem, id molestias maxime
              tempore. Est labore dolores, corrupti minus quis tempore
              dignissimos fugit aut reiciendis optio molestias officia ipsam ut
              exercitationem incidunt!
            </p>
            <button className="btn btn-primary" onClick={handleClick}>Go back Home</button>
          </div>
        </div>
      </div>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center text tracking-widest">
            THANK YOU 3000;
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center tracking-widest">
            THANK YOU 3000;
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </>
  );
};

export default Success;
