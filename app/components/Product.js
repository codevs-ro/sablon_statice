const Product = () => {
  return (
    <div className=" py-36 px-8 md:px-24 flex items-center bg-black lg:px-36 xl:px-48 2xl:px-72 hero min-h-screen ">
      <div className="hero-content items-center  flex gap-12 flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="border-2 border-white max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Our Product</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
