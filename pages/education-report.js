import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Modal, Tabs } from 'antd';
const { TabPane } = Tabs;
import axios from 'axios';
import { notification } from 'antd';
import CircularProgress from '@mui/material/CircularProgress';
import 'antd/dist/antd.css';
import { Button, Box, Typography, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Drawer from './component/Drawer';
import { red, orange, green } from '@mui/material/colors';
import { useQuery } from 'react-query';

function EducationReport() {
  const [loading, setLoading] = useState(false);
  const [server, setServer] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modal, setModal] = useState([]);
  const [mm, setMm] = useState(0);
  const [bi, setBi] = useState(0);
  const [jurusan, setJurusan] = useState(0);
  const [religion, setReligion] = useState(0);
  const [confirm, setConfirm] = useState(false);

  const openNotification_success = (placement) => {
    notification.success({
      message: `Berhasil Menghapus Data `,
      description: 'Semua informasi dari data tersebut sudah dihapus.',
      placement,
    });
  };
  const openNotification_successnilai = (placement) => {
    notification.success({
      message: `Berhasil Menyimpan dilocal API`,
      description: 'Nilai siswa sudah terkirim ke database sekolah.',
      placement,
    });
  };
  const openNotificationEror = (placement) => {
    notification.error({
      message: `GAGAL MENGAKSES DATABASE`,
      description: 'SERVER DOWN code:e334Rff5599666',
      placement,
    });
  };
  const openNotificationErornilai = (placement) => {
    notification.error({
      message: `Nilai tidak boleh ada yang kosong`,
      description: 'Isikan nilai siswa susai dengan nilai ujian akhir semester',
      placement,
    });
  };
  const openNotificationErornilaival = (placement) => {
    notification.error({
      message: `Nilai melebihi standart nilai indonesia`,
      description: 'masukkan nilai hanya 0 - 100',
      placement,
    });
  };

  function dataBase() {
    axios
      .get('http://localhost:8000/get')
      .then((res) => {
        setServer(res.data);
        setPage(res?.data?.length);
        console.log('ini dari database useEffect');
      })
      .catch((error) => {
        openNotificationEror('bottomRight');
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

  const columns = [
    {
      key: 'name',
      title: 'Name',
      width: '10%',
      dataIndex: 'name',
      render: (data) => <Typography>{data}</Typography>,
    },
    {
      key: 'pendidikan_agama',
      title: 'Pendidikan agama',
      width: '10%',
      dataIndex: 'pendidikan_agama',
      render(data) {
        return {
          props: {
            style: {
              backgroundColor:
                parseInt(data) > 90
                  ? green[500]
                  : parseInt(data) > 80
                  ? green[200]
                  : parseInt(data) > 70
                  ? orange[200]
                  : parseInt(data) > 60
                  ? orange[300]
                  : parseInt(data) > 50
                  ? orange[500]
                  : parseInt(data) > 40
                  ? red[200]
                  : parseInt(data) > 30
                  ? red[300]
                  : parseInt(data) > 20
                  ? red[500]
                  : parseInt(data) < 19 && red[800],
            },
          },
          children: <Typography fontWeight={800}>{data}</Typography>,
        };
      },
    },
    {
      key: 'bahasa_indonesia',
      title: 'Bahasa indonesia',
      width: '10%',
      dataIndex: 'bahasa_indonesia',
      render(data) {
        return {
          props: {
            style: {
              backgroundColor:
                parseInt(data) > 90
                  ? green[500]
                  : parseInt(data) > 80
                  ? green[200]
                  : parseInt(data) > 70
                  ? orange[200]
                  : parseInt(data) > 60
                  ? orange[300]
                  : parseInt(data) > 50
                  ? orange[500]
                  : parseInt(data) > 40
                  ? red[200]
                  : parseInt(data) > 30
                  ? red[300]
                  : parseInt(data) > 20
                  ? red[500]
                  : parseInt(data) < 19 && red[800],
            },
          },
          children: <Typography fontWeight={800}>{data}</Typography>,
        };
      },
    },
    {
      key: 'kejuruan',
      title: 'Kejuruan',
      width: '10%',
      dataIndex: 'kejuruan',
      render(data) {
        return {
          props: {
            style: {
              backgroundColor:
                parseInt(data) > 90
                  ? green[500]
                  : parseInt(data) > 80
                  ? green[200]
                  : parseInt(data) > 70
                  ? orange[200]
                  : parseInt(data) > 60
                  ? orange[300]
                  : parseInt(data) > 50
                  ? orange[500]
                  : parseInt(data) > 40
                  ? red[200]
                  : parseInt(data) > 30
                  ? red[300]
                  : parseInt(data) > 20
                  ? red[500]
                  : parseInt(data) < 19 && red[800],
            },
          },
          children: <Typography fontWeight={800}>{data}</Typography>,
        };
      },
    },
    {
      key: 'matematika',
      title: 'Matematika',
      width: '10%',
      dataIndex: 'matematika',
      render(data) {
        return {
          props: {
            style: {
              backgroundColor:
                parseInt(data) > 90
                  ? green[500]
                  : parseInt(data) > 80
                  ? green[200]
                  : parseInt(data) > 70
                  ? orange[200]
                  : parseInt(data) > 60
                  ? orange[300]
                  : parseInt(data) > 50
                  ? orange[500]
                  : parseInt(data) > 40
                  ? red[200]
                  : parseInt(data) > 30
                  ? red[300]
                  : parseInt(data) > 20
                  ? red[500]
                  : parseInt(data) < 20 && red[800],
            },
          },
          children: <Typography fontWeight={800}>{data}</Typography>,
        };
      },
    },
  ];
  function handleRow(e) {
    setJurusan(e?.kejuruan);
    setIsModalVisible(true);
    setModal(e);
    setMm(e?.matematika);
    setBi(e?.bahasa_indonesia);
    setReligion(e?.pendidikan_agama);
  }
  function nur() {
    setConfirm(true);
  }
  function handleDelete(e) {
    setLoading(true);
    axios
      .delete('http://localhost:8000/remove/' + e.id)
      .then((res) => {
        setTimeout(() => {
          dataBase();
          openNotification_success('bottomRight');
          setIsModalVisible(false);
          setConfirm(false);
          setLoading(false);
        }, 500);
      })
      .catch((er) => {
        console.log(er);
      });
  }
  function closeConfirm() {
    setConfirm(false);
  }
  function handleMM(e) {
    if (e.target.value > 100) {
      openNotificationErornilaival('bottomRight');
      e.target.value = null;
    }
  }
  function hamsahnur(e) {
    // if (mm == null || bi == null || religion == null || jurusan == null) {
    //   openNotificationErornilai('bottomRight');
    // } else {
    //   const body = {
    //     matematika: parseInt(mm),
    //     kejuruan: parseInt(jurusan),
    //     bahasa_indonesia: parseInt(bi),
    //     pendidikan_agama: parseInt(religion),
    //   };
    //   axios.patch('http://localhost:8000/server/' + e._id, body).then((res) => {
    //     openNotification_successnilai('bottomRight');
    //     dataBase();
    //     setIsModalVisible(false);
    //     // setMm(modal?.matematika);
    //     // setBi(modal?.bahasa_indonesia);
    //     // setReligion(modal?.pendidikan_agama);
    //     // setKejuruan(modal?.kejuruan);
    //   });
    // }
    alert('comming soon home boy!!');
    setIsModalVisible(false);
  }
  function hamsah1() {
    return (
      <div>
        <CircularProgress color="warning" size={'20px'} sx={{ marginTop: '5px' }} />
      </div>
    );
  }
  console.log(mm);
  return (
    <Drawer label="Nilai Raport Siswa">
      <Modal
        title={[<Typography style={{ margin: '0px' }}>Yakin Ingin Menghapus Data ?</Typography>]}
        visible={confirm}
        onCancel={closeConfirm}
        footer={[
          <Button sx={{ mr: 5 }} onClick={closeConfirm} color="secondary" variant="contained">
            Batalkan
          </Button>,
          <LoadingButton loadingIndicator={hamsah1()} onClick={() => handleDelete(modal)} loading={loading} color="warning" variant="contained">
            setuju
          </LoadingButton>,
        ]}
      >
        <Box>
          <Typography fontSize="15px">
            Dengan menyetujui penghapusan data, semua data akan terhapus meliputi nama, nomer handphone, alamat, tanggal lahir, nama mentor dan training. Semua data tersebut akan
            terhapus dan tidak bisa direcovery lagi !
          </Typography>
        </Box>
      </Modal>
      <Box>
        {server?.length < 1 ? (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img style={{ transform: 'scale(0.5)', marginTop: '-190px' }} src="/empty-data.svg" />
            <Typography textAlign={'center'} sx={{ marginTop: '-140px' }} fontWeight={700} fontSize={34}>
              Tidak ada data yang ditampilkan !!
            </Typography>
          </div>
        ) : (
          <Table
            onRow={(record, rowIndex) => {
              return { onClick: () => handleRow(record), style: { cursor: 'pointer' } };
            }}
            columns={columns}
            pagination={{
              pageSize: 10,
              total: page,
            }}
            dataSource={server}
            bordered
            key={columns.key}
          />
        )}
      </Box>
      <Modal
        title={`Profil Lengkap ${modal.name}`}
        visible={isModalVisible}
        cancelText={`Hapus Data ${modal.name}`}
        onCancel={showModal}
        closable={nur}
        okText={`Modif Data ${modal.name}`}
        footer={[
          <Button onClick={nur} sx={{ mr: 2 }} color="warning" variant="contained">
            Delete this data
          </Button>,
          <Button type="submit" onClick={() => hamsahnur(modal)} color="secondary" variant="contained">
            Upload
          </Button>,
        ]}
      >
        <Tabs type="card">
          <TabPane tab={[<Typography>Short Profile</Typography>]} key="1">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography style={{ width: '160px' }}>NAMA</Typography>
              <Typography>:</Typography>
              <Typography style={{ marginLeft: '20px', fontWeight: 700 }}>{modal.name}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography style={{ width: '160px' }}>no. Telpon</Typography>
              <Typography>:</Typography>
              <Typography style={{ marginLeft: '20px', fontWeight: 700 }}>{modal.phone}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography style={{ width: '160px' }}>Nama Ibu</Typography>
              <Typography>:</Typography>
              <Typography style={{ marginLeft: '20px', fontWeight: 700 }}>{modal.mom_name}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography style={{ width: '160px' }}>Alamat</Typography>
              <Typography>:</Typography>
              <Typography style={{ marginLeft: '20px', fontWeight: 700 }}>{modal.address}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography style={{ width: '160px' }}>Nama Ayah</Typography>
              <Typography>:</Typography>
              <Typography style={{ marginLeft: '20px', fontWeight: 700 }}>{modal.dad_name}</Typography>
            </div>
          </TabPane>
          <TabPane tab={[<Typography>Masukan nilai siswa</Typography>]} key="2">
            <div style={{ marginTop: '10px' }}>
              <TextField
                value={mm}
                defaultValue={modal?.matematika}
                label="Nilai Matematika"
                color="secondary"
                type="number"
                fullWidth
                onChange={(e) => {
                  handleMM(e), setMm(e.target.value);
                }}
                InputProps={{ inputProps: { min: 0, max: 100 } }}
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <TextField
                value={bi}
                defaultValue={modal.bahasa_indonesia}
                label="Nilai Bahasa indonesia"
                color="secondary"
                type="number"
                fullWidth
                onChange={(e) => {
                  handleMM(e), setBi(e.target.value);
                }}
                InputProps={{ inputProps: { min: 0, max: 100 } }}
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <TextField
                value={religion}
                defaultValue={modal.pendidikan_agama}
                label="Nilai Agama"
                color="secondary"
                type="number"
                fullWidth
                onChange={(e) => {
                  handleMM(e), setReligion(e.target.value);
                }}
                InputProps={{ inputProps: { min: 0, max: 100 } }}
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <TextField
                value={jurusan}
                defaultValue={modal.kejuruan}
                label="Kejuruan"
                color="secondary"
                type="number"
                fullWidth
                onChange={(e) => {
                  handleMM(e), setJurusan(e.target.value);
                }}
                InputProps={{ inputProps: { min: 0, max: 100 } }}
              />
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </Drawer>
  );
}

export default EducationReport;
