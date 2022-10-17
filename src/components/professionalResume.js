import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const ProfessionalResume = React.forwardRef((props, ref) => {

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div ref={ref} className="frame-res f-des">
      {loading ? (
        <div className="loader-wrapper">
          <PacmanLoader color="#292929" size={50} />
        </div>
      ) : (
        <div className="s-theme">
          <h2 className="m-0">This template is coming soon! </h2>
        </div>
      )}
    </div>
  );
});

export default ProfessionalResume;
