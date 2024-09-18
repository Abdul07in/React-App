import { useState } from "react";
import { BsFillCircleFill, BsFillHeartFill, BsHeart } from "react-icons/bs";

const Like = () => {
  const [Like, setLike] = useState(false);

  return (
    <div style={{ cursor: "pointer" }}>
      {Like ? (
        <BsFillHeartFill color="red" size={20} onClick={() => setLike(!Like)} />
      ) : (
        <BsHeart size={20} onClick={() => setLike(!Like)} />
      )}
    </div>
  );
};

export default Like;
