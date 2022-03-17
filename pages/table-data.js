import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table, Modal, Tabs } from "antd";
const { TabPane } = Tabs;
import { red, blue } from "@mui/material/colors";
import axios from "axios";
import { notification } from "antd";
import "antd/dist/antd.css";
import { Button, Box, Typography } from "@mui/material";
const { confirm } = Modal;
import Diagram from "./component/Diagram";

function TableData() {
  const [server, setServer] = useState();
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modal, setModal] = useState([]);
  const [confirm, setConfirm] = useState(false);

  const openNotification_success = (placement) => {
    notification.success({
      message: `Berhasil Menghapus Data `,
      description: "Semua informasi dari data tersebut sudah dihapus.",
      placement,
    });
  };
  const openNotificationEror = (placement) => {
    notification.error({
      message: `GAGAL MENGAKSES DATABASE`,
      description: "Mohon cek jaringan internet anda. info lebih lanjut hubungi DEVELOPER",
      placement,
    });
  };

  function dataBase() {
    axios
      .get("http://localhost:8000/server")
      .then((res) => {
        setServer(res.data);
        setPage(res?.data?.length);
      })
      .catch((error) => {
        openNotificationEror("bottomRight");
      });
  }

  useEffect(() => {
    dataBase();
  }, []);
  const showModal = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    console.log(server);
  };

  function handleDelete(e) {
    axios.delete("http://localhost:8000/server/" + e._id).then((res) => {
      openNotification_success("bottomRight");
      setIsModalVisible(false);
      setConfirm(false);
      dataBase();
    });
  }
  const columns = [
    {
      key: "name",
      title: "Name",
      width: "10%",
      dataIndex: "name",
      render: (data) => <Typography>{data}</Typography>,
    },
    {
      key: "phone",
      title: "no. Telfon",
      width: "10%",
      dataIndex: "phone",
      render: (data) => <Typography>{data}</Typography>,
    },
    {
      key: "address",
      title: "Alamat",
      width: "10%",
      dataIndex: "address",
      render: (data) => <Typography>{data}</Typography>,
    },
    {
      key: "dad_name",
      title: "Nama Ayah",
      width: "10%",
      dataIndex: "dad_name",
      render: (data) => <Typography>{data}</Typography>,
    },
    {
      key: "mom_name",
      title: "Nama Ibu",
      width: "10%",
      dataIndex: "mom_name",
      render: (data) => <Typography>{data}</Typography>,
    },
  ];
  function handleRow(e) {
    if (e._id) {
      setIsModalVisible(true);
      setModal(e);
    }
  }
  function nur() {
    setConfirm(true);
  }
  function closeConfirm() {
    setConfirm(false);
  }
  console.log(server);
  return (
    <div>
      <Modal
        title={[<Typography style={{ margin: "0px" }}>Yakin Ingin Menghapus Data ?</Typography>]}
        visible={confirm}
        onCancel={closeConfirm}
        footer={[
          <Button sx={{ mr: 5 }} onClick={closeConfirm} color="secondary" variant="contained">
            Batalkan
          </Button>,
          <Button onClick={() => handleDelete(modal)} color="warning" variant="contained">
            Setuju
          </Button>,
        ]}
      >
        <Box>
          <Typography fontSize="15px">
            Dengan menyetujui penghapusan data, semua data akan terhapus meliputi nama, nomer
            handphone, alamat, tanggal lahir, nama mentor dan training. Semua data tersebut akan
            terhapus dan tidak bisa direcovery lagi !
          </Typography>
        </Box>
      </Modal>
      <Table
        onRow={(record, rowIndex) => {
          return { onClick: () => handleRow(record), style: { cursor: "pointer" } };
        }}
        columns={columns}
        pagination={{
          pageSize: 5,
          total: page,
        }}
        dataSource={server}
        bordered
        key={columns.key}
      />
      <Modal
        title={`Profil Lengkap ${modal.name}`}
        visible={isModalVisible}
        cancelText={`Hapus Data ${modal.name}`}
        onCancel={showModal}
        closable={nur}
        okText={`Modif Data ${modal.name}`}
        footer={[
          <Button onClick={nur} sx={{ mr: 5 }} color="warning" variant="contained">
            Delete this data
          </Button>,
          <Button color="secondary" variant="contained">
            Modify
          </Button>,
        ]}
      >
        <div>
          <Tabs type="card">
            <TabPane tab={[<Typography>Short Profile</Typography>]} key="1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ width: "160px" }}>NAMA</Typography>
                <Typography>:</Typography>
                <Typography style={{ marginLeft: "20px", fontWeight: 700 }}>
                  {modal.name}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ width: "160px" }}>no. Telpon</Typography>
                <Typography>:</Typography>
                <Typography style={{ marginLeft: "20px", fontWeight: 700 }}>
                  {modal.phone}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ width: "160px" }}>Nama Ibu</Typography>
                <Typography>:</Typography>
                <Typography style={{ marginLeft: "20px", fontWeight: 700 }}>
                  {modal.mom_name}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ width: "160px" }}>Alamat</Typography>
                <Typography>:</Typography>
                <Typography style={{ marginLeft: "20px", fontWeight: 700 }}>
                  {modal.address}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ width: "160px" }}>Nama Ayah</Typography>
                <Typography>:</Typography>
                <Typography style={{ marginLeft: "20px", fontWeight: 700 }}>
                  {modal.dad_name}
                </Typography>
              </div>
            </TabPane>
            <TabPane tab={[<Typography>Pendukung Lainnya</Typography>]} key="2">
              <Typography>Content of Tab Pane 2</Typography>
              <Typography>Content of Tab Pane 2</Typography>
              <Typography>Content of Tab Pane 2</Typography>
            </TabPane>
            <TabPane tab={[<Typography>Diagram Nilai</Typography>]} key="3">
              <Diagram />
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </div>
  );
}

export default TableData;
