const Hero = () => {
  return (
    <div className="hero  bg-white text-gray-950 py-36 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72">
      <div className="hero-content flex flex-col md:flex-row gap-12 items-center">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-green-100 px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
