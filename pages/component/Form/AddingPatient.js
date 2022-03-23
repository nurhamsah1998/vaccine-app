import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import SelectInut from "../SelectInput";
import { useState } from "react";
import { notification } from "antd";
import "antd/dist/antd.css";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { Spin } from "antd";
const moment = require("moment");

export default function BasicTextFields() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dad_name, setDad_name] = useState("");
  const [mom_name, setMom_name] = useState("");
  const [matematika, setMatematika] = useState("");
  const [kejuruan, setKejuruan] = useState("");
  const [bahasa_indonesia, setBahasa_indonesia] = useState("");
  const [pendidikan_agama, setPendidikan_agama] = useState("");
  const openNotification = (placement) => {
    notification.success({
      message: `Sukses Mengirim Data ke Server `,
      description:
        "Data sudah tersimpan di server pusat. Lihat di tab list untuk melihat data user lebih lengkap.",
      placement,
    });
  };
  const openNotification1 = (placement) => {
    notification.error({
      message: `Gagal mengirim data`,
      description: "Hubungi pihak developer untuk informasi lebih lanjut",
      placement,
    });
  };
  const openNotification2 = (placement) => {
    notification.error({
      message: `Tidak boleh ada yang kosong`,
      description:
        "Tolong masukkan input dengan benar. Tidak memasukan data keinput system tidak akan mengirim data.",
      placement,
    });
  };
  const openNotification3 = (placement) => {
    notification.error({
      message: `Nomor telpon tidak VALID`,
      description: "Tolong masukkan nomor telfon yang valid. contoh : 081234567890",
      placement,
    });
  };
  function nurhamsah(e) {
    e.preventDefault();
    var waktu = moment().format("MMMM Do YYYY, h:mm:ss a");
    setLoading(true);
    const body = {
      name: name,
      phone: phone,
      address: address,
      dad_name: dad_name,
      mom_name: mom_name,
      date: waktu,
      matematika: matematika || null,
      kejuruan: kejuruan || null,
      bahasa_indonesia: bahasa_indonesia || null,
      pendidikan_agama: pendidikan_agama || null,
    };
    if (name == "" || phone == "" || address == "" || dad_name == "" || mom_name == "") {
      openNotification2("bottomRight");
      setLoading(false);
      return false;
    } else if (phone.length >= 13 || phone.length <= 9) {
      openNotification3("bottomRight");
      setLoading(false);
      return false;
    }
    axios
      .post("http://localhost:8000/server", body)
      .then((res) => {
        setLoading(false);
        openNotification("bottomRight");
      })
      .catch((error) => {
        openNotification1("bottomRight");
        setLoading(false);
      });

    setName("");
    setPhone("");
    setAddress("");
    setDad_name("");
    setMom_name("");
  }
  function hamsah1() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "start",
          marginTop: "16px",
        }}
      >
        <CircularProgress color="secondary" size={"20px"} sx={{ marginTop: "1px" }} />
        <p style={{ marginLeft: "20px" }}>Mengirim . .</p>
      </div>
    );
  }

  return (
    <>
      <Box component="form" onSubmit={nurhamsah} sx={{}} noValidate autoComplete="off">
        <Grid container spacing={2} sx={{ display: "flex", marginBottom: "20px" }}>
          <Grid xs={6} item sx={{ display: "grid" }}>
            <TextField
              id="outlined-basic"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nama"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="outlined-basic"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="No. telp"
              type="number"
              variant="outlined"
              color="secondary"
              sx={{ margin: "20px 0px" }}
            />
            <SelectInut id="outlined-basic" x="100%" label="Jenis vaksin" />
          </Grid>

          <Grid item sx={{ display: "grid" }} xs={6}>
            <TextField
              id="outlined-basic"
              label="Alamat"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
              color="secondary"
            />
            <TextField
              onChange={(e) => setDad_name(e.target.value)}
              id="outlined-basic"
              value={dad_name}
              sx={{ margin: "20px 0px" }}
              label="Nama Ayah"
              variant="outlined"
              color="secondary"
            />
            <TextField
              onChange={(e) => setMom_name(e.target.value)}
              id="outlined-basic"
              value={mom_name}
              label="Nama Ibu"
              variant="outlined"
              color="secondary"
            />
          </Grid>
        </Grid>

        <LoadingButton
          // onClick={handleClick}
          loading={loading}
          type="submit"
          variant="contained"
          fullWidth
          color="secondary"
          loadingIndicator={hamsah1()}
        >
          Kirim Data
        </LoadingButton>
      </Box>
    </>
  );
}
