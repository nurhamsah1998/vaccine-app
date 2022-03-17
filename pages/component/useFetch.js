import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
import "antd/dist/antd.css";

function useFetch() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const openNotification = (placement) => {
    notification.error({
      message: `ERROR TO CONNECT DATABASE `,
      description:
        "This is the cdfgdfgdfgdfgdfgthe notification. This is the content of the notification.",
      placement,
    });
  };
  const openNotification_success = (placement) => {
    notification.success({
      message: `berhasil menhapus data `,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
    });
  };
  function dataBase() {
    axios
      .get("http://localhost:8000/server")
      .then((res) => {
        setData(res.data);
        setPage(res?.data?.length);
      })
      .catch((error) => {
        openNotification("bottomRight");
      });
  }

  return [data, setData, page];
}

export default useFetch;
