import "../styles/global.css";

export default function Projects() {
    const projects = [
      {
        title: "Wanderlust-A Travelling Blog Website",
        desc: "A full-stack web application built with Node.js, Express, MongoDB, and EJS for managing travel listings and reviews",
        llink: "https://wanderlust-3-5n38.onrender.com/listings",
        glink: "https://github.com/yashnagar0110/WanderLust",
      },
      {
        title: "Weather Web-App",
        desc: "A simple React + Vite application that displays weather information.",
        llink: "https://weather-website-dqsg.onrender.com/",
        glink: "https://github.com/yashnagar0110/Weather-website",
      },
      {
        title: "Zerodha Clone-A Stock Trading Web Dashboard",
        desc: "Starter templates & examples for Chrome extensions.",
        llink: "https://github.com/yashnagar0110/Zerodha-Clone",
        glink: "https://github.com/yashnagar0110/Zerodha-Clone",
      },
    ];
  
    return (
      <section className="py-5" id="projectpage">
        <div className="container">
          <h2 className="fw-bold mb-4 fs-1">Projects</h2>
          <div className="row">
            {projects.map((p, i) => (
              <div className="col-md-4 mb-3 card-shadow" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-dark">{p.title}</h5>
                    <p className="card-text text-muted">{p.desc}</p>
                    <div className="mb-1">
                      <a href={p.llink} className="btn btn-primary" target="_blank">
                        Live Link.
                      </a>
                      <a href={p.glink} className="btn btn-primary m-2" target="_blank">
                        Github Link.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  