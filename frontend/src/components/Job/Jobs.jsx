import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const { isAuthorized } = useContext(Context);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigateTo = useNavigate();
  useEffect(() => {
    try {
      axios
        .get(`${API_BASE_URL}/api/v1/job/getall`, {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!isAuthorized) {
    navigateTo("/");
  }

  const categories = useMemo(() => {
    const set = new Set((jobs.jobs || []).map((j) => j.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    const all = jobs.jobs || [];
    return all.filter((j) => {
      const matchText =
        `${j.title ?? ""} ${j.category ?? ""} ${j.country ?? ""}`
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchCat = category === "All" ? true : (j.category === category);
      return matchText && matchCat;
    });
  }, [jobs, search, category]);

  return (
    <section className="jobs page">
      <div className="container">
        <div className="header">
          <div className="titleBlock">
            <h3>Explore Open Roles</h3>
            <p>Find opportunities tailored to your skills and ambitions.</p>
          </div>
          <div className="filters">
            <input
              type="text"
              placeholder="Search by title, category, or location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="banner">
          {filteredJobs.map((element) => {
            return (
              <div className="card" key={element._id}>
                <div className="cardHead">
                  <p className="jobTitle">{element.title}</p>
                  <span className="pill">{element.category}</span>
                </div>
                <p className="location">{element.country}</p>
                <Link className="btnLink" to={`/job/${element._id}`}>
                  View details
                </Link>
              </div>
            );
          })}
          {!filteredJobs.length && (
            <div className="emptyState">
              <p>No jobs found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
