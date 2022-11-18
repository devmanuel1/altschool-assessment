import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/RepoCard.css";

const Handler = ({ repo }) => {

  const navigate = useNavigate()

  const {
    id,
    name,
    html_url,
    created_at,
    visibility,
    owner: { avatar_url, url },
  } = repo;

  const handleNavigate = () => {
    navigate(`/repos/${id}`)
  }

  return (
    <div onClick={handleNavigate} className="user_card_container">
      {/* information text div  */}
      <div className="card_text_div">
        {/* owner div  */}
        <div className="owner_div">
          <img src={avatar_url} alt="owner_image" />
          <span>{url.split("/").reverse()[0]}</span>
        </div>
        <h3>{name}</h3>
        <span>
          URL: <a href={html_url} style={{textDecoration: "none"}}>{html_url}</a>
        </span>
        <span>Created at: {created_at}</span>
        <span>Visibility: {visibility}</span>
      </div>
    </div>
  );
};

export default Handler;
