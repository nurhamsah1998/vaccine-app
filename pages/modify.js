import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';

function Modify() {
  const [mm, setMm] = useState(0);
  const [bi, setBi] = useState(0);
  const [kejuruan, setKejuruan] = useState(0);
  const [religion, setReligion] = useState(0);
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function handleMM(e) {
    if (e.target.value >= 101) {
      alert('nilai melebihi standart');
      e.target.value = null;
      setMm(e.target.value);
    }
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            name="mm"
            id="mm"
            label="Nilai Matematika"
            color="secondary"
            type="number"
            fullWidth
            onChange={(e) => {
              handleMM(e);
              formik.handleChange;
            }}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <TextField
            label="Nilai Bahasa Indonesia"
            color="secondary"
            type="number"
            fullWidth
            onChange={(e) => {
              if (e.target.value >= 101) {
                alert('nilai melebihi standart');
                e.target.value = null;
              }
            }}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <TextField
            label="Nilai Pendidikan Agama"
            color="secondary"
            type="number"
            fullWidth
            onChange={(e) => {
              if (e.target.value >= 101) {
                alert('nilai melebihi standart');
                e.target.value = null;
              }
            }}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <TextField
            label="Nilai Kejuruan"
            color="secondary"
            type="number"
            fullWidth
            onChange={(e) => {
              if (e.target.value >= 101) {
                alert('nilai melebihi standart');
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
