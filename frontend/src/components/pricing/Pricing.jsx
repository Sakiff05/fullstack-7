function Pricing() {
  return (
    <div className="px-16 py-10 bg-slate-100">
      <h1 className="text-orange-500 font-bold text-5xl text-center py-10">
        Pricing
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-10 mt-10">
        <div className="card flex flex-col items-center justify-center gap-5 shadow bg-white p-4">
          <h2 className="text-3xl">Basic</h2>
          <p className="text-4xl text-orange-500">
            $47/<span className="text-gray-400 text-sm">year</span>
          </p>
          <ul className="flex flex-col gap-5">
            <li>Officia quaerat eaque neque</li>
            <li>Possimus aut consequuntur incidunt</li>
            <li className="line-through text-gray-400">
              Lorem ipsum dolor sit amet
            </li>
            <li className="line-through text-gray-400">
              Consectetur adipisicing elit
            </li>
            <li className="line-through text-gray-400">
              Dolorum esse odio quas architecto sint
            </li>
          </ul>
          <button className="bg-orange-500 text-white p-3 rounded-full text-xl ">
            Buy Now
          </button>
        </div>
        <div className="card flex flex-col items-center justify-center gap-5 shadow bg-white p-4">
          <h2 className="text-3xl">Premium</h2>
          <p className="text-4xl text-orange-500">
            $200/<span className="text-gray-400 text-sm">year</span>
          </p>
          <ul className="flex flex-col gap-5">
            <li>Officia quaerat eaque neque</li>
            <li>Possimus aut consequuntur incidunt</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipisicing elit</li>
            <li className="line-through text-gray-400">
              Dolorum esse odio quas architecto sint
            </li>
          </ul>
          <button className="bg-orange-500 text-white p-3 rounded-full text-xl ">
            Buy Now
          </button>
        </div>
        <div className="card flex flex-col items-center justify-center gap-5 shadow bg-white p-4">
          <h2 className="text-3xl">Professional</h2>
          <p className="text-4xl text-orange-500">
            $750/<span className="text-gray-400 text-sm">year</span>
          </p>
          <ul className="flex flex-col gap-5">
            <li>Officia quaerat eaque neque</li>
            <li>Possimus aut consequuntur incidunt</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipisicing elit</li>
            <li>Dolorum esse odio quas architecto sint</li>
          </ul>
          <button className="bg-orange-500 text-white p-3 rounded-full text-xl ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
