import { useState } from "react";

import "./styles.css";

function App() {
  // State with list of all checked item
  const [name, setName] = useState('');
  const [checked, setChecked] = useState([]);
  // const checkList = ["Apple", "Banana", "Tea", "Coffee"];
  const checkList = {"Яблоко": "Apple", "Банан": "Banana", "Чай": "Tea", "Кофе": "Coffee"};

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <input value={name}  onChange={e => setName(e.target.value)} placeholder="Имя" />
        <div className="list-container">
          {Object.keys(checkList).map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)} title={item}>{checkList[item]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="otziv">
        {`${name}, ${checkedItems}`}
      </div>
    </div>
  );
}

export default App;
