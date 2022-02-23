import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { teal, grey } from "@mui/material/colors";

export default function BasicModal({ label, content, x, y, title }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: x,
    bgcolor: "white",
    boxShadow: 24,
    borderRadius: "12px",
  };
  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              bgcolor: teal[400],
              borderRadius: "12px 12px 0px 0px",
              p: 1,
            }}
          >
            <Button
              sx={{
                maxWidth: "25px",
                maxHeight: "25px",
                minWidth: "25px",
                minHeight: "25px",
                fontWeight: 700,
              }}
              onClick={handleClose}
              variant="contained"
              color="warning"
            >
              X
            </Button>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="common.white"
              fontWeight={700}
            >
              {label}
            </Typography>

            <Button
              sx={{
                maxWidth: "25px",
                maxHeight: "25px",
                minWidth: "25px",
                minHeight: "25px",
                fontWeight: 700,
                color: "#fff",
                bgcolor: grey[500],
              }}
              onClick={handleClose}
              variant="contained"
            >
              ?
            </Button>
          </Box>
          <Box sx={{ padding: "20px 20px", height: y, overflow: "auto" }}>{content}</Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              height: "30px",
              bgcolor: teal[400],
              borderRadius: "0px 0px 12px 12px",
              p: 1,
            }}
          ></Box>
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.defaultProps = {
  label: "Text here",
  content: "content here",
  y: "400px",
  x: 400,
};
