import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState<string>("<1");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <Box>
      <FormControl error={!["1-3", "3-5"].includes(value)}>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio color="success" />}
            label={"<1"}
            value={"<1"}
          />
          <FormControlLabel control={<Radio />} label={"1-3"} value={"1-3"} />
          <FormControlLabel control={<Radio />} label={"3-5"} value={"3-5"} />
          <FormControlLabel control={<Radio />} label={"5-7"} value={"5-7"} />
          <FormControlLabel control={<Radio />} label={"7-10"} value={"7-10"} />
          <FormControlLabel control={<Radio />} label={">10"} value={">10"} />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
