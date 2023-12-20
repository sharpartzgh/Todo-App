/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';


const FilteringSection = ({filterOut}) => {
  
  return (
    <div>
      <div className="flex justify-center gap-8 py-6 px-7 mt-1 rounded-md">
        <button onClick={() => filterOut("all")}>All</button>
        <button onClick={() => filterOut("active")}>Active</button>
        <button onClick={() => filterOut("complete")}>Completed</button>
      </div>

    </div>
  );
};

export default FilteringSection;
