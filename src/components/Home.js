import { useRef } from "react";
import "./styles.css";
import background from "./images/bg-pattern-desktop.svg";
import desktop from "./images/hero-desktop.jpg";
import mobile from "./images/hero-mobile.jpg";
import logo from "./images/logo.svg";
import arrow from "./images/icon-arrow.svg";
function Home() {

  const emailRef = useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
  }

  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo"/>
      <div className="text">
        <div className="subtext">
          <div className="title"><span className="dark-red">WE'RE</span> <span className="bold">COMING SOON</span></div>
          <div className="description dark-red">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</div>
          <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} placeholder="Email Address" />
            <button type="submit"><img className="arrow" src={arrow}/></button>
          </form>
        </div>
        
      </div>
      <div className="image"></div>

      <style>{`
        .container {
          background-image: url(${background});
        }

        @media (min-width: 738px) {
          .image {
            background-image: url(${desktop});
            background-size: cover;
          }
        }

        @media (max-width: 737px) {
          .image {
            background-image: url(${mobile});
            background-size: cover;
          }
        }
      `}</style>
    </div>
  )
}

export default Home;