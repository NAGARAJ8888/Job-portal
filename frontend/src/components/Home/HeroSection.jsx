import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../main";

const HeroSection = () => {
  const { user } = useContext(Context);
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <div className="eyebrow">Career Connect</div>
            <h1>Find a job that suits</h1>
            <h1>your interests and skills</h1>
            <p>
              Discover job opportunities that match your skills and passions.
              Connect with employers seeking talent like yours for rewarding
              careers.
            </p>
            <div className="heroActions">
              <Link className="btn primary" to="/job/getall">
                Browse Jobs
              </Link>
              {user && user.role === "Employer" && (
                <Link className="btn ghost" to="/job/post">
                  Post a Job
                </Link>
              )}
            </div>
          </div>
          <div className="image">
            <img src="/hero.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
