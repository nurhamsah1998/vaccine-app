import React from "react";
import Drawer from "./component/Drawer";
import useFetch from "./component/useFetch";
import TableData from "./table-data";

function ListPatient() {
  const [data, setData] = useFetch();
  console.log(data);
  return (
    <Drawer>
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
