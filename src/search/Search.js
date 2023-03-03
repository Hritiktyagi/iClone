
import React, { useState } from 'react'
import '../search/Search.css';
const Search = ({ placeholder, data }) => {

  const [filteredData, setFiltereData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    if (searchWord == "") {
      setFiltereData([])
    }
    else {
      setFiltereData(newFilter);
    }

  }


  const clearInput = () => {
    setFiltereData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <i className="fa-light  fa fa-magnifying-glass "></i>
          ) : (
            <i className="fa-light fa fa-xmark f" id="clearBtn" onClick={clearInput} ></i>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default Search