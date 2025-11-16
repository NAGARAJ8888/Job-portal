import { FaBolt, FaShieldAlt, FaGlobe } from "react-icons/fa";

const FeaturedHighlights = () => {
  const features = [
    {
      id: 1,
      icon: <FaBolt />,
      title: "Fast Matching",
      text: "Smart filters and instant search to discover roles tailored to you.",
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: "Secure & Private",
      text: "Your data stays protected with strict privacy and security controls.",
    },
    {
      id: 3,
      icon: <FaGlobe />,
      title: "Global Opportunities",
      text: "Explore jobs from top companies across regions and industries.",
    },
  ];

  return (
    <>
      <section className="features">
        <div className="container">
          <div className="header">
            <h3>Why Choose Career Connect?</h3>
            <p>Premium tools, seamless experience, and results that matter.</p>
          </div>
          <div className="grid">
            {features.map((f) => (
              <div className="card" key={f.id}>
                <div className="icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedHighlights;


