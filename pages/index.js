import React from "react";
import Modal from "./component/Modal";
import Content from "./component/content";
import AddingPatient from "./component/Form/AddingPatient";
import Drawer from "./component/Drawer";
import Link from "next/link";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function index() {
  return (
    <Drawer label="nurhamsah">
      <Content />
    </Drawer>
  );
}

export default index;
