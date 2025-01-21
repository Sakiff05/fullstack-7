function Amortization() {
  return (
    <div className="px-16 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="card flex flex-col items-center justify-center  gap-3">
          <div className="imgWrapper w-20">
            <img
              src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/001-wallet.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content text-center">
            <p className="text-2xl">Money Savings</p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center justify-center gap-3">
          <div className="imgWrapper w-20">
            <img
              src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/004-cart.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content text-center">
            <p className="text-2xl">Online Shoppings</p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center justify-center gap-3">
          <div className="imgWrapper w-20">
            <img
              src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/006-credit-card.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content text-center">
            <p className="text-2xl">Credit / Debit Cards</p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  justify-between mt-10 gap-20">
        <div className="img w-full sm:w-5/12">
          <img
            src="https://preview.colorlib.com/theme/banker/images/about_2.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="7/12 flex flex-col gap-5 ">
          <h1 className="text-3xl">Amortization Computation</h1>
          <p className="text-gray-500 text-xl">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ul className="flex flex-col gap-3 text-lg">
            <li>Officia quaerat eaque neque</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipisicing elit</li>
          </ul>
          <form className="flex flex-col sm:flex-row gap-5 items-start sm:items-center w-full">
            <input
              type="email"
              className="border rounded-full p-2 w-7/12"
              placeholder="Email..."
            />
            <button
              type="submit "
              className="bg-orange-500 text-white p-2 rounded-full"
            >
              Submit Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Amortization;
