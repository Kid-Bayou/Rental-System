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
        <div className="home-hero">
          <img src={img} className="home-img" />
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
        </div>

        <div className="home-bottom-container">
          <div class="container">
            <div class="about">
              <h2 class="section-heading">About Us</h2>
              <p class="section-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                libero non felis congue vestibulum nec et eros. In consectetur
                dui vitae purus consequat, vitae mattis tortor tincidunt. Aenean
                scelerisque odio id quam hendrerit, sit amet blandit ipsum
                tincidunt. Fusce vel ligula in nunc placerat iaculis. Cras vel
                diam ut ex luctus feugiat eget eu lectus. Suspendisse potenti.
              </p>
            </div>
            <div class="features">
              <h2 class="section-heading">Features</h2>
              <ul class="section-list">
                <li>
                  Search and browse through a wide range of rental listings.
                </li>
                <li>View detailed information about each rental property.</li>
                <li>Filter search results based on your preferences.</li>
                <li>Book rentals directly through the platform.</li>
                <li>Communicate with hosts and property managers.</li>
                <li>Access customer support for any assistance.</li>
                <li>Review and rate rental experiences.</li>
                <li>Discover exclusive deals and discounts.</li>
              </ul>
            </div>
            <div class="offerings">
              <h2 class="section-heading">What We Offer</h2>
              <p class="section-text">
                We offer a comprehensive platform for finding and booking rental
                properties across various locations. Whether you're looking for
                a cozy apartment, a spacious house, or a unique vacation rental,
                we have something for everyone. Our platform strives to provide
                users with a seamless experience, from browsing listings to
                booking their dream rental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
