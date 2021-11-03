import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import "./style.css";

const Dashboard = () => {
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    axios.defaults.baseURL = "http://localhost:8000/";

    axios.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }, []);

  //for search
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  //for list
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/auth/postlist");
    result = await result.json();
    setData(result);
  }

  //for pagination
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("http://127.0.0.1:8000/auth/postlist");
      result = await result.json();
      setPageCount(Math.ceil(result.length / perPage));
      setData(result.slice(offset, offset + perPage));
    };
    fetchData();
  }, [offset]);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };

  return (
    <div class="dashbg">
      <h1 class="dashder"> All Posts</h1>

      <form class="example">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
      {searchInput.length > 1
        ? filteredResults.map((item) => {
            return (
              <div class="cardr">
                <img
                  style={{ width: 300, height: 300 }}
                  src={"http://127.0.0.1:8000/posts/" + item.file_path}
                  alt="food"
                />
                <div class="containerr">
                  <Link to={"details/" + item.id}>
                    <a href="http://localhost:3000/details/:id" class="details">
                      {item.name}
                    </a>
                  </Link>
                  <br />
                </div>
                <br />
              </div>
            );
          })
        : data.map((item) => (
            <div class="rowr">
              <div class="columnr">
                <div class="cardr">
                  <img
                    style={{ width: 300, height: 300 }}
                    src={"http://127.0.0.1:8000/posts/" + item.file_path}
                    alt="food"
                  />
                  <div class="containerr">
                    <Link to={"details/" + item.id}>
                      <a
                        href="http://localhost:3000/details/:id"
                        class="details"
                      >
                        {item.name}
                      </a>
                    </Link>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ))}

      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Dashboard;
