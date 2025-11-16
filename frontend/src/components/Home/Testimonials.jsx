const Testimonials = () => {
  const items = [
    {
      id: 1,
      name: "Aarav S.",
      role: "Frontend Engineer",
      avatar: "/public/CVs/cv1.jpg",
      quote:
        "Found my dream role in two weeks. The experience was smooth and delightful!",
    },
    {
      id: 2,
      name: "Priya K.",
      role: "HR Manager",
      avatar: "/public/CVs/cv2.jpg",
      quote:
        "Posting and managing jobs was effortless. We hired faster than ever.",
    },
    {
      id: 3,
      name: "Rahul M.",
      role: "Data Analyst",
      avatar: "/public/CVs/cv3.jpg",
      quote:
        "The matching accuracy is impressive. Highly recommend Career Connect.",
    },
  ];

  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="header">
            <h3>What our users say</h3>
            <p>Real stories from professionals and recruiters.</p>
          </div>
          <div className="grid">
            {items.map((t) => (
              <div className="card" key={t.id}>
                <div className="user">
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <p className="name">{t.name}</p>
                    <p className="role">{t.role}</p>
                  </div>
                </div>
                <p className="quote">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;


