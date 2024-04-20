import { useNavigate } from "react-router-dom";


const NotFound = () => {

    const navigate = useNavigate();
    const handleClick= (e) => {
        e.preventDefault();
        navigate("/");
    };
    return (
      <div className='bg-base-200 min-h-screen flex flex-col items-center py-40'>
        <h3 className="text-8xl "> OOPS SOMETING WENT WRONG!!!</h3>
        <h5 className="text-3xl">Your Page is Not FOund.</h5>
        <button className="btn btn-primary btn-lg my-10" onClick={handleClick}>Go back to Home</button>
      </div>
    );
}

export default NotFound;
