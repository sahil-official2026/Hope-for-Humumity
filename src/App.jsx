
import "./App.css";

function App() {
  return (
    <div className="website">

      {/* Navbar */}
      <nav className="navbar">
        <h2>Hope for Humanity</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#vision">Our Vision</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="donate-btn">
          Support Us
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="subtitle">
            HOPE FOR HUMANITY PAKISTAN
          </p>

          <h1>
            Reaching the
            <span> Underprivileged</span>
          </h1>

          <p className="hero-description">
            Bringing hope, love, and support to
            those who need it most. Together, we can
            make a difference in the lives of
            underprivileged families.
          </p>

          <div className="hero-buttons">
            <a href="#vision" className="primary-btn">
              Our Vision
            </a>

            <a href="#about" className="secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
            alt="Helping children and communities"
          />
        </div>

      </section>

      {/* About Section */}
      <section className="about" id="about">

        <p className="subtitle">WHO WE ARE</p>

        <h2>About Hope for Humanity</h2>

        <p>
          Hope for Humanity Pakistan is a humanitarian
          vision dedicated to reaching underprivileged
          communities and supporting families facing
          difficult living conditions.

          We believe every person deserves food,
          clothing, dignity, love, and hope for a
          better future.
        </p>

      </section>

      {/* Vision Section */}
      <section className="vision" id="vision">

        <div className="vision-content">
          <p className="subtitle">OUR VISION</p>

          <h2>Reaching the Underprivileged</h2>

          <p>
            Our vision is to reach those who are often
            forgotten, providing practical support
            through food, clothing, and essential
            resources.

            Through compassion, honesty, and
            transparency, we aim to restore hope
            and bring meaningful change to lives.
          </p>

          <h3>
            "Together, We Can Make a Difference"
          </h3>
        </div>

      </section>

      {/* Mission Cards */}
      <section className="mission">

        <p className="subtitle">WHAT WE STAND FOR</p>

        <h2>Our Mission</h2>

        <div className="cards">

          <div className="card">
            <span>🍞</span>
            <h3>Food Support</h3>
            <p>
              Helping families with essential food
              and daily necessities.
            </p>
          </div>

          <div className="card">
            <span>👕</span>
            <h3>Clothing Donations</h3>
            <p>
              Providing clothing and footwear
              to underprivileged communities.
            </p>
          </div>

          <div className="card">
            <span>❤️</span>
            <h3>Restoring Hope</h3>
            <p>
              Sharing love, dignity, and hope
              for a better tomorrow.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer id="contact">

        <h2>Hope for Humanity Pakistan</h2>

        <p>
          Reaching the Underprivileged.
          Restoring Hope. Sharing Love.
        </p>

        <p className="copyright">
          © 2026 Hope for Humanity Pakistan.
          All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;
