import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";


const Reservation = () => {

    const navigate= useNavigate();
    const [details, setDetails] = useState({
        name:"",
        email:"",
        date:"", 
        number:0,
        time:""
    })

    const inputHandler = (e) => {
        e.preventDefault();
        setDetails({...details,
            [e.target.name]:e.target.value,
        })
    };

    const submitHandler =async (e) => {
        e.preventDefault();
        console.log(details);
        try{
        const {data}= await axios.post("http://localhost:4000/api/reservation/send",
            {name:details.name, email:details.email, date:details.date, phone:details.number, time:details.time},
                 {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                 });
                 toast.success(data.message);
                 console.log(data.message);
                 setDetails({
                    name:"",
                    email:"",
                    date:"", 
                    number:0,
                    time:""
                 });
                 navigate("/SUCCESS");
                }catch(error){
                      toast.error(error.message);
                      console.log(error.response.data.message);
                }
    };

  return (
    
    <section className="bg-base-200 flex flex-col lg:flex-row items-center justify-evenly h-fit mt-20">
      <div className="w-1/2 py-10 flex flex-col items-center">
        <h5 className="text-4xl text-thin text-center">Make Your</h5>
        <h3 className="text-7xl md:text-9xl text-thick">Reservation</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={320}
          height={320}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zM7 8a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
            opacity={0.5}
          ></path>
          <path
            fill="currentColor"
            d="M19 4h-1v3a1 1 0 0 1-2 0V4H8v3a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v3h20V7a3 3 0 0 0-3-3"
          ></path>
        </svg>
      </div>
      <div className="h-3/3 flex flex-col items-center  bg-base-200 mb-10">
        <p className="text-3xl flex items-center justify-between mb-10">For any queries please call 
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"></path></svg>
        </p>
        <form className="flex flex-col rounded-sm  shadow-lg  justify-around align-end h-80 p-5">
          
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="name" name="name" onChange={inputHandler} className="grow" placeholder="User Name" required />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" name="email" onChange={inputHandler} className="grow" placeholder="Email" required />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="date" name="date" onChange={inputHandler} className="grow" required />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="time" name="time" onChange={inputHandler} className="grow"  required />
          </label>
          <label  maxLength="10" className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 48 48">
            <path fill="currentColor" d="M17.536 4.384C19.597 4.1 21.33 5.361 22.15 7l2.017 4.033c1.119 2.238.476 4.864-1.22 6.516c-1.002.975-2.009 2.089-2.593 3.072a.33.33 0 0 0-.034.23c.54 2.926 2.523 5.817 4.292 7.89a.68.68 0 0 0 .724.187l3.975-1.242a5.25 5.25 0 0 1 5.892 2.036l2.877 4.185c.78 1.135 1.175 2.675.577 4.156c-.534 1.323-1.567 3.231-3.446 4.5c-1.95 1.316-4.621 1.816-8.116.618c-3.905-1.34-7.594-4.7-10.653-8.997c-3.077-4.324-5.61-9.725-7.146-15.357C7.844 13.51 8.72 9.93 10.782 7.625c1.989-2.224 4.839-2.979 6.754-3.242m2.377 3.735c-.457-.913-1.272-1.364-2.037-1.259c-1.701.234-3.831.867-5.23 2.432c-1.326 1.483-2.244 4.095-.94 8.878c1.465 5.368 3.877 10.498 6.772 14.565c2.913 4.093 6.223 6.983 9.427 8.082c2.855.979 4.69.495 5.906-.325c1.286-.869 2.077-2.25 2.527-3.364c.206-.51.117-1.17-.319-1.804l-2.877-4.184a2.75 2.75 0 0 0-3.086-1.067l-3.975 1.242c-1.188.371-2.526.04-3.371-.95c-1.841-2.157-4.187-5.465-4.85-9.06a2.83 2.83 0 0 1 .344-1.961c.758-1.274 1.958-2.573 2.997-3.585c1.015-.988 1.303-2.458.729-3.607z"></path>
          </svg>
            <input type="number" name="number" onChange={inputHandler}  className="grow" required />
          </label>
          <button
            type="submit"
            className="flex items-center justify-center mt-4 h-12 w-60 mb-2 bg-secondary rounded-full"
            onClick={submitHandler}
          >
            Reserve Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              className="ms-2 text-3xl"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.47-13.53a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
