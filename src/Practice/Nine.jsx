import { useState } from "preact/hooks";
import React from "react";

function Nine() {
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    const select = e.target.files[0];
    setFile(select);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />;
      {file && <img src={URL.createObjectURL(file)} alt="error" />}
    </div>
  );
}

export default Nine;
