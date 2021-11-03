import img from "./Person1.jpg";
import pic from "./Person2.jpg";
import imge from "./Person3.jpg";
import "./style.css";

const About = () => {
  return (
    <div className="aboutsec">
      <div class="bg-about">
        <div class="container">
          <div class="topnav">
            <div>
              <div class="w3-container w3-center w3-animate-left">
                <h1 class="abh"> About Us </h1>
              </div>
            </div>
            <div>
              <p class="abp">
                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                zetterijwezen.Pellentesque ac ornare purus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <div class="detail">
        <h2 class="headerb">Meet Our Team</h2>
      </div>

      <div class="w3-container w3-center w3-animate-zoom">
        <div class="rowb">
          <div class="columnb">
            <div class="cardb">
              <img class="person" src={img} alt="person" />
              <div class="containerb">
                <h2>Jane Doe</h2>
                <p class="titleb">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum.</p>
                <p>jane@example.com</p>
              </div>
            </div>
          </div>

          <div class="columnb">
            <div class="cardb">
              <img class="person" src={pic} alt="person" />
              <div class="containerb">
                <h2>Mike Ross</h2>
                <p class="titleb">CTO</p>
                <p>Some text that describes me lorem ipsum.</p>
                <p>mike@example.com</p>
              </div>
            </div>
          </div>

          <div class="columnb">
            <div class="cardb">
              <img class="person" src={imge} alt="person" />
              <div class="containerb">
                <h2>John Doe</h2>
                <p class="titleb">CFO</p>
                <p>Some text that describes me lorem ipsum.</p>
                <p>john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
