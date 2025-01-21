import { useSelector } from "react-redux";
import Card from "../components/card/Card";
import { Helmet } from "react-helmet-async";

function Favorites() {
  const favorite = useSelector((state) => state.favorite.favorite);

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      {favorite.length > 0 ? (
        <div className="px-16 py-60 grid grid-cols-1 sm:grid-cols-3 gap-5 ">
          {favorite.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      ) : (
        <p className="text-5xl py-80 text-center">Your favorites is empty!</p>
      )}
    </>
  );
}

export default Favorites;
