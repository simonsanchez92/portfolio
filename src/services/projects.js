import axios from "axios";

export const getProjects = async () => {
  const res = await axios.get(
    "http://localhost/portfolio-backend/public/api/projects"
  );
  const data = await res.data.data;

  return data;
};

export const getAssets = async (project_id) => {
  const res = await axios.get(
    `http://localhost/portfolio-backend/public/api/images/${project_id}`
  );
  const data = await res.data.data;

  return data;
};
