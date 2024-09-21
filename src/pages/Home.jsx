import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Explore the world with GlobeScout</h1>
          <p className="paragraph">
            Discover the world's most popular cities, countries, and cultures
            with photos, videos, and more. Where you have never been before,
            GlobeScout will take you there.
          </p>
          <NavLink to="/about" className="no-underline">
            <button className="btn btn-darken btn-inline bg-white-box">
              Explore Now <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>

        <div className="hero-image">
          <img
            className="banner-image"
            src="/images/world.png"
            alt="world-beauty"
          />
        </div>
      </div>
    </main>
  );
};
