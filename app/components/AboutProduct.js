const { defaultHead } = require("next/head");

const AboutProduct = () => {
  return (
    <div className="min-h-screen  py-36 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 bg-black flex items-center justify-between md:flex-row flex-col gap-4">
      <div className="">
        <h1 className="text-white text-5xl font-bold">About Our Product</h1>
        <p className="mt-4">Get to know it today !! </p>
      </div>
      <div className="">
        <div className="card w-96 bg-slate-500 shadow-xl rounded-lg">
          <div className="card-body p-4">
            <h2 className=" text-2xl">Shoes</h2>
            <p className="text-sm mt-2">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
          <figure className="">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-b-lg"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default AboutProduct;
