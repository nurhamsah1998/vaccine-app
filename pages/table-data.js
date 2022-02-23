import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table, Modal, Tabs } from "antd";
const { TabPane } = Tabs;
import useFetch from "./component/useFetch";

function TableData() {
  const [data, page] = useFetch();
  console.log(page.length);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modal, setModal] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: "Name",
      width: "10%",
      dataIndex: "name",
      render: (data) => <p style={{ fontWeight: 600 }}>{data}</p>,
    },
    {
      title: "no. Telfon",
      width: "10%",
      dataIndex: "phone",
      render: (data) => <p>{data}</p>,
    },
    {
      title: "Alamat",
      width: "10%",
      dataIndex: "address",
      render: (data) => <p>{data}</p>,
    },
    {
      title: "Mentor",
      width: "10%",
      dataIndex: "mentor",
      render: (data) => <p>{data}</p>,
    },
    {
      title: "Training",
      width: "10%",
      dataIndex: "training",
      render: (data) => <p>{data}</p>,
    },
  ];
  function handleRow(e) {
    if (e._id) {
      setIsModalVisible(true);
      setModal(e);
    }
  }
  return (
    <div>
      <Table
        onRow={(record, rowIndex) => {
          return { onClick: () => handleRow(record) };
        }}
        columns={columns}
        pagination={{
          pageSize: 3,
          total: page,
        }}
        dataSource={data}
        bordered
      />
      <Modal
        title={`Profil Lengkap ${modal.name}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Tabs type="card">
            <TabPane tab="Profil Pribadi" key="1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ width: "160px" }}>NAMA</p>
                <p>:</p>
                <p style={{ marginLeft: "20px", fontWeight: 700 }}>{modal.name}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ width: "160px" }}>no. Telpon</p>
                <p>:</p>
                <p style={{ marginLeft: "20px", fontWeight: 700 }}>{modal.phone}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ width: "160px" }}>Training</p>
                <p>:</p>
                <p style={{ marginLeft: "20px", fontWeight: 700 }}>{modal.training}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ width: "160px" }}>Alamat</p>
                <p>:</p>
                <p style={{ marginLeft: "20px", fontWeight: 700 }}>{modal.address}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ width: "160px" }}>Pendamping</p>
                <p>:</p>
                <p style={{ marginLeft: "20px", fontWeight: 700 }}>{modal.mentor}</p>
              </div>
            </TabPane>
            <TabPane tab="Dokument Dukungan" key="2">
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
            </TabPane>
            <TabPane tab="Kelemahan" key="3">
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </div>
  );
}

export default TableData;
