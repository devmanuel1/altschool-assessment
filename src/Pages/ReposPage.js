import axios from "axios";
import React, { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { NavigateContext } from "../App";
import RepoCard from "../Components/RepoCard";
import LoadingComp from "../Components/LoadingComp";
import "../Styles/ReposPage.css";

const Handler = () => {
  const { setActiveRoute } = useContext(NavigateContext);
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setActiveRoute("repos");
    setIsLoading(true);

    let num = 0;

    if (page > 1) {
      num = page * 10 - 1;
    }

    const func = async () => {
      try {
        const userName = "devmanuel1";
        const url = `https://api.github.com/search/repositories?q=user%3A${userName}&fbclid=IwAR02lUyCPBfX-mAOgF5f2X2hIMxWhXPtBu99AnqAqVkIFebVl7JOuLVemdk`;
        const { data } = await axios.get(url);
        const reposData = data?.items?.filter((repo) => repo.visibility === "public");
        const splicedData = reposData?.splice(num, 10);
        if (splicedData?.length) {
          setRepos(splicedData);
          setIsError(false);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      }
    };

    func();
  }, [page]);

  return (
    <>
      <div className="users_container">
        <div className="users_card_container">
          {isError ? (
            <div className="error_div">
              <h1>Error Fetching Data</h1>
            </div>
          ) : (
            repos?.map((repo) => <RepoCard repo={repo} />)
          )}
        </div>
        {/* pagination div  */}
        <div className="pagination_div">
          <span onClick={() => page > 1 && setPage(page - 1)} className="page_number">
            prev
          </span>
          <span onClick={() => setPage(1)} className={`page_number ${page === 1 && "active_page"}`}>
            1
          </span>
          <span onClick={() => setPage(2)} className={`page_number ${page === 2 && "active_page"}`}>
            2
          </span>
          <span onClick={() => setPage(3)} className={`page_number ${page === 3 && "active_page"}`}>
            3
          </span>
          {page > 6 ? (
            <span className={`page_number ${page > 6 && "active_page"}`}>{page}</span>
          ) : (
            <span onClick={() => setPage(4)} className={`page_number ${page === 4 && "active_page"}`}>
              4
            </span>
          )}
          <span onClick={() => setPage(5)} className={`page_number ${page === 5 && "active_page"}`}>
            5
          </span>
          <span onClick={() => setPage(6)} className={`page_number ${page === 6 && "active_page"}`}>
            6
          </span>
          <span onClick={() => setPage(page + 1)} className="page_number">
            next
          </span>
        </div>
        {isLoading && <LoadingComp />}
      </div>
    </>
  );
};

export default Handler;
