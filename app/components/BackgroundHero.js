const BackgroundHero = () => {
  return (
    <div
      className="hero min-h-screen flex flex-col bg-black items-center justify-center py-36 text-white"
      style={{
        backgroundImage: "url()",
      }}
    >
      <div className="hero-content text-center w-5/12  text-neutral-content  ">
        <div className=" w-full bg-white/80 text-black p-8">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-teal-300 px-4 py-2 rounded-md  inline-block">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default BackgroundHero;
