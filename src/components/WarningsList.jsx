import React from "react";
import "./style.css";

function WarningsList({ warnings }) {
  //mapping the warnings array here so that the popup displays a list of warnings rather than one long string
  return (
    <div className="warnings">
      {warnings.map((warning) => {
        return <span key={warning}>{warning}</span>;
      })}
    </div>
  );
}

export default WarningsList;
