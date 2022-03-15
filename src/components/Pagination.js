
import React from "react";
import "./pagination.css"

const Pagination = ({prev, next, onPrevious, onNext}) => {

  const handlePrevious = () => {
    onPrevious()
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {
          prev ? ( 
        <li className="page-item">
          <button className="page-link text-dark" onClick={handlePrevious}>Previous</button>
        </li>
           ) : null}
        {
          next ? ( 
        <li className="page-item">
          <button className="page-link" onClick={handleNext}>Next</button>
        </li>
          ) : null}
      </ul>
    </nav>
  );
};

export default Pagination