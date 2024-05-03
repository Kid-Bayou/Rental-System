import { useState } from "react";
import img from "../../assets/hjhj.png";

function Home() {
  const [content, setContent] = useState("Option 1 Content");

  const handleOptionClick = (option) => {
    switch (option) {
      case "Option 1":
        setContent("Option 1 Content");
        break;
      case "Option 2":
        setContent("Option 2 Content");
        break;
      case "Option 3":
        setContent("Option 3 Content");
        break;
      default:
        setContent("Option 1 Content");
    }
  };

  return (
    <>
      <div className="home-container">
        <img src={img} className="home-img" />
      </div>
      <div className="home-box-container">
        <h2>We know what a home is really worth</h2>
        <h3>Find homes to buy or rent and check house prices</h3>
        <div className="home-box">
          <div className="navbar">
            <button onClick={() => handleOptionClick("Option 1")}>
              Option 1
            </button>
            <button onClick={() => handleOptionClick("Option 2")}>
              Option 2
            </button>
            <button onClick={() => handleOptionClick("Option 3")}>
              Option 3
            </button>
          </div>
          <div className="box">{content}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
