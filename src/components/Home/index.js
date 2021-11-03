import img from "./Food2.jpg";

import picture from "./Food4.jpg";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div class="bg-img">
        <div class="container">
          <div class="topnav">
            <div>
              <h3> A Food blog </h3>
              <p class="hmp"> with fresh,zesty and healthy receipies.</p>

              <button class="buttongl">
                <span>Let's Get Started!!! </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Top Posts For Today!!!</h2>
      </div>

      <div class="row">
        <div class="column">
          <div class="w3-container w3-center w3-animate-opacity">
            <div class="cardh">
              <img src={img} alt="food" />
              <div class="containerh">
                <div class="about">Masala Potato Wedges</div>
                {/* <div class="rate">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div> */}
              </div>
            </div>

            <div>
              <div>
                <div class="cardh">
                  <img src={picture} alt="food" />
                  <div class="containerh">
                    <div class="about">Creamy Mushroom Soup</div>
                  </div>
                  {/* <div class="rate">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columnp">
          <div class="card">
            <div class="container">
              <h2 class="phi">Our Philosophy</h2>
              <p class="des">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                posuere nibh leo, at tincidunt nisi mollis a. Fusce scelerisque
                metus sit amet scelerisque accumsan. Nam porttitor consequat
                tortor, id iaculis orci pharetra nec. Vestibulum sodales nunc
                tortor, vel cursus tellus mollis vel. Etiam pretium purus eu
                dolor semper molestie. Curabitur tempor tellus eu arcu
                consequat, eu faucibus ante hendrerit. Quisque ex nisl,
                vulputate et maximus in, varius pulvinar.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aenean posuere nibh leo, at
                tincidunt nisi mollis a. Fusce scelerisque metus sit amet
                scelerisque accumsan. Nam porttitor consequat tortor, id iaculis
                orci pharetra nec. Vestibulum sodales nunc tortor, vel cursus
                tellus mollis vel. Etiam pretium purus eu dolor semper molestie.
                Curabitur tempor tellus eu arcu consequat, eu faucibus ante
                hendrerit. Quisque ex nisl, vulputate et maximus in, varius
                pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Aenean posuere nibh leo, at tincidunt nisi mollis a. Fusce
                scelerisque metus sit amet scelerisque accumsan. Nam porttitor
                consequat tortor, id iaculis orci pharetra nec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
