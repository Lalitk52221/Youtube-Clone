import { useEffect, useState } from "react";
import "../Styles/HomePage.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "./Menu";
import Feed from "./Feed";

const HomePage = ({ menu }) => {
  const [category, setCategory] = useState(0);

  return (
    <div className="homepage">
      <Menu menu={menu} category={category} setCategory={setCategory} />
      <div className={`container ${menu ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
};
export default HomePage;
