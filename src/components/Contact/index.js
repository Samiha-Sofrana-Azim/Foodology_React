import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: name, message: message };
    axios
      .post("http://127.0.0.1:8000/auth/contact", data)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  const items = document.querySelectorAll(".accordion button");

  const toggleAccordion = () => {
    const itemToggle = this.getAttribute("aria-expanded");
    let i = 0;
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle === "false") {
      this.setAttribute("aria-expanded", "true");
    }
  };

  items.forEach((item) => item.addEventListener("click", toggleAccordion));

  return (
    <div class="containerc">
      <div>
        <div class="w3-container w3-center w3-animate-top">
          <form className="conform" onSubmit={handleSubmit}>
            <h2 class="heading">Leave a Message</h2>

            <label>Name</label>

            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Message</label>
            <textarea
              placeholder="Description"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button class="conb" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div class="w3-container w3-center w3-animate-bottom">
        <div class="containerf">
          <h2 class="heq">FAQs</h2>

          <div class="accordion">
            <div class="accordion-item">
              <button id="accordion-button-1" aria-expanded="false">
                <span class="accordion-title">
                  What does Foodology actually do?
                </span>
                <span class="icon" aria-hidden="true"></span>
              </button>
              <div class="accordion-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                  viverra suspendisse potenti.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <button id="accordion-button-2" aria-expanded="false">
                <span class="accordion-title">
                  Why creating account is mandatory for posting blog?
                </span>
                <span class="icon" aria-hidden="true"></span>
              </button>
              <div class="accordion-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                  viverra suspendisse potenti.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <button id="accordion-button-3" aria-expanded="false">
                <span class="accordion-title">
                  Will we ever get extra facilities?
                </span>
                <span class="icon" aria-hidden="true"></span>
              </button>
              <div class="accordion-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                  viverra suspendisse potenti.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <button id="accordion-button-4" aria-expanded="false">
                <span class="accordion-title">
                  How can I resolve the issue?
                </span>
                <span class="icon" aria-hidden="true"></span>
              </button>
              <div class="accordion-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                  viverra suspendisse potenti.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <button id="accordion-button-5" aria-expanded="false">
                <span class="accordion-title">
                  How do I get my posts above everyone?
                </span>
                <span class="icon" aria-hidden="true"></span>
              </button>
              <div class="accordion-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                  viverra suspendisse potenti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="containeri">
        <h2 class="headline"> Find Us On</h2>
        <a
          href="https://en.wikipedia.org/wiki/Facebook"
          class="fa fa-facebook"
        ></a>
        <a
          href="https://en.wikipedia.org/wiki/YouTube"
          class="fa fa-youtube"
        ></a>
        <a
          href="https://en.wikipedia.org/wiki/Instagram"
          class="fa fa-instagram"
        ></a>
        <a
          href="https://en.wikipedia.org/wiki/Pinterest"
          class="fa fa-pinterest"
        ></a>
      </div>
    </div>
  );
};

export default Contact;
