import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStolenBikes, getSlotenCount } from "../Redux/actions.js";
import ReactPaginate from "react-paginate";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const arrayBikes = useSelector((state) => state.bikes);
  const arrayCount = useSelector((state) => state.count);
  const [currentPage, setCurrentPage] = useState(0);

  console.log(arrayBikes)
  useEffect(() => {
    dispatch(getStolenBikes());
    dispatch(getSlotenCount());
  }, []);

  const INITIAL_PAGE = 10;

  const pageCount = Math.ceil(arrayBikes.bikes?.length / INITIAL_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  
  const offset = currentPage * INITIAL_PAGE;
  const currentPageData = arrayBikes.bikes
    ?.slice(offset, offset + INITIAL_PAGE)
    .map((e) => {
      return (
          
        <div className="card" key={e.id}>
            <a href={`/details/${e.id}`}>
          {e.thumb?.length > 0 ? <img src={e.thumb} /> : <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-5NOMMcpY4wbiYLek64rO8U6bQV8W6b3t7jGkcn70bJDIIX2ZT3mPA7X6ppvCBkLOmo&usqp=CAU"} /> }

           
          <p>{e.title}</p>
          <div className="container">
            
            <p>{e.description ? e.description : "Description not available..."} </p>
          </div>
          </a>
        </div>
        
      );
    });

  return (
    <div>
        <h1>Total Cases: {arrayCount.proximity}</h1>
      <div className={"cont"}>{currentPageData}</div>

      <div className={"pages"}>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={arrayBikes.bikes < INITIAL_PAGE ? 1 : pageCount}
          onPageChange={handlePageClick}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link__disabled"}
          activeClassName={"pagination__link__active"}
          containerClassName={"pagination"}
        />
      </div>
    </div>
  );
}
