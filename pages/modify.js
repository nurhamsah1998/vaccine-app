import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function Modify({ hasah }) {
  const [mm, setMm] = useState(0);
  const [bi, setBi] = useState(0);
  const [kejuruan, setKejuruan] = useState(0);
  const [religion, setReligion] = useState(0);
  function handleMM(e) {
    if (e.target.value >= 101) {
      alert("nilai melebihi standart");
      e.target.value = null;
      setMm(e.target.value);
    }
  }
  hasah = "nurhamsah";

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <TextField
            label="Nilai Matematika"
            color="secondary"
            type="number"
            fullWidth
            onChange={(e) => handleMM(e)}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            label="Nilai Bahasa Indonesia"
            color="secondary"
            type="number"
            fullWidth
            onChange={(e) => {
              if (e.target.value >= 101) {
                alert("nilai melebihi standart");
                e.target.value = null;
              }
            }}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            label="Nilai Pendidikan Agama"
            color="secondary"
            type="number"
            fullWidth
            onChange={(e) => {
              if (e.target.value >= 101) {
                alert("nilai melebihi standart");
                e.target.value = null;
              }
            }}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            label="Nilai Kejuruan"
            color="secondary"
            type="number"
            fullWidth
            onChange={(e) => {
              if (e.target.value >= 101) {
                alert("nilai melebihi standart");
                e.target.value = null;
              }
            }}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
          />
        </div>
      </form>
    </div>
  );
}

export default Modify;
