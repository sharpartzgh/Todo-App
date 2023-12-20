/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Form = ({addtheItem}) => {
  
  // getting hold of anything the user enters in the input field
  const [itemList, setItemList] = useState("")

    // preventing the usual default by browsers when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    // add function here
    //since we created the function in the App.jsx file we passed it as props to the form which also forwards it to the form file. so we just accept the prop in the form using the destructuring method
    addtheItem(itemList)
    setItemList("");
  }


  return (
    <div className='rounded-md items-center justify-center'>
      <div className='flex justify-between py-2 px-2 items-center '>
        <form onSubmit={handleSubmit}>
          <div className=''>
          <input type="text" placeholder="Create new ToDo item" className="input-div text-gray-400 relative p-8 text-base rounded h-14 outline-none"
            onChange={(event) => setItemList(event.target.value)}
            value={itemList}
            required
            autoFocus
          />
        </div>
        </form>
        <div>
          <button type="submit" className="btn bg-blue-700 text-xl font-bold text-white py-2 px-5 h-14 mt-1 rounded-2xl" onClick={handleSubmit}
            >
              Add
            </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
