import React from "react";
import movies from "../movies";
import { useNavigate, useParams } from "react-router-dom";

const TrailerDescription = () => {
  const params = useParams();
  const navigate=useNavigate();
  const thewantedmovie = movies.find(
    (Element) => Element.id === Number(params.id)
  );
  console.log(thewantedmovie);

  return (
    <>
      <h1>{thewantedmovie.title}</h1>
      <p><strong>The description is :</strong>{thewantedmovie.description}</p>
      <iframe
        width="853"
        height="480"
        src={thewantedmovie.trailer}
        title="EL KATIBA - ZAPPING (Official Music Video)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <br/>
      <button onClick={()=>navigate('/')}>Go Home</button>
    </>
  );
};
export default TrailerDescription;
