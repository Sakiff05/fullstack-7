import { useNavigate } from "react-router";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/slices/FavoriteSlice";

function Card({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  let findedCard = favorite.find((card) => card._id == item._id);

  function handleFavorite(e) {
    e.stopPropagation();
    if (findedCard) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  }

  return (
    <div
      onClick={() => navigate(`details/${item._id}`)}
      className="card flex flex-col gap-5 border rounded p-5 cursor-pointer"
    >
      <div className="imgWrapper w-20">
        <img src={item.img} alt="" className="w-full" />
      </div>
      <div className="content flex flex-col items-start gap-2">
        <p className="text-2xl font-bold">{item.title}</p>
        <p className="text-gray">{item.desc}</p>
        <div className="buttons flex justify-between w-full items-center">
          <button className="text-orange-500 font-bold">Learn More</button>
          {findedCard ? (
            <FaHeart
              onClick={(e) => handleFavorite(e)}
              className="text-4xl text-rose-600 cursor-pointer"
            />
          ) : (
            <CiHeart
              onClick={(e) => handleFavorite(e)}
              className="text-4xl text-rose-600 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
