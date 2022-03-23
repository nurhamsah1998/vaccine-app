import React from "react";
import Drawer from "./component/Drawer";
import TableData from "./table-data";

function ListPatient() {
  function nur() {
    alert("sd");
  }
  return (
    <Drawer onclick={true}>
      {/* <div>
        {Array.isArray(data)
          ? data.map((i) => {
              return (
                <div key={i._id}>
                  <p>{i.name}</p>
                </div>
              );
            })
          : null}
      </div> */}
      <TableData />
    </Drawer>
  );
}

export default ListPatient;
