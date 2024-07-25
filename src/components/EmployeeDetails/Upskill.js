import React from "react";

const Upskill = () => {
  const platforms = [
    { name: "Percipio", link: "#percipio" },
    { name: "Pluralsight", link: "#pluralsight" },
    { name: "LGB@Learning", link: "#lgb-learning" },
    { name: "Other Platform", link: "#other-platform" },
  ];

  return (
    <div className="upskill-card-unique">
      <h2>Upskill Here</h2>
      <div className="upskill-container-unique">
        {platforms.map((platform) => (
          <div key={platform.name} className="upskill-platform-card-unique">
            <a href={platform.link}>{platform.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upskill;


