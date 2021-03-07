import React from "react";
import Boxlists from "./components/Boxlists";
import Catlist from "./Catdeailsarray";

function CategoryBoxes(val, index) {
  return (
    <>
      <div className="section grid catgrid">
        {Catlist.map((val) => {
          return (
            <Boxlists
              key={val.id}
              title={val.title}
              imgsrc={val.imgsrc}
              link={val.link}
              linktext={val.linktext}
            />
          );
        })}
      </div>
    </>
  );
}

export default CategoryBoxes;
