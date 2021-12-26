import React, { useState } from "react";
import { COLORS } from "../../constants/COLORS";

const ProjectPills = ({ tag }) => {
  const [colors] = useState(Math.floor(Math.random() * 10));
  return (
    <span style={COLORS[colors]} class="pills-font inline-block rounded-full text-gray-700 text-sm m-0.5 px-4 py-2">
      {tag}
    </span>
  );
};

export default ProjectPills;
