import "../styles/global.css";

export default function Education() {
    const education = [
      {
        degree: "B.Tech - CSE",
        place: "JSS Academy of Technical Education, Noida",
        time: "2022 - 2026",
        details: "CGPA: 7.9",
      },
      {
        degree: "Intermediate",
        place: "Aster Public School, Noida",
        time: "2020-21",
        details: "Percentage: 86.5%",
      },
      {
        degree: "High School",
        place: "Aster Public School, Noida",
        time: "2018-19",
        details: "Percentage: 90%",
      },
    ];
  
    return (
      <section className="py-5" id="edupage">
        <div className="container">
          <h2 className="fw-bold mb-4 fs-1">Education</h2>
          <div className="row card-shadow">
            {education.map((edu, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{edu.degree}</h5>
                  <p className="text-primary mb-1 card-text">{edu.place}</p>
                  <p className="text-muted">{edu.time}</p>
                  <p>{edu.details}</p>
                </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>
    );
  }
  