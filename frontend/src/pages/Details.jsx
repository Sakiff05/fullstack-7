import axios from "axios";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addFavorite, removeFavorite } from "../redux/slices/FavoriteSlice";
import { Helmet } from "react-helmet-async";

function Details() {
  const { id } = useParams("id");

  const [card, setCard] = useState({});

  async function getData() {
    try {
      let res = await axios.get(`http://localhost:5000/products/${id}`);
      setCard(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  let findedCard = favorite.find((item) => item._id == card._id);

  function handleFavorite(e) {
    e.stopPropagation();
    if (findedCard) {
      dispatch(removeFavorite(card));
    } else {
      dispatch(addFavorite(card));
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-16 py-60">
      <Helmet>
        <title>{`Details | ${card.title}`}</title>
      </Helmet>
      <div className="card flex flex-col gap-5 border rounded p-5 items-center ">
        <div className="imgWrapper w-20">
          <img src={card.img} alt="" className="w-full" />
        </div>
        <div className="content flex flex-col items-center gap-2 text-center ">
          <p className="text-2xl font-bold">{card.title}</p>
          <p className="text-gray">
            {card.desc} Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Fuga, fugit tenetur! Officiis explicabo corrupti doloremque
            optio provident rem! Debitis, aspernatur. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Officia, autem?
          </p>
          <div className="buttons flex justify-center w-full items-center ">
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
    </div>
  );
}

export default Details;
