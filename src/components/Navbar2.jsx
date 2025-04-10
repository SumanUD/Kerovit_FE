import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/navbar2.scss";

const NavigationMenuDesktop = () => {
  return (
    <nav id="menu">
      <div className="menu-item">
        <div className="menu-text">
          <a href="#">Products</a>
        </div>
        <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="fal fa-wind-turbine"></i></div>
            <div className="text">
              <div className="title">Turbo Editor <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Edit your code while slowing down time.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-lightbulb-on"></i></div>
            <div className="text">
              <div className="title">Idea Creator <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Think of an idea, and have an AI create it.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-bomb"></i></div>
            <div className="text">
              <div className="title">Super Collider <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Remove mass from any object.</div>
            </div>
          </div>
          <div className="sub-menu-holder"></div>
        </div>
      </div>

      <div className="menu-item highlight">
        <div className="menu-text">
          <a href="#">Services</a>
        </div>
        <div className="sub-menu double">
          {["a", "b", "c", "d", "e", "f"].map((item, i) => {
            const icons = [
              "far fa-question-circle",
              "far fa-users-class",
              "far fa-school",
              "far fa-chess-rook",
              "far fa-video-plus",
              "far fa-cat"
            ];
            const titles = ["Consult", "Teach", "Learn", "Keep", "Become", "Understand"];
            const subs = ["From Professionals", "In Classroom", "By Video", "The Castle", "A Creator", "Our Journey"];
            return (
              <div key={i} className={`icon-box gb ${item}`}>
                <div className="icon"><i className={icons[i]}></i></div>
                <div className="text">
                  <div className="title">{titles[i]} <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">{subs[i]}</div>
                </div>
              </div>
            );
          })}
          <div className="bottom-container">
            Ready to dive in? <a href="#">Get Started</a>
          </div>
          <div className="sub-menu-holder"></div>
        </div>
      </div>

      <div className="menu-item highlight">
        <div className="menu-text">
          <a href="#">Support</a>
        </div>
        <div className="sub-menu triple">
          <div className="top-container gb c icon-box">
            <div className="icon big"><i className="far fa-book"></i></div>
            <div className="text">
              <div className="title">Where to start</div>
              <div className="sub-text">Find out where to begin below</div>
            </div>
          </div>
          <div className="box">
            <h3>Your Journey</h3>
            <a href="#">Get Started</a>
            <a href="#">Learn the Basics</a>
            <a href="#">Get Advanced</a>
            <a href="#">Start Teaching</a>
          </div>
          <div className="box">
            <h3>Your Tools</h3>
            <a href="#">Turbo Editor</a>
            <a href="#">Time Stopper</a>
            <a href="#">Brain Enhancer</a>
            <a href="#">Network Maker</a>
          </div>
          {[
            { icon: "fal fa-plug", title: "API Guide" },
            { icon: "fal fa-comments", title: "Support Line" },
            { icon: "fal fa-phone-volume", title: "Live Chat" },
            { icon: "fal fa-book-spells", title: "Documentation" }
          ].map((item, i) => (
            <div key={i} className="icon-box flat">
              <div className="icon"><i className={item.icon}></i></div>
              <div className="text">
                <div className="title">{item.title} <i className="far fa-arrow-right"></i></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-text">
          <a href="#">Community</a>
        </div>
        <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="far fa-satellite"></i></div>
            <div className="text">
              <div className="title">Forum <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Join our passionate community.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fab fa-twitter-square"></i></div>
            <div className="text">
              <div className="title">Twitter <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Follow us on twitter.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fab fa-twitch"></i></div>
            <div className="text">
              <div className="title">Live Stream <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">We stream content every day.</div>
            </div>
          </div>
          <div className="sub-menu-holder"></div>
        </div>
      </div>

      <div id="sub-menu-container">
        <div id="sub-menu-holder">
          <div id="sub-menu-bottom"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenuDesktop;
