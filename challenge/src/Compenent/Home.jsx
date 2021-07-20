import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getStolenBikes} from "../Redux/actions.js"
import ReactPaginate from "react-paginate";
import Style from "./Home.css"


export default function Home() {
    const dispatch = useDispatch();
    const arrayBikes = useSelector((state) => state.bikes);
    const [currentPage, setCurrentPage] = useState(0);
    
   
    

    useEffect(() => {
        dispatch(getStolenBikes());
      }, []); 


      const INITIAL_PAGE= 5;
     
      
      const pageCount = Math.ceil(arrayBikes.bikes?.length / INITIAL_PAGE);
      function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);

    }

    console.log(pageCount)
    const offset = currentPage * INITIAL_PAGE;
    const currentPageData= arrayBikes.bikes?.slice(offset, offset + INITIAL_PAGE).map( e => {
 
    return (        
        <div className="card" key={e.id}>
        <p>{e.title}</p>
        <img className="img1"src={e.thumb} />
    </div>
    )
    

})
    
    

    return(
        <div>
            <div className={"style.box"}>
            
            {
                currentPageData
            }
            </div>
 
            <div className={Style.pages}>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={arrayBikes.bikes < INITIAL_PAGE ? 1 : pageCount}
                        onPageChange={handlePageClick}        
                        previousLinkClassName={Style.pagination__link}
                        nextLinkClassName={Style.pagination__link}
                        disabledClassName={Style.pagination__link__disabled}
                        activeClassName={Style.pagination__link__active}
                        containerClassName={Style.pagination}
                    />  
                </div> 

        </div>
    );
}