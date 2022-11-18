import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/RepoPage.css";

const Handler = () => {
  const { id } = useParams();
  const [repo, setRepo] = useState({});

  useEffect(() => {
    const userName = "devmanuel1";
    const url = `https://api.github.com/search/repositories?q=user%3A${userName}&fbclid=IwAR02lUyCPBfX-mAOgF5f2X2hIMxWhXPtBu99AnqAqVkIFebVl7JOuLVemdk`;

    const func = async () => {
      const {
        data: { items },
      } = await axios.get(url);
      const repoObj = items?.find((obj) => obj.id === Number(id));
      setRepo(repoObj);
    };

    func();
  }, [id]);

  if (!repo.id) {
    return;
  }
  const {
    id: ripoId,
    name,
    html_url,
    created_at,
    visibility,
    score,
    size,
    watchers_count,
    default_branch,
    owner: { avatar_url, url },
  } = repo;

  return (
    <div className="repo_details_container">
      <div className="repo_extra_container">
        <div className="ripo_img_div">
          <img src={avatar_url} alt="owner_img" />
        </div>
        <div className="ripo_info_div">
          <span>{name}</span>
          <span>Url: {html_url}</span>
          <span>Visibility: {visibility}</span>
          <span>Created ar: {created_at}</span>
          <span>Default Branch: {default_branch}</span>
          <span>Score: {score}</span>
          <span>Size: {size}</span>
          <span>Watches Count: {watchers_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Handler;
