import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ControlledOpenSelect({ x, label }) {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: x }} color="secondary">
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          color="secondary"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem color="secondary" value={10}>
            SINOVAC
          </MenuItem>
          <MenuItem value={20}>ASTRAZENECA</MenuItem>
          <MenuItem value={30}>PFIZER</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
