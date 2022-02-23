import React from "react";
import { Box, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

function BoxHover({ bgcolor, bgcolorHover, heightContent, widthContent, Y, label }) {
  return (
    <div
      style={{ position: "absolute", top: "50%", left: "10%", transform: "translate(-50px, -50%)" }}
    >
      <Box
        sx={{
          height: heightContent,
          width: widthContent,
          transition: "0.2s all",
          bgcolor: bgcolor,
          cursor: "pointer",
          borderRadius: "12px",
          color: "white",
          fontWeight: 700,
          fontSize: "15px",
          "&:hover": {
            bgcolor: bgcolorHover,
            transform: Y,
            boxShadow: "0px 5px 10px 1px #959595",
          },
        }}
      >
        {label}
      </Box>
    </div>
  );
}

export default BoxHover;

BoxHover.defaultProps = {
  bgcolor: teal[400],
  bgcolorHover: teal[500],
  widthContent: "90px",
  heightContent: "40px",
  Y: "translateY(-5px)",
  label: "Empty",
};
