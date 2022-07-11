import { useState } from "react";
import checkList from "./db.json";
import db from "./first.json";
import "./styles.css";

function App() {
  const [name, setName] = useState('');
  const [checked, setChecked] = useState([]);

  const handleRadio = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ". " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <input value={name}  onChange={e => setName(e.target.value)} placeholder="Имя" className="name" />
        <div className="list-container">
          {Object.keys(db).map((item, index) => (
            <div key={index} className="radio">
              <label><input value={item} type="radio" name="first" onChange={handleRadio} />     
              <span className={isChecked(item)} title={item}>{db[item]}</span></label>          
            </div>
          ))}
        </div>
      </div>
      <div className="checkList"> 
        <div className="list-container">       
          {Object.keys(checkList).map((item, index) => (
            <div key={index} className="check">
              <label><input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)} title={item}>{checkList[item]}</span></label>              
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
