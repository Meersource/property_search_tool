import { useEffect, useState } from "react";
import "./App.css";
import { getFilterResult } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state?.filterReducer);

  const [searchProperty, setSearchProperty] = useState("");

  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [checkArray, setCheckedArray] = useState([]);

  const handleInputChange = (event) => {
    setSearchProperty(event.target.value);
  };

  const handleChange = (e, id) => {
    const valExit = selected.includes(id);

    if (valExit) {
      const deletedItem = selected.filter((currentItem) => {
        return currentItem !== id;
      });
      console.log("selected", selected);
      setSelected(deletedItem);
    } else {
      setSelected((preVal) => {
        return [...preVal, id];
      });
    }
  };

  const handleAllSelect = () => {
    setSelectAll(!selectAll);
    setSelected([]);
  };

  const handleSearch = () => {
    dispatch(getFilterResult(searchProperty));
    setSearchProperty("");
  };

  useEffect(() => {
    const myArrayFiltered = searchResults.filter((el) => {
      return selected.some((f) => {
        return f === el.id;
      });
    });
    setCheckedArray(myArrayFiltered);
  }, [selected]);

  const tableHeader = {
    border: "1px solid black",
    borderCollapse: " collapse",

    width: "100%",
  };
  const tableStyle = {
    border: "1px solid black",
    borderCollapse: " collapse",
  };
  return (
    <div className="table_conatiner">
      <h1>Property Search Tool</h1>

      <div className="search_container">
        <input
          className="search_input"
          type="text"
          placeholder="Address"
          value={searchProperty}
          onChange={handleInputChange}
        />
        <button
          className="search_btn"
          disabled={searchProperty?.length >= 1 ? false : true}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {/* //// */}
      {selected.length > 0 && (
        <div className="selected_properties">
          <p>Selected Properties:</p>
          <table style={tableHeader}>
            <thead>
              <tr>
                <th style={tableStyle}>Address</th>
                <th style={tableStyle}>Postcode</th>
                <th style={tableStyle}>number of rooms</th>
                <th style={tableStyle}>floor area</th>
              </tr>
            </thead>
            <tbody>
              {checkArray?.length > 0 &&
                checkArray?.map((value, key) => {
                  return (
                    <tr key={key}>
                      <td style={tableStyle}>{value?.address}</td>
                      <td style={tableStyle}>{value?.postcode}</td>
                      <td style={tableStyle}>{value?.numofroom}</td>
                      <td style={tableStyle}>{value?.floorarea}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
      {/* //// */}

      <div className="searched_result">
        <p>Searched Result:</p>
        <table style={tableHeader}>
          <thead>
            <tr>
              <th style={tableStyle}>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleAllSelect}
                />
              </th>
              <th style={tableStyle}>Address</th>
              <th style={tableStyle}>Postcode</th>
              <th style={tableStyle}>number of rooms</th>
              <th style={tableStyle}>floor area</th>
            </tr>
          </thead>
          <tbody>
            {searchResults?.length > 0 &&
              searchResults?.map((value, key) => {
                return (
                  <tr key={key}>
                    <td style={tableStyle}>
                      <input
                        type="checkbox"
                        id={value?.id}
                        name={value?.name}
                        checked={selected.includes(value?.id) || selectAll}
                        onChange={(e) => handleChange(e, value?.id)}
                      />
                    </td>
                    <td style={tableStyle}>{value?.address}</td>
                    <td style={tableStyle}>{value?.postcode}</td>
                    <td style={tableStyle}>{value?.numofroom}</td>
                    <td style={tableStyle}>{value?.floorarea}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
