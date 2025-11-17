import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="content">
            <h3>Ready to level up your career?</h3>
            <p>
              Join thousands of professionals and leading companies hiring on
              Career Connect today.
            </p>
          </div>
          <Link className="btn primary" to="/job/getall">Get Started</Link>
        </div>
      </section>
    </>
  );
};

export default CTASection;


