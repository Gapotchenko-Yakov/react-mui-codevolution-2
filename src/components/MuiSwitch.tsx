import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import React, { useRef, useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState({
    darkModeChecked: false,
    translateChecked: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
  };

  return (
    <Box>
      <FormControl>
        <FormLabel></FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="Dark mode"
            control={
              <Switch
                checked={checked.darkModeChecked}
                onChange={handleChange}
                name="darkModeChecked"
              />
            }
          />
          <FormControlLabel
            label="Translate"
            control={
              <Switch
                checked={checked.translateChecked}
                onChange={handleChange}
                name="translateChecked"
                size="small"
                color="success"
              />
            }
          />
        </FormGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiSwitch;
