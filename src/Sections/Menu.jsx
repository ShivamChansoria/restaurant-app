import {data} from "../restAPI.json";
import {Tilt} from "react-tilt";

const Menu = () => {


  return (
    <div className="bg-base-200 min-h-fit my-10 mt-14">
        <div className="text-8xl text-thin text-center py-7 px-5 shadow-lg">
            Popular Dishes
        </div>
        <div className="min-h-fit flex flex-wrap justify-around mt-20 mb-20">
             {data[0].dishes.map((dish) =>(
                <Tilt key={dish.id}>
                <div className="card w-96 bg-base-100 shadow-xl my-10  md:mx-10 h-96" >
                <figure><img src={dish.image}  alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {dish.title}
                    <div className="badge badge-secondary">{dish.category} </div>
                  </h2>
                  <p>{dish.description} </p>
                  <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
              </Tilt>
             ))}
        </div>

    </div>
  )
}

export default Menu
