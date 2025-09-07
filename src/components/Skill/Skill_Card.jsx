import "../../styles/global.css";

export default function SkillCard({ skill_name, skill_img }) {
    return (
      <div className="col-6 col-md-3 text-center mb-4">
        <div className="card h-100 shadow-sm border-0 card-shadow">
          <div className="card-body d-flex flex-column align-items-center " >
            <img
              src={skill_img}
              alt={skill_name}
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />
            <p className="mt-3 fw-semibold">{skill_name}</p>
          </div>
        </div>
      </div>
    );
  }
  