import React, { useState, useEffect } from "react";
import './App.css';

import listOfState from './list/state';

function App() {
  return (
     <>
      {listOfState.map(list =>
          <ListTable />
          )}
    </>
  );
};


const ListTable = props => {
  const [stateList, setState] = useState([]);

  return (
    <table className="table-data">
      <tr className="state">
        <p>State: {props.state}</p>
        <td onLoad={() => setState(stateList)}>
           State: {props.item}  
        </td>
      </tr>
    </table>
  );
};

export default App;
