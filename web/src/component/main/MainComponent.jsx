import React from "react";
import { Link } from "react-router-dom";

const MainComponent = (params) => {
  const view = params.data;
  return (
    <div className="viewTitle">
      {view.map((element, index) => (
        <div key={index}>
          {element.id}&nbsp;
          <Link className="readTitle" to={`/update/${element.id}`}>
            {element.title}&nbsp;
          </Link>
          {element.author}&nbsp;
          {element.modifiedDate}&nbsp;
        </div>
      ))}
    </div>
  );
};
export default MainComponent;
 