const About = () => {
  return (
    <div className="hero hero-contentmin-h-screen bg-base-200 flex flex-col md:flex-row justify-around mt-14 ">
      <div className="text-3xl w-2/3 px-40 min-[520px]:px-10 flex flex-col items-center tracking-wider md:text-left my-14">
        <div className="text-9xl font-thin   md:text-right text-center mb-5">
          About Us
        </div>
        <span className="md:text-left text-center lg:h-auto h-60 overflow-scroll">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil
          suscipit perferendis odio non voluptates itaque architecto, dolores
          facilis nulla aperiam maiores quisquam reprehenderit? Libero
          excepturi, consequatur reprehenderit dolorum dignissimos doloribus ex
          totam ratione quia magni eos nulla similique voluptatum aperiam nobis
          sequi at nam sunt rerum enim expedita necessitatibus? Eos voluptates
          dolorem ipsa? Exercitationem, excepturi nobis at magni molestias omnis
          ipsum ipsam mollitia ducimus! Distinctio ducimus, sapiente officiis
          fugiat cupiditate vitae, reiciendis facere excepturi sunt explicabo ea
          modi nisi!
        </span>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="carousel rounded-box w-2/3 md:ml-20">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Burger"
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="btn btn-wide btn-primary text-lg mb-14">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
