import {data} from "../restAPI.json";



const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg " data-theme="retro">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>RESERVATION</a></li>
            <li><a>HOME</a></li>
            <li><a>ABOUT US</a></li>
              <li>
                <a>Menu</a>
                <ul className="p-2">
                  {data[0].dishes.map(dish => (
                  <li key={dish.id}><a>{dish.title}</a></li>
                  ))}
                </ul>
              </li>
              <li><a>SERVICES</a></li>
            <li><a>TEAM</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-5xl drop-shadow-2xl">Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl">
            <li><a>HOME</a></li>
            <li><a>ABOUT US</a></li>
            <li><a>SERVICES</a></li>
            <li><a>TEAM</a></li>
            <li><a>RESERVATION</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl">
            
            <li>
              <details>
                <summary>Our Menu</summary>
                <ul className="p-2 text-lg" >
                {data[0].dishes.map(dish => (
                  <li key={dish.id}><a>{dish.title}</a></li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
}

export default Navbar;
