import React from 'react';
import { useSelector } from 'react-redux';

import './ResultsCount.scss';

const ResultsCount = () => {
  const totalAmountValue = useSelector(({ movie: { totalAmount } }) => totalAmount);

  return (
    <div className="results-count-container">
      <span>
        {totalAmountValue}
      </span>
      <span> movies found</span>
    </div>
  );
};

export default ResultsCount;
