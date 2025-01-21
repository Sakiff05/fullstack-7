function About() {
  return (
    <div className="px-16 py-10">
      <h1 className="text-orange-500 font-bold text-5xl text-center">
        About Us
      </h1>
      <p className="text-center text-gray-400 mt-5 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        laboriosam rem aliquam vitae commodi consequatur?
      </p>
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
        <div className="imgWrapper w-full sm:w-6/12">
          <img
            src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="content flex flex-col gap-5  w-full sm:w-6/12">
          <h2 className="text-3xl">We Solve Your Financial Problem</h2>
          <p className="text-xl">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="text-xl">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
