import React from "react";
import Model from "../Assets/3D ICON/Github-Model.png";

const GitHubStats = () => {
  return (
    <div className="flex w-full h-full gap-12">
      <div className="w-[50%]">
        <img src={Model} alt="" className="w-[80%] mx-auto" />
      </div>

      <div className="w-[50%] p-4 flex flex-col gap-5">
        <a href="#">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Rajyadav2912&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=false"
            alt=""
            className="w-full"
          />
        </a>
        <a href="#">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=Rajyadav2912&theme=tokyonight&border_radius=10&date_format=j%20M%5B%20Y%5D"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;
